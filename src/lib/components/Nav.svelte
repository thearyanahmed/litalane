<script>
  import { base } from '$app/paths';
  import Arrow from './Arrow.svelte';
  import { openContact } from '$lib/stores/contact.svelte.js';
</script>

<nav class="nav" aria-label="Primary">
  <div class="nav__inner">
    <a href="{base}/#top" class="nav__brand" aria-label="Litalane home">
      <img src="{base}/litalane-logo.webp" alt="" class="nav__mark" width="44" height="44" />
      <div class="wm">
        <span class="wm__lita">LITA</span> <span class="wm__lane">LANE</span>
        <small>Newport · Wales</small>
      </div>
    </a>
    <ul class="nav__links" role="list">
      <li><a href="{base}/#beauty">Beauty & Wellness</a></li>
      <li><a href="{base}/#cleaning">Cleaning</a></li>
      <li><a href="{base}/#chef">Private Chef</a></li>
      <li><a href="{base}/#about">About Lita</a></li>
      <li><a href="{base}/#faq">FAQ</a></li>
    </ul>
    <button type="button" class="btn btn--dark btn--small" onclick={() => openContact()} aria-label="Contact Lita — open contact options">
      Contact Lita <Arrow />
    </button>
  </div>
</nav>
