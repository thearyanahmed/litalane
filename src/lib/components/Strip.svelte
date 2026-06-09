<script>
    const items = [
        // Beauty & wellness — primary
        "Swedish & aromatherapy massage",
        "Prenatal & postnatal care",
        "Reflexology & head massage",
        "Facials for sensitive skin",
        "Manicure & pedicure",
        "Hair treatment & home-made masks",
        "Henna & natural body art",
        "Brow & lash tidy",
        "Bridal & event styling",
        // Cleaning
        "Hourly & recurring weekly cleans",
        "Deep oven & end-of-tenancy care",
        // Closets & wardrobe
        "Garment care & seasonal rotation",
        // Interior styling
        "Elegant home decor & styling",
        // Private chef & catering — kept, fewer
        "Private in-home chef",
        "Catering for events & charity",
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
