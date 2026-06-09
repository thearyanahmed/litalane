<script module>
  const claimedByGroup = new Map();

  function claimsFor(group) {
    if (!group) return null;
    let s = claimedByGroup.get(group);
    if (!s) {
      s = new Set();
      claimedByGroup.set(group, s);
    }
    return s;
  }

  function srcKey(p) {
    return typeof p === 'string' ? p : p?.img?.src ?? null;
  }
</script>

<script>
  import { onMount, onDestroy, untrack } from 'svelte';

  let {
    images,
    interval = 5000,
    offset = 0,
    duration = 900,
    className = '',
    alt = '',
    fit = 'cover',
    frame = 'none',
    orientation = 'any',
    group = null
  } = $props();

  const ratioOf = (p) => {
    const w = typeof p === 'string' ? null : p?.img?.w;
    const h = typeof p === 'string' ? null : p?.img?.h;
    return w && h ? w / h : 1;
  };

  const pool = $derived.by(() => {
    if (orientation === 'any') return images;
    const filtered = images.filter((p) => {
      const r = ratioOf(p);
      if (orientation === 'landscape') return r >= 1.15;
      if (orientation === 'portrait')  return r <= 0.95;
      if (orientation === 'square')    return r > 0.85 && r < 1.18;
      return true;
    });
    return filtered.length ? filtered : images;
  });

  let claimedSrc = null;

  function release(claims) {
    if (claims && claimedSrc) claims.delete(claimedSrc);
    claimedSrc = null;
  }

  function claim(claims, p) {
    const k = srcKey(p);
    if (claims && k) claims.add(k);
    claimedSrc = k;
  }

  function pickIndex(p, startIdx, claims) {
    const len = p.length;
    if (!len) return 0;
    const norm = ((startIdx % len) + len) % len;
    if (!claims) return norm;
    for (let i = 0; i < len; i++) {
      const cand = (norm + i) % len;
      const k = srcKey(p[cand]);
      if (k && !claims.has(k)) return cand;
    }
    return norm;
  }

  let idx = $state(
    untrack(() => {
      const p = images;
      const claims = claimsFor(group);
      const start = p.length ? ((offset % p.length) + p.length) % p.length : 0;
      const chosen = pickIndex(p, start, claims);
      claim(claims, p[chosen]);
      return chosen;
    })
  );
  let timer;

  let lastPool;
  $effect(() => {
    if (pool === lastPool) return;
    lastPool = pool;
    const claims = claimsFor(group);
    release(claims);
    const start = pool.length ? ((offset % pool.length) + pool.length) % pool.length : 0;
    const chosen = pickIndex(pool, start, claims);
    claim(claims, pool[chosen]);
    idx = chosen;
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

  function advance() {
    if (!pool.length) return;
    const claims = claimsFor(group);
    release(claims);
    const chosen = pickIndex(pool, idx + 1, claims);
    claim(claims, pool[chosen]);
    idx = chosen;
  }

  onMount(() => {
    timer = setInterval(advance, interval);
  });

  onDestroy(() => {
    clearInterval(timer);
    release(claimsFor(group));
  });

  const current = $derived(pool[idx]);
  const srcOf = (p) => (typeof p === 'string' ? p : p?.img?.src);
  const sourcesOf = (p) => (typeof p === 'string' ? null : p?.sources);
  const widthOf = (p) => (typeof p === 'string' ? undefined : p?.img?.w);
  const heightOf = (p) => (typeof p === 'string' ? undefined : p?.img?.h);
  const focalOf = (p) => (typeof p === 'string' ? null : p?.focal);
  const positionOf = (p) => {
    const f = focalOf(p);
    if (!f) return 'center center';
    const fx = Math.max(0, Math.min(1, f[0])) * 100;
    const fy = Math.max(0, Math.min(1, f[1])) * 100;
    return `${fx.toFixed(2)}% ${fy.toFixed(2)}%`;
  };
</script>

<div
  class="img-slot {className}"
  class:img-slot--contain={fit === 'contain'}
  class:img-slot--frame-cream={frame === 'cream'}
  class:img-slot--frame-deep={frame === 'deep'}
  class:img-slot--frame-none={frame === 'none'}
>
  {#key srcOf(current)}
    <picture class="img-slot__pic" in:blurFade={{ duration }} out:blurFade={{ duration }}>
      {#if sourcesOf(current)}
        {#each Object.entries(sourcesOf(current)) as [format, srcset]}
          <source {srcset} type={`image/${format}`} />
        {/each}
      {/if}
      <img
        src={srcOf(current)}
        width={widthOf(current)}
        height={heightOf(current)}
        {alt}
        class="img-slot__img"
        style:object-fit={fit}
        style:object-position={positionOf(current)}
        loading="lazy"
        decoding="async"
      />
    </picture>
  {/key}
  <span class="img-slot__inner" aria-hidden="true"></span>
</div>

<style>
  .img-slot {
    position: relative;
    overflow: hidden;
    border-radius: 6px;
  }
  .img-slot--frame-cream { background: #F1E6D2; }
  .img-slot--frame-deep  { background: #EBDDC8; }
  .img-slot--frame-none  { background: transparent; }
  .img-slot__pic {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
  .img-slot__img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    will-change: opacity, filter, transform;
    transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
  }
  .img-slot__inner {
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(43, 24, 16, 0.06),
                inset 0 1px 2px rgba(43, 24, 16, 0.04);
  }
  .img-slot:hover .img-slot__img {
    transform: scale(1.04);
  }
  .img-slot--contain:hover .img-slot__img {
    transform: scale(1.02);
  }
  @media (prefers-reduced-motion: reduce) {
    .img-slot__img { transition: none; }
    .img-slot:hover .img-slot__img { transform: none; }
  }
</style>
