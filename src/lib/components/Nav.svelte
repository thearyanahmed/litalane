<script>
  import { base } from '$app/paths';
  import Lantern from './Lantern.svelte';
  import Arrow from './Arrow.svelte';
  import { openContact } from '$lib/stores/contact.svelte.js';
</script>

<nav class="nav" aria-label="Primary">
  <div class="nav__inner">
    <a href="{base}/#top" class="nav__brand" aria-label="Litalane home">
      <span aria-hidden="true"><Lantern size={28} color="var(--cocoa)" /></span>
      <div class="wm">
        LITALANE
        <small>Newport · Wales</small>
      </div>
    </a>
    <ul class="nav__links" role="list">
      <li><a href="{base}/#beauty">Beauty & Wellness</a></li>
      <li><a href="{base}/#chef">Private Chef</a></li>
      <li><a href="{base}/#cleaning">Cleaning</a></li>
      <li><a href="{base}/#testimonials">Reviews</a></li>
      <li><a href="{base}/#about">About Lita</a></li>
      <li><a href="{base}/#faq">FAQ</a></li>
    </ul>
    <button type="button" class="btn btn--dark btn--small" onclick={() => openContact()} aria-label="Contact Lita — open contact options">
      Contact Lita <Arrow />
    </button>
  </div>
</nav>
