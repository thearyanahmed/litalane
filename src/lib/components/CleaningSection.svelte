<script>
  import Arrow from './Arrow.svelte';
  import ImageSlot from './ImageSlot.svelte';
  import { homeImages } from '$lib/home.js';
  import { openContact } from '$lib/stores/contact.svelte.js';

  const home = homeImages();
</script>

<section class="section wrap" id="cleaning" aria-label="Home Cleaning">
  <div class="section-head">
    <div class="section-head__title">
      <div class="svc__number">03 — Home Cleaning</div>
    </div>
    <div class="section-head__meta">
      <p class="body-m">
        We don't sub-contract to strangers. Every cleaner is a woman Lita
        has met, trained, and works with regularly. DBS-checked, eco
        solvents, and the same face most weeks.
      </p>
    </div>
  </div>

  <div class="svc svc-clean">
    <div class="svc__hero">
      <div class="svc__features">
        <span class="chip">DBS-checked</span>
        <span class="chip">Eco solvents</span>
        <span class="chip">Same cleaner each visit</span>
        <span class="chip">Bring-our-own supplies</span>
      </div>

      <p class="body-l" style="margin-bottom: 8px">
        One-off cleans, or a quiet schedule that runs itself.
      </p>

      <div class="pkg-row">
        <div class="pkg">
          <div class="pkg__tag">One-off</div>
          <div class="pkg__name">Single visit</div>
          <div class="pkg__desc">Standard clean, deep clean, or end-of-tenancy.</div>
        </div>
        <div class="pkg featured">
          <div class="pkg__tag">Most popular</div>
          <div class="pkg__name">Weekly plan</div>
          <div class="pkg__desc">Same day, same cleaner, every week.</div>
        </div>
        <div class="pkg">
          <div class="pkg__tag">Recurring</div>
          <div class="pkg__name">Fortnightly / monthly</div>
          <div class="pkg__desc">A lighter rhythm. Skip a week any time, no fee.</div>
        </div>
      </div>

      <div class="svc__menu" style="margin-top: 32px">
        <div class="svc__row svc__row--noprice">
          <div class="name">Specialist oven clean<small>Deep carbon removal · eco solvents</small></div>
          <div class="dot-end" aria-hidden="true">·</div>
        </div>
        <div class="svc__row svc__row--noprice">
          <div class="name">End of tenancy<small>Full property, agent-ready</small></div>
          <div class="dot-end" aria-hidden="true">·</div>
        </div>
        <div class="svc__row svc__row--noprice">
          <div class="name">Post-event clean<small>After parties or guests</small></div>
          <div class="dot-end" aria-hidden="true">·</div>
        </div>
      </div>

      <p class="price-note">
        Cleaning starts from <strong>£16/hr</strong> on recurring plans.
        Message Lita for a quote based on your home and rhythm.
      </p>

      <div class="svc__cta-row">
        <button class="btn btn--primary" onclick={() => openContact('cleaning')}>
          Message Lita to book <Arrow />
        </button>
        <span class="meta">Confirmed within 48 hrs</span>
      </div>
    </div>

    <div class="svc__media">
      <ImageSlot images={home} offset={0} interval={5200} className="ph-a" alt="Lita Lane home cleaning" />
      <ImageSlot images={home} offset={1} interval={4800} className="ph-b" alt="Lita Lane home cleaning" />
      <ImageSlot images={home} offset={2} interval={5600} className="ph-c" alt="Lita Lane home cleaning" />
      <ImageSlot images={home} offset={3} interval={5000} className="ph-d" alt="Lita Lane home cleaning" />
    </div>
  </div>
</section>
