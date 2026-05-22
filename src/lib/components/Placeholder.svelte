<script>
  let { label, className = '', style = '', dark = false, center = false } = $props();
</script>

<div class="ph {dark ? 'ph--dark' : ''} {center ? 'ph--center' : ''} {className}" {style} aria-hidden="true">
  <span class="ph__label">{label}</span>
</div>
