<script>
  import { tick } from 'svelte';
  import Lantern from './Lantern.svelte';
  import Arrow from './Arrow.svelte';
  import { contactState, closeContact } from '$lib/stores/contact.svelte.js';

  const CONTACT = {
    phoneDisplay: '+44 7761 496 145',
    phoneRaw: '+447761496145',
    whatsappRaw: '447761496145',
    email: 'hello@litalane.co.uk',
    hours: 'Mon — Sat · 8am — 8pm',
    area: 'Newport · Wales'
  };

  let copied = $state('');
  let drawerEl;
  let closeBtnEl;
  let lastFocus = null;

  let message = $derived(
    contactState.prefilled
      ? `Hi Lita, I'd like to book ${contactState.prefilled}. Could you let me know your availability?`
      : `Hi Lita, I'd like to book a service through litalane.co.uk. Could we chat?`
  );

  let waLink = $derived(`https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(message)}`);

  function copy(val, key) {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(val);
    }
    copied = key;
    setTimeout(() => (copied = ''), 1800);
  }

  function onOverlay(e) {
    if (e.target === e.currentTarget) closeContact();
  }

  function trapFocus(e) {
    if (e.key !== 'Tab' || !drawerEl) return;
    const focusables = drawerEl.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function onKey(e) {
    if (!contactState.open) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeContact();
    } else if (e.key === 'Tab') {
      trapFocus(e);
    }
  }

  $effect(() => {
    if (typeof window === 'undefined') return;
    if (contactState.open) {
      lastFocus = document.activeElement;
      document.body.classList.add('scroll-lock');
      window.addEventListener('keydown', onKey);
      tick().then(() => closeBtnEl?.focus());
    } else {
      document.body.classList.remove('scroll-lock');
      window.removeEventListener('keydown', onKey);
      if (lastFocus && typeof lastFocus.focus === 'function') {
        lastFocus.focus();
        lastFocus = null;
      }
    }
    return () => {
      document.body.classList.remove('scroll-lock');
      window.removeEventListener('keydown', onKey);
    };
  });
</script>

{#if contactState.open}
  <div class="booking-overlay" onclick={onOverlay} role="presentation">
    <div
      class="booking contact-drawer"
      bind:this={drawerEl}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      tabindex="-1"
    >
      <div class="booking__header">
        <div style="display: flex; align-items: center; gap: 12px">
          <span aria-hidden="true"><Lantern size={24} color="var(--cocoa)" /></span>
          <div>
            <div style="font-family: var(--f-display); font-size: 20px; font-weight: 500; letter-spacing: 0.04em; line-height: 1">LITALANE</div>
            <div style="font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.2em; color: var(--brass); text-transform: uppercase; margin-top: 3px">Get in touch</div>
          </div>
        </div>
        <button type="button" class="booking__close" bind:this={closeBtnEl} onclick={closeContact} aria-label="Close contact panel">×</button>
      </div>

      <div class="contact-body">
        <h2 id="contact-title" class="booking__h">
          Reach out & we'll<br /><i>arrange a time.</i>
        </h2>
        <p class="booking__sub">
          Litalane is a small, personal practice. The fastest way to book is
          a quick message — Lita usually replies within two hours.
        </p>

        {#if contactState.prefilled}
          <div class="contact-prefill">
            <span class="contact-prefill__label">You're enquiring about</span>
            <span class="contact-prefill__value">{contactState.prefilled}</span>
          </div>
        {/if}

        <a href={waLink} target="_blank" rel="noopener noreferrer" class="contact-card contact-card--primary">
          <div class="contact-card__icon">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.44 1.65 6.31L3 29l6.85-1.6A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.6c-1.94 0-3.74-.54-5.27-1.47l-.38-.22-3.95.92.94-3.87-.25-.4A10.55 10.55 0 0 1 5.4 16c0-5.85 4.75-10.6 10.6-10.6S26.6 10.15 26.6 16 21.85 26.6 16 26.6zm5.83-7.93c-.32-.16-1.88-.92-2.17-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58-.94-.83-1.58-1.86-1.76-2.18-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.53-.71-.54l-.6-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.62 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.4 4.75.75.32 1.34.51 1.8.66.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.6-.37z" />
            </svg>
          </div>
          <div class="contact-card__body">
            <div class="contact-card__label">WhatsApp · fastest</div>
            <div class="contact-card__value">{CONTACT.phoneDisplay}</div>
            <div class="contact-card__sub">Tap to open with your message ready</div>
          </div>
          <Arrow />
        </a>

        <div class="contact-card">
          <div class="contact-card__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div class="contact-card__body">
            <div class="contact-card__label">Call Lita</div>
            <div class="contact-card__value">{CONTACT.phoneDisplay}</div>
            <div class="contact-card__sub">{CONTACT.hours}</div>
          </div>
          <div class="contact-card__actions">
            <a href={`tel:${CONTACT.phoneRaw}`} class="btn btn--ghost btn--small">Call</a>
            <button class="btn btn--ghost btn--small" onclick={() => copy(CONTACT.phoneRaw, 'phone')}>
              {copied === 'phone' ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
        </div>

        <div class="contact-card">
          <div class="contact-card__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </div>
          <div class="contact-card__body">
            <div class="contact-card__label">Email</div>
            <div class="contact-card__value">{CONTACT.email}</div>
            <div class="contact-card__sub">Best for catering quotes & events</div>
          </div>
          <div class="contact-card__actions">
            <a href={`mailto:${CONTACT.email}`} class="btn btn--ghost btn--small">Email</a>
            <button class="btn btn--ghost btn--small" onclick={() => copy(CONTACT.email, 'email')}>
              {copied === 'email' ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
        </div>

        <div class="contact-meta">
          <div class="contact-meta__row">
            <span class="k">Area</span><span class="v">{CONTACT.area}</span>
          </div>
          <div class="contact-meta__row">
            <span class="k">Hours</span><span class="v">{CONTACT.hours}</span>
          </div>
          <div class="contact-meta__row">
            <span class="k">Languages</span><span class="v">English · Arabic</span>
          </div>
        </div>

        <p class="contact-footnote">
          Beauty appointments are women-only and held in a private space. Tell
          Lita what you'd like and she'll suggest a time and a quote.
        </p>
      </div>
    </div>
  </div>
{/if}
