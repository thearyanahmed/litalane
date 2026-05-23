<script>
  import { onMount, onDestroy, untrack } from 'svelte';

  let {
    images,
    interval = 5000,
    offset = 0,
    duration = 900,
    className = '',
    alt = ''
  } = $props();

  let idx = $state(
    untrack(() => (images.length ? ((offset % images.length) + images.length) % images.length : 0))
  );
  let timer;

  // Re-anchor index when the pool reference changes (e.g. hero cycle swaps
  // food <-> care). Each slot's distinct offset keeps the grid varied.
  let lastPool;
  $effect(() => {
    if (images === lastPool) return;
    lastPool = images;
    const len = images.length;
    idx = len ? ((offset % len) + len) % len : 0;
  });

  function blurFade(node, { duration = 900 }) {
    const reduced =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return {
      duration: reduced ? 0 : duration,
      css: (t) =>
        reduced
          ? `opacity: ${t};`
          : `opacity: ${t}; filter: blur(${(1 - t) * 14}px); transform: scale(${0.985 + t * 0.015});`
    };
  }

  onMount(() => {
    timer = setInterval(() => {
      if (images.length) idx = (idx + 1) % images.length;
    }, interval);
  });

  onDestroy(() => clearInterval(timer));
</script>

<div class="img-slot {className}">
  {#key images[idx]}
    <img
      src={images[idx]}
      {alt}
      class="img-slot__img"
      loading="lazy"
      decoding="async"
      in:blurFade={{ duration }}
      out:blurFade={{ duration }}
    />
  {/key}
</div>

<style>
  .img-slot {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 4px;
    background: var(--cream-deep);
  }
  .img-slot__img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    will-change: opacity, filter, transform;
    transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
  }
  .img-slot:hover .img-slot__img {
    transform: scale(1.20);
  }
  @media (prefers-reduced-motion: reduce) {
    .img-slot__img { transition: none; }
    .img-slot:hover .img-slot__img { transform: none; }
  }
</style>
