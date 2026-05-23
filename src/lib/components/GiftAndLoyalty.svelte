<script>
  import Eyebrow from './Eyebrow.svelte';
  import Lantern from './Lantern.svelte';
  import Arrow from './Arrow.svelte';
  import { openContact } from '$lib/stores/contact.svelte.js';
</script>

<section class="section wrap" aria-label="Gift vouchers and loyalty">
  <div class="gift-grid">
    <div class="gift-card">
      <div>
        <div class="lantern"><Lantern size={64} color="#fff" /></div>
        <Eyebrow light>{#snippet children()}Gift vouchers{/snippet}</Eyebrow>
        <h3 class="h-card" style="margin-top: 14px; font-size: 38px">
          Give a quiet hour.
        </h3>
        <p style="max-width: 360px; margin-top: 16px; color: rgba(255,255,255,.85); font-size: 15px">
          A handwritten card, posted to your recipient or shared by message.
          Redeemable against any service — any amount, any occasion.
        </p>
      </div>
      <div>
        <button class="btn" style="background: #fff; color: var(--terracotta)" onclick={() => openContact('gift')}>
          Request a voucher <Arrow />
        </button>
      </div>
    </div>

    <div class="loyalty-card">
      <div>
        <Eyebrow>{#snippet children()}Loyalty{/snippet}</Eyebrow>
        <div class="num" style="margin-top: 14px">10%</div>
        <h3 class="h-card" style="margin-top: 6px; font-size: 30px">
          off your 5th visit, always.
        </h3>
      </div>
      <div>
        <p class="body-m" style="margin-bottom: 12px">
          And a thank-you discount on your next visit for every friend you
          send our way.
        </p>
        <span class="chip">No card needed · we remember you</span>
      </div>
    </div>
  </div>
</section>
