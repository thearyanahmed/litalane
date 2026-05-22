<script>
  import { base } from '$app/paths';
  import Eyebrow from './Eyebrow.svelte';
  import Arrow from './Arrow.svelte';
  import Placeholder from './Placeholder.svelte';
  import ImageSlot from './ImageSlot.svelte';
  import { foodImages } from '$lib/food.js';
  import { openContact } from '$lib/stores/contact.svelte.js';

  const food = foodImages(base);
</script>

<section class="hero wrap" id="top">
  <div class="hero__grid">
    <div class="hero__left">
      <div class="hero__location">
        <Eyebrow>{#snippet children()}Newport · NP19 · Booking now{/snippet}</Eyebrow>
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
          <strong>3</strong>
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
      <Placeholder label="warm oils & linen" className="hero__ph-1" />
      <Placeholder label="manicure detail · hands" className="hero__ph-2" />
      <ImageSlot images={food} offset={0} interval={4800} className="hero__ph-3" alt="Fresh herbs from Lita's kitchen" />
      <ImageSlot images={food} offset={12} interval={5400} className="hero__ph-4" alt="Plated dish · chef service" />
    </div>
  </div>
</section>
