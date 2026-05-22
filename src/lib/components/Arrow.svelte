<script>
  let { rotate = 0 } = $props();
</script>

<span class="arrow" style:transform={`rotate(${rotate}deg)`} style:display="inline-block" aria-hidden="true">→</span>
