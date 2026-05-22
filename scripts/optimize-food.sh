#!/usr/bin/env bash
# Optimize food photos for the site.
# - Accepts HEIC / HEIF / JPG / JPEG / PNG inputs.
# - Resamples to fit MAX_DIM on the longest side (no crop, aspect preserved).
# - Writes JPEG at QUALITY, named food-NN.jpg, sequentially.
# - Uses macOS `sips`. Run on macOS.
#
# Usage:
#   scripts/optimize-food.sh                       # src=.food-originals  out=static/food
#   scripts/optimize-food.sh <src_dir>             # custom src,         out=static/food
#   scripts/optimize-food.sh <src_dir> <out_dir>   # custom both
#
# Env overrides:
#   MAX_DIM=1800   QUALITY=82   PREFIX=food

set -euo pipefail

SRC="${1:-.food-originals}"
OUT="${2:-src/lib/assets/food}"
MAX_DIM="${MAX_DIM:-1800}"
QUALITY="${QUALITY:-82}"
PREFIX="${PREFIX:-food}"

if ! command -v sips >/dev/null 2>&1; then
  echo "error: sips not found (this script requires macOS)" >&2
  exit 1
fi

if [ ! -d "$SRC" ]; then
  echo "error: source dir '$SRC' does not exist" >&2
  exit 1
fi

mkdir -p "$OUT"

# Clear any prior PREFIX-NN.jpg in the output dir (keeps other files intact).
find "$OUT" -maxdepth 1 -type f -name "${PREFIX}-[0-9][0-9].jpg" -delete

shopt -s nullglob nocaseglob
files=( "$SRC"/*.{jpg,jpeg,png,heic,heif} )
shopt -u nocaseglob
if [ ${#files[@]} -eq 0 ]; then
  echo "error: no images found in '$SRC'" >&2
  exit 1
fi

# Stable order: sort by filename.
IFS=$'\n' files=( $(printf '%s\n' "${files[@]}" | sort) )
unset IFS

i=1
for f in "${files[@]}"; do
  n=$(printf "%s-%02d.jpg" "$PREFIX" "$i")
  out="$OUT/$n"
  if sips -s format jpeg -s formatOptions "$QUALITY" -Z "$MAX_DIM" "$f" --out "$out" >/dev/null 2>&1; then
    size=$(du -h "$out" | cut -f1)
    echo "  $n  ($size)  <- $(basename "$f")"
  else
    echo "  skip: $(basename "$f")  (sips failed)" >&2
  fi
  i=$((i+1))
done

echo
echo "done. wrote $((i-1)) image(s) to $OUT/"
echo "total: $(du -sh "$OUT" | cut -f1)"
