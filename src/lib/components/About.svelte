<script>
  import Eyebrow from './Eyebrow.svelte';
  import Placeholder from './Placeholder.svelte';
</script>

<section class="section wrap" id="about" aria-label="About Lita">
  <div class="about__grid">
    <div class="about__portrait">
      <Placeholder label="lita's kitchen · still life" style="width: 100%; height: 100%" />
    </div>
    <div>
      <Eyebrow>{#snippet children()}About Lita{/snippet}</Eyebrow>
      <p class="about__quote" style="margin-top: 24px">
        "I started cooking for neighbours, then friends asked for facials,
        then their houses needed cleaning. Litalane is everything I love —
        done with care, by women I trust."
      </p>
      <p class="body-m">
        Litalane is a small, women-led practice in Newport.
        Every service is delivered by Lita or a woman she has personally
        trained — all of us mothers, all of us proud of our craft.
        We use organic Green People products for beauty, eco-friendly
        solvents for cleaning, and recipes shaped by years of cooking
        for our own families.
      </p>
      <div class="about__signature">— Lita</div>

      <div class="about__values">
        <div class="v">
          <strong>Women-only</strong>
          <span>Beauty sessions are private & female-only</span>
        </div>
        <div class="v">
          <strong>Locally rooted</strong>
          <span>Serving Newport & surrounding NP postcodes</span>
        </div>
        <div class="v">
          <strong>Honest pricing</strong>
          <span>No hidden fees, no upselling, ever</span>
        </div>
      </div>
    </div>
  </div>
</section>
