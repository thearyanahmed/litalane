<script>
  let { size = 28, color = 'currentColor' } = $props();
</script>

<svg width={size} height={size} viewBox="0 0 32 36" fill="none" stroke={color} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" style="display: block">
  <path d="M16 2 V5" />
  <path d="M10 5 H22" />
  <path d="M8 8 H24 L23 12 H9 Z" />
  <rect x="10" y="12" width="12" height="14" rx="0.5" />
  <path d="M12 12 V26 M16 12 V26 M20 12 V26" stroke-opacity="0.4" />
  <circle cx="16" cy="19" r="2.5" fill={color} fill-opacity="0.15" stroke="none" />
  <path d="M9 26 H23 L22 30 H10 Z" />
  <path d="M16 30 V33" />
  <circle cx="16" cy="34" r="1" fill={color} stroke="none" />
</svg>
