<script>
  import { base } from '$app/paths';
  import Lantern from './Lantern.svelte';
  import Arrow from './Arrow.svelte';
  import { openContact } from '$lib/stores/contact.svelte.js';
</script>

<nav class="nav">
  <div class="nav__inner">
    <a href="{base}/#top" class="nav__brand">
      <Lantern size={28} color="var(--cocoa)" />
      <div class="wm">
        LITALANE
        <small>Newport · Wales</small>
      </div>
    </a>
    <div class="nav__links">
      <a href="{base}/#beauty">Beauty & Wellness</a>
      <a href="{base}/#chef">Private Chef</a>
      <a href="{base}/#cleaning">Cleaning</a>
      <a href="{base}/#testimonials">Reviews</a>
      <a href="{base}/#about">About Lita</a>
      <a href="{base}/#faq">FAQ</a>
    </div>
    <button class="btn btn--dark btn--small" onclick={() => openContact()}>
      Contact Lita <Arrow />
    </button>
  </div>
</nav>
