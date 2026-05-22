<script>
  import Arrow from './Arrow.svelte';
  import Placeholder from './Placeholder.svelte';
  import { openContact } from '$lib/stores/contact.svelte.js';

  const BEAUTY_MENU = [
    { name: 'Swedish Massage', note: '60 mins · classic full-body relaxation' },
    { name: 'Aromatherapy Massage', note: '60 mins · essential-oil blends, sleep & calm' },
    { name: 'Prenatal & Postnatal', note: '60 mins · safe positioning, gentle pressure' },
    { name: 'Reflexology', note: '30 mins · foot focus, deep release' },
    { name: 'Facial — full', note: '60 mins · organic Green People products' },
    { name: 'Manicure & Pedicure', note: 'individual treatments, natural finishes' },
    { name: 'Hair treatment', note: 'with organic henna · 90 mins' }
  ];
</script>

<section class="section wrap" id="beauty">
  <div class="section-head">
    <div class="section-head__title">
      <div class="svc__number">01 — Beauty & Wellness</div>
      <h2 class="h-section" style="margin-top: 16px">
        A women-only<br /><i>sanctuary</i>, at home.
      </h2>
    </div>
    <div class="section-head__meta">
      <p class="body-m">
        Lita comes to you with everything she needs — towels, oils, and a
        quiet hour where it's just you. All beauty appointments are
        women-only, every product organic.
      </p>
    </div>
  </div>

  <div class="svc svc-beauty">
    <div class="svc__hero">
      <div class="svc__features">
        <span class="chip">Women-only</span>
        <span class="chip">Organic products</span>
        <span class="chip">In your home</span>
        <span class="chip">Newport area</span>
      </div>

      <div class="svc__menu">
        {#each BEAUTY_MENU as row}
          <div class="svc__row svc__row--noprice">
            <div class="name">
              {row.name}
              <small>{row.note}</small>
            </div>
            <div class="dot-end" aria-hidden="true">·</div>
          </div>
        {/each}
      </div>

      <p class="price-note">
        Each treatment is priced individually — message Lita for the latest
        rates and any seasonal offers.
      </p>

      <div class="svc__cta-row">
        <button class="btn btn--primary" onclick={() => openContact('beauty')}>
          Message Lita to book <Arrow />
        </button>
        <span class="meta">Replies within 2 hrs</span>
      </div>
    </div>

    <div class="svc__media">
      <Placeholder label="oils & candles · still life" className="ph-a" />
      <Placeholder label="green people products" className="ph-b" />
      <Placeholder label="pedicure detail" className="ph-c" />
      <Placeholder label="hands · henna detail" className="ph-d" />
      <Placeholder label="rose & ingredients" className="ph-e" />
    </div>
  </div>
</section>
