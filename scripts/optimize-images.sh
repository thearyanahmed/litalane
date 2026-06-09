#!/usr/bin/env bash
# Optimize site photos (food / care / home).
# - Accepts HEIC / HEIF / JPG / JPEG / PNG inputs.
# - Resamples to fit MAX_DIM on the longest side (no crop, aspect preserved).
# - Writes JPEG at QUALITY, named <kind>-NN.jpg, sequentially.
# - Uses macOS `sips`. Run on macOS.
#
# Usage:
#   scripts/optimize-images.sh food            # .food-originals -> src/lib/assets/food
#   scripts/optimize-images.sh care            # .care-originals -> src/lib/assets/care
#   scripts/optimize-images.sh home            # .home-originals -> src/lib/assets/home
#   scripts/optimize-images.sh all             # run all three, skip kinds whose source dir is missing
#   scripts/optimize-images.sh <kind> <src> <out>   # override paths
#
# Env overrides:
#   MAX_DIM=1800   QUALITY=82

set -euo pipefail

MAX_DIM="${MAX_DIM:-1800}"
QUALITY="${QUALITY:-82}"

if ! command -v sips >/dev/null 2>&1; then
  echo "error: sips not found (this script requires macOS)" >&2
  exit 1
fi

run_one() {
  local kind="$1"
  local src="${2:-.${kind}-originals}"
  local out="${3:-src/lib/assets/${kind}}"

  if [ ! -d "$src" ]; then
    echo "skip [$kind]: source dir '$src' does not exist"
    return 0
  fi

  mkdir -p "$out"

  find "$out" -maxdepth 1 -type f -name "${kind}-[0-9][0-9].jpg" -delete

  shopt -s nullglob nocaseglob
  local files=( "$src"/*.jpg "$src"/*.jpeg "$src"/*.png "$src"/*.heic "$src"/*.heif )
  shopt -u nocaseglob

  if [ ${#files[@]} -eq 0 ]; then
    echo "skip [$kind]: no images found in '$src'"
    return 0
  fi

  IFS=$'\n' files=( $(printf '%s\n' "${files[@]}" | sort) )
  unset IFS

  echo "==> $kind  ($src -> $out)"
  local i=1
  local f n outpath size
  for f in "${files[@]}"; do
    n=$(printf "%s-%02d.jpg" "$kind" "$i")
    outpath="$out/$n"
    if sips -s format jpeg -s formatOptions "$QUALITY" -Z "$MAX_DIM" "$f" --out "$outpath" >/dev/null 2>&1; then
      size=$(du -h "$outpath" | cut -f1)
      echo "  $n  ($size)  <- $(basename "$f")"
    else
      echo "  skip: $(basename "$f")  (sips failed)" >&2
    fi
    i=$((i+1))
  done

  echo "done [$kind]: wrote $((i-1)) image(s) to $out/  (total: $(du -sh "$out" | cut -f1))"
  echo
}

KIND="${1:-all}"

case "$KIND" in
  all)
    run_one food
    run_one care
    run_one home
    ;;
  food|care|home)
    run_one "$KIND" "${2:-}" "${3:-}"
    ;;
  *)
    echo "error: unknown kind '$KIND' (expected: food | care | home | all)" >&2
    exit 1
    ;;
esac
