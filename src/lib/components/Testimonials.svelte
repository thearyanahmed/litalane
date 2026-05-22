<script>
  import Eyebrow from './Eyebrow.svelte';
  import Lantern from './Lantern.svelte';

  const FEATURED_STORY = {
    quote: "I was pregnant, exhausted, and my husband had ordered a massage as a gift. I almost cancelled — I was nervous having a stranger in the house. Lita arrived with her own towels and oils, asked about the baby first, and gave me the best ninety minutes I'd had in months. She's been every fortnight since. My son is one now. She remembers his name.",
    name: 'Hannah Pritchard',
    where: 'Caerleon · prenatal massage, now monthly',
    meta: 'Client since June 2024'
  };

  const QUOTES = [
    { quote: 'Catered a 40-person charity iftar for us. Every single dish was perfect. Half my guests asked for her number.', name: 'Fatima K.', where: 'Newport Central', service: 'Event catering', date: 'Mar 2026', highlighted: 'Every single dish was perfect.' },
    { quote: 'Sarah has been cleaning our house for four months now. She\'s part of our week. We\'d be lost without her.', name: 'Megan & David', where: 'Caerleon', service: 'Weekly cleaning', date: 'Feb 2026', highlighted: 'She\'s part of our week.' },
    { quote: "First facial I've had where I didn't feel sold to. Just an hour of being properly looked after. Skin still glowing three days later.", name: 'Priya R.', where: 'Maindee', service: 'Facial', date: 'Apr 2026' },
    { quote: 'Booked her for my mother\'s 70th — a sit-down lunch for fourteen. My mum cried at the lamb. It tasted like home.', name: 'Yasmin A.', where: 'Bettws', service: 'Private chef', date: 'Jan 2026' },
    { quote: 'End-of-tenancy clean and the agent literally said it was the cleanest handover she\'d seen this year. Got the full deposit back.', name: 'Owen T.', where: 'Newport NP20', service: 'End of tenancy', date: 'Mar 2026' },
    { quote: "I'm 68 and I was unsure about a massage at home. Lita put me at ease in five minutes. I see her every other Tuesday now.", name: 'Beverley L.', where: 'Caerleon', service: 'Aromatherapy massage', date: 'Nov 2025' },
    { quote: 'Took my daughter for her first manicure as a treat. Lita made her feel like a princess and didn\'t rush us. £25 well spent.', name: 'Sian H.', where: 'Maindee', service: 'Manicure', date: 'Feb 2026' },
    { quote: 'We host a lot. Having someone I trust come the morning after, no awkwardness, just gone by lunch. Worth every penny.', name: 'Rachel D.', where: 'Newport NP19', service: 'Post-event clean', date: 'Dec 2025' }
  ];

  const STATS = [
    { num: '94%', label: 'Return for a second booking' },
    { num: '120+', label: 'Reviews across platforms' },
    { num: '4.9★', label: 'Average rating · all services' },
    { num: '68%', label: 'Found us via word of mouth' }
  ];

  const categories = ['All', 'Beauty', 'Chef', 'Cleaning'];
  let filter = $state('All');

  function matchCat(svc) {
    if (filter === 'All') return true;
    if (filter === 'Beauty') return /massage|facial|manicure|pedicure|henna|reflex/i.test(svc);
    if (filter === 'Chef') return /chef|catering/i.test(svc);
    if (filter === 'Cleaning') return /clean|tenancy/i.test(svc);
    return true;
  }

  let filtered = $derived(QUOTES.filter((q) => matchCat(q.service)));

  function splitQuote(q) {
    if (!q.highlighted) return { pre: q.quote, hi: '', post: '' };
    const idx = q.quote.indexOf(q.highlighted);
    if (idx < 0) return { pre: q.quote, hi: '', post: '' };
    return {
      pre: q.quote.slice(0, idx),
      hi: q.highlighted,
      post: q.quote.slice(idx + q.highlighted.length)
    };
  }
</script>

<section class="section dark-section" id="testimonials">
  <div class="wrap">
    <div class="t-head">
      <Eyebrow light>{#snippet children()}What clients say{/snippet}</Eyebrow>
      <h2 class="h-section" style="margin-top: 16px; color: var(--cream)">
        The reason we<br />keep <i>going.</i>
      </h2>
      <p class="body-m" style="margin-top: 24px; max-width: 520px">
        Litalane is built one client at a time. No marketing budget,
        no agency staff — just women who came back, and brought their
        sisters and neighbours with them.
      </p>
    </div>

    <div class="t-featured">
      <div class="t-featured__mark" aria-hidden="true">&ldquo;</div>
      <blockquote class="t-featured__quote">
        {FEATURED_STORY.quote}
      </blockquote>
      <div class="t-featured__rule" aria-hidden="true">
        <Lantern size={22} color="var(--peach)" />
      </div>
      <div class="t-featured__author">
        <div class="t-featured__name">— {FEATURED_STORY.name}</div>
        <div class="t-featured__where">{FEATURED_STORY.where}</div>
        <div class="t-featured__meta">{FEATURED_STORY.meta}</div>
      </div>
    </div>

    <div class="t-stats">
      {#each STATS as s}
        <div class="t-stat">
          <div class="t-stat__num">{s.num}</div>
          <div class="t-stat__label">{s.label}</div>
        </div>
      {/each}
    </div>

    <div class="t-filter">
      <div class="t-filter__label">Filter by service</div>
      <div class="t-filter__buttons">
        {#each categories as c}
          <button class="t-filter__btn {filter === c ? 'on' : ''}" onclick={() => (filter = c)}>{c}</button>
        {/each}
      </div>
    </div>

    <div class="t-masonry">
      {#each filtered as q (q.name + q.date)}
        {@const parts = splitQuote(q)}
        <div class="t-card">
          <div class="t-card__top">
            <span class="t-card__svc">{q.service}</span>
            <span class="t-card__date">{q.date}</span>
          </div>
          <p class="t-card__quote">
            {#if parts.hi}
              "{parts.pre}<mark>{parts.hi}</mark>{parts.post}"
            {:else}
              "{q.quote}"
            {/if}
          </p>
          <div class="t-card__author">
            <div>
              <div class="t-card__name">{q.name}</div>
              <div class="t-card__where">{q.where}</div>
            </div>
            <div class="t-card__stars">★★★★★</div>
          </div>
        </div>
      {/each}
    </div>

    <div class="t-platforms">
      <div class="t-platform">
        <div class="t-platform__rating">4.9</div>
        <div class="t-platform__stars">★★★★★</div>
        <div class="t-platform__name">Google</div>
        <div class="t-platform__count">87 reviews</div>
      </div>
      <div class="t-platform">
        <div class="t-platform__rating">5.0</div>
        <div class="t-platform__stars">★★★★★</div>
        <div class="t-platform__name">Facebook</div>
        <div class="t-platform__count">24 recommendations</div>
      </div>
      <div class="t-platform">
        <div class="t-platform__rating">4.8</div>
        <div class="t-platform__stars">★★★★★</div>
        <div class="t-platform__name">TrustATrader</div>
        <div class="t-platform__count">31 reviews</div>
      </div>
      <div class="t-platform t-platform--cta">
        <div class="t-platform__cta-head">Booked us before?</div>
        <a href="#" class="t-platform__cta">Leave a review →</a>
      </div>
    </div>
  </div>
</section>
