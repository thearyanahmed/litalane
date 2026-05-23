<script>
    const items = [
        // Beauty & wellness
        "Female body massage",
        "Head massage",
        "New mum support",
        // Private chef & catering
        "Private in-home chef",
        "Catering for events",
        "Charity meal packages",
        // Cleaning
        "Hourly cleaning",
        "Recurring weekly cleans",
        "Deep oven care",
        // Closets & wardrobe
        "Meticulous garment care & folding",
        "Custom closet system & shelving organisation",
        "Seasonal wardrobe rotation & styling",
        // Interior styling
        "Curated furniture placement & accessorising",
        "Elegant home decor & styling",
        "Space planning for enhanced living",
    ];
    const doubled = [...items, ...items];
</script>

<div class="strip" aria-hidden="true">
    <div class="strip__inner">
        {#each doubled as it, i}
            <span>{it}</span>
            <span class="sep">✦</span>
        {/each}
    </div>
</div>
