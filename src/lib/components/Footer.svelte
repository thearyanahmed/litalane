<script>
  import { base } from '$app/paths';
  import Lantern from './Lantern.svelte';
  import { openContact } from '$lib/stores/contact.svelte.js';
</script>

<footer class="footer">
  <div class="wrap">
    <div class="footer__grid">
      <div class="footer__brand">
        <Lantern size={40} color="var(--peach)" />
        <div class="wm" style="margin-top: 12px">
          LITALANE
        </div>
        <small>Newport · Wales · Est. 2023</small>
        <p>
          A women-led practice for the people of Newport. Beauty, food,
          and home care — done with attention.
        </p>
      </div>

      <div>
        <h5>Services</h5>
        <ul>
          <li><a href="{base}/#beauty">Beauty & Wellness</a></li>
          <li><a href="{base}/#chef">Private Chef</a></li>
          <li><a href="{base}/#cleaning">Home Cleaning</a></li>
          <li><button type="button" class="footer__linklike" onclick={() => openContact('gift')}>Gift vouchers</button></li>
        </ul>
      </div>

      <div>
        <h5>Contact</h5>
        <ul>
          <li><a href="https://wa.me/447761496145" target="_blank" rel="noopener noreferrer">WhatsApp Lita</a></li>
          <li><a href="tel:+447761496145">+44 7761 496 145</a></li>
          <li><a href="mailto:hello@litalane.co.uk">hello@litalane.co.uk</a></li>
          <li>Newport, NP19 · Mon–Sat · 8am — 8pm</li>
        </ul>
      </div>

      <div>
        <h5>Elsewhere</h5>
        <ul>
          <li><a href="https://www.instagram.com/litalane" target="_blank" rel="noopener noreferrer" aria-label="Litalane on Instagram">Instagram</a></li>
          <li><a href="https://www.facebook.com/litalane" target="_blank" rel="noopener noreferrer" aria-label="Litalane on Facebook">Facebook</a></li>
          <li><a href="https://wa.me/447761496145" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Lita">WhatsApp</a></li>
          <li><a href="https://www.tiktok.com/@litalane" target="_blank" rel="noopener noreferrer" aria-label="Litalane on TikTok">TikTok</a></li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <div>© 2026 LITALANE · All rights reserved</div>
      <div>Made in Newport · v1.0</div>
    </div>
  </div>
</footer>
