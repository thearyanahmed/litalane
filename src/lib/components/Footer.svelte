<script>
  import { base } from '$app/paths';
  import { openContact } from '$lib/stores/contact.svelte.js';
</script>

<footer class="footer">
  <div class="wrap">
    <div class="footer__grid">
      <div class="footer__brand">
        <img src="{base}/lita-lane-logo.png" alt="Litalane" class="footer__logo" />
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
          <li><a href="https://wa.me/447727855730" target="_blank" rel="noopener noreferrer">WhatsApp Lita</a></li>
          <li><a href="tel:07727855730" class="phone-link">07727 855 730</a></li>
          <li>Newport, NP19 · 7 days a week · 9:30am — 9:30pm</li>
        </ul>
      </div>

      <div>
        <h5>Elsewhere</h5>
        <ul>
          <li><a href="https://www.instagram.com/litalane" target="_blank" rel="noopener noreferrer" aria-label="Litalane on Instagram">Instagram</a></li>
          <li><a href="https://www.facebook.com/litalane" target="_blank" rel="noopener noreferrer" aria-label="Litalane on Facebook">Facebook</a></li>
          <li><a href="https://wa.me/447727855730" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Lita">WhatsApp</a></li>
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
