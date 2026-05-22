<script>
  import Arrow from './Arrow.svelte';
  import ImageSlot from './ImageSlot.svelte';
  import { foodImages } from '$lib/food.js';
  import { openContact } from '$lib/stores/contact.svelte.js';

  const food = foodImages();
</script>

<section class="section warm-section" id="chef" aria-labelledby="chef-heading">
  <div class="wrap">
    <div class="section-head">
      <div class="section-head__title">
        <div class="svc__number" style="color: var(--terracotta-d)">02 — Private Chef & Catering</div>
        <h2 id="chef-heading" class="h-section" style="margin-top: 16px">
          Food made by<br />a mother's <i>hands.</i>
        </h2>
      </div>
      <div class="section-head__meta">
        <p class="body-m">
          From a family dinner at your home, to a charity event for fifty —
          every dish is cooked by Lita herself, from her own kitchen.
          Halal-friendly. Made fresh, served warm.
        </p>
      </div>
    </div>

    <div class="svc svc-chef svc--reverse" style="border-top: 1px solid rgba(43,24,16,.15)">
      <div class="svc__media">
        <ImageSlot images={food} offset={3}  interval={5200} className="ph-a" alt="Plated dish · main" />
        <ImageSlot images={food} offset={9}  interval={5800} className="ph-b" alt="Dessert detail" />
        <ImageSlot images={food} offset={15} interval={4900} className="ph-c" alt="Ingredients still life" />
        <ImageSlot images={food} offset={21} interval={5500} className="ph-d" alt="Table set for guests" />
      </div>

      <div class="svc__hero">
        <div class="svc__features">
          <span class="chip">Halal-friendly</span>
          <span class="chip">Custom menus</span>
          <span class="chip">Vegetarian options</span>
          <span class="chip">Charity catering</span>
        </div>

        <p class="body-l" style="margin-bottom: 24px">
          Three ways to eat with us:
        </p>

        <div class="pkg-row" style="grid-template-columns: 1fr">
          <div class="pkg featured">
            <div class="pkg__tag">In-home dining</div>
            <div class="pkg__name">Private chef</div>
            <div class="pkg__desc">Lita arrives with everything, cooks in your kitchen, serves at your table. 3-course menu, agreed in advance.</div>
          </div>
          <div class="pkg">
            <div class="pkg__tag">Event catering</div>
            <div class="pkg__name">Custom catering</div>
            <div class="pkg__desc">Charity meals, parties, gatherings of 10–80. Menu shaped to your event and budget.</div>
          </div>
          <div class="pkg">
            <div class="pkg__tag">Family meals</div>
            <div class="pkg__name">Pickup & delivery</div>
            <div class="pkg__desc">Family-style dishes ready by 5pm. Pickup from Newport NP19 or local delivery on Fridays.</div>
          </div>
        </div>

        <p class="price-note">
          Catering is quoted to your menu, guest count, and occasion —
          every event is different. Get in touch for a quote.
        </p>

        <div class="svc__cta-row">
          <button class="btn btn--primary" onclick={() => openContact('chef')}>
            Request a menu & quote <Arrow />
          </button>
          <span class="meta">Reply in 24 hrs</span>
        </div>
      </div>
    </div>
  </div>
</section>
