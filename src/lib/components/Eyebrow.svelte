<script>
  let { children, light = false } = $props();
</script>

<div class="eyebrow" style:color={light ? 'var(--peach)' : null}>
  <span class="dot"></span>{@render children()}
</div>
