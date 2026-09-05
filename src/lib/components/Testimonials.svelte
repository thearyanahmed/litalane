<script>
  import Eyebrow from './Eyebrow.svelte';
  import { reviews } from '$lib/reviews.js';
</script>

{#if reviews.length}
  <section class="section t-section" id="testimonials" aria-labelledby="testimonials-heading">
    <div class="wrap">
      <div class="t-head">
        <Eyebrow>{#snippet children()}What clients say{/snippet}</Eyebrow>
        <h2 id="testimonials-heading" class="h-section" style="margin-top: 16px">
          The reason we<br />keep <i>going.</i>
        </h2>
        <p class="body-m" style="margin-top: 24px; max-width: 520px">
          Litalane is built one client at a time. No marketing budget,
          no agency staff — just women who came back, and brought their
          sisters and neighbours with them.
        </p>
      </div>

      <div class="t-masonry">
        {#each reviews as r (r.first_name)}
          <article class="t-card">
            <header class="t-card__head">
              <h3 class="t-card__name">{r.first_name}</h3>
            </header>
            <div class="t-rail">
              {#each r.quotes as q}
                <div class="t-note">
                  <p class="t-note__quote">{q}</p>
                </div>
              {/each}
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>
{/if}
