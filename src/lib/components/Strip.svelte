<script>
  const items = [
    'Female body massage',
    'Catering for events',
    'Private in-home chef',
    'Hourly cleaning',
    'Deep oven care',
    'Organic henna',
    'Charity meal packages',
    'Recurring weekly cleans'
  ];
  const doubled = [...items, ...items];
</script>

<div class="strip">
  <div class="strip__inner">
    {#each doubled as it, i}
      <span>{it}</span>
      <span class="sep">✦</span>
    {/each}
  </div>
</div>
