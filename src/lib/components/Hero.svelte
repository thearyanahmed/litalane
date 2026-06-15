<script>
  import { base } from '$app/paths';
  import Eyebrow from './Eyebrow.svelte';
  import Arrow from './Arrow.svelte';
  import ImageSlot from './ImageSlot.svelte';
  import Placeholder from './Placeholder.svelte';
  import { careImages } from '$lib/care.js';
  import { openContact } from '$lib/stores/contact.svelte.js';

  const care = careImages();
  const hasCare = care.length > 0;
  const N = care.length;
  const slotOffset = (i) => (N ? Math.floor((i * N) / 3) : 0);
  const srcOf = (p) => (p && typeof p === 'object' ? p.img?.src : p);
  const preloadA = srcOf(care[0]) ?? null;
  const preloadB = srcOf(care[slotOffset(1)]) ?? null;
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
        Women-only beauty rituals, trusted home cleaning, and hand-cooked
        meals — run by Lita from her home in Newport, with a small team of
        women she's chosen herself.
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
      {#if hasCare}
        <ImageSlot images={care} offset={slotOffset(0)} interval={4600} className="hero__ph-1" alt="Beauty & wellness ritual" orientation="landscape" group="hero-care" />
        <ImageSlot images={care} offset={slotOffset(1)} interval={5200} className="hero__ph-2" alt="Beauty & wellness ritual" orientation="portrait" group="hero-care" />
        <ImageSlot images={care} offset={slotOffset(2)} interval={4800} className="hero__ph-3" alt="Beauty & wellness ritual" orientation="landscape" group="hero-care" />
      {:else}
        <Placeholder label="beauty ritual · oils & candles" className="hero__ph-1" />
        <Placeholder label="massage · hands at work" className="hero__ph-2" />
        <Placeholder label="facial · close-up" className="hero__ph-3" />
      {/if}
    </div>
  </div>
</section>
