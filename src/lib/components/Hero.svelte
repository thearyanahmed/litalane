<script>
  import { base } from '$app/paths';
  import Eyebrow from './Eyebrow.svelte';
  import Arrow from './Arrow.svelte';
  import ImageSlot from './ImageSlot.svelte';
  import { foodImages } from '$lib/food.js';
  import { createHeroCycle } from '$lib/hero-images.svelte.js';
  import { openContact } from '$lib/stores/contact.svelte.js';

  const cycle = createHeroCycle();
  const food = foodImages();
  const preloadA = food[0] ?? null;
  const preloadB = food[Math.min(12, Math.max(0, food.length - 1))] ?? null;
</script>

<svelte:head>
  {#if preloadA}<link rel="preload" as="image" href={preloadA} fetchpriority="high" />{/if}
  {#if preloadB && preloadB !== preloadA}<link rel="preload" as="image" href={preloadB} />{/if}
</svelte:head>

<section class="hero wrap" id="top">
  <div class="hero__grid">
    <div class="hero__left">
      <div class="hero__location">
        <Eyebrow>{#snippet children()}Newport · Booking now{/snippet}</Eyebrow>
      </div>
      <h1 class="hero__title">
        A quieter<br />kind of <em>care.</em>
      </h1>
      <p class="hero__sub">
        Hand-cooked meals, women-only beauty rituals, and trusted home cleaning —
        run by Lita from her home in Newport, with a small team of women
        she's chosen herself.
      </p>
      <div class="hero__ctas">
        <button class="btn btn--primary" onclick={() => openContact()}>
          Message Lita <Arrow />
        </button>
        <a href="{base}/#beauty" class="btn btn--ghost">
          See what we offer
        </a>
      </div>

      <div class="hero__meta">
        <div class="item">
          <strong>16</strong>
          <span>Services</span>
        </div>
        <div class="item">
          <strong>4.9<span style="font-size:18px;color:var(--terracotta)">★</span></strong>
          <span>120+ reviews</span>
        </div>
        <div class="item">
          <strong>100%</strong>
          <span>Women-led</span>
        </div>
        <div class="item">
          <strong>2<span style="font-size:18px;color:var(--terracotta)">hr</span></strong>
          <span>Avg. reply time</span>
        </div>
      </div>
    </div>

    <div class="hero__right">
      <ImageSlot images={cycle.pool} offset={0} interval={4600} className="hero__ph-1" alt="Lita Lane care & kitchen" />
      <ImageSlot images={cycle.pool} offset={6} interval={5200} className="hero__ph-2" alt="Lita Lane care & kitchen" />
      <ImageSlot images={cycle.pool} offset={12} interval={4800} className="hero__ph-3" alt="Lita Lane care & kitchen" />
      <ImageSlot images={cycle.pool} offset={18} interval={5400} className="hero__ph-4" alt="Lita Lane care & kitchen" />
    </div>
  </div>
</section>
