<script>
    import Arrow from "./Arrow.svelte";
    import ImageSlot from "./ImageSlot.svelte";
    import Placeholder from "./Placeholder.svelte";
    import { careImages } from "$lib/care.js";
    import { openContact } from "$lib/stores/contact.svelte.js";

    const care = careImages();
    const hasCare = care.length > 0;

    const BEAUTY_MENU = [
        {
            name: "Swedish Massage",
            note: "60 mins · classic full-body relaxation",
        },
        {
            name: "Aromatherapy Massage",
            note: "60 mins · essential-oil blends, sleep & calm",
        },
        {
            name: "Deep Tissue Massage",
            note: "60 mins · targeted pressure for tension release",
        },
        {
            name: "Prenatal & Postnatal",
            note: "60 mins · safe positioning, gentle pressure",
        },
        { name: "Reflexology", note: "30 mins · foot focus, deep release" },
        { name: "Head & Scalp Massage", note: "30 mins · with warm oils" },
        {
            name: "Facial — mini",
            note: "30 mins · products suitable for sensitive skin",
        },
        {
            name: "Facial — full",
            note: "60 mins · cleanse, mask, massage, finish",
        },
        {
            name: "Manicure & Pedicure",
            note: "individual treatments, natural finishes",
        },
        {
            name: "Hair treatment",
            note: "deep conditioning · with home-made mask",
        },
        {
            name: "Henna & body art",
            note: "natural henna · occasions & everyday",
        },
        {
            name: "Brow & lash tidy",
            note: "shaping, tinting, gentle finish",
        },
    ];
</script>

<section class="section wrap" id="beauty" aria-labelledby="beauty-heading">
    <div class="section-head">
        <div class="section-head__title">
            <div class="svc__number">01 — Beauty & Wellness</div>
            <h2 id="beauty-heading" class="h-section" style="margin-top: 16px">
                A women-only<br /><i>sanctuary</i>, at home.
            </h2>
        </div>
        <div class="section-head__meta">
            <p class="body-m">
                Lita trained in London for the kind of unhurried, women-only
                practice Newport didn't yet have. She arrives at your door with
                everything she needs — towels, oils, candles — and a quiet
                hour where it's just you. Every product organic, every
                appointment private.
            </p>
        </div>
    </div>

    <div class="svc svc-beauty">
        <div class="svc__hero">
            <div class="svc__features">
                <span class="chip">Women-only</span>
                <span class="chip">Organic products</span>
                <span class="chip">In your home</span>
                <span class="chip">London-trained</span>
                <span class="chip">Newport area</span>
            </div>

            <p class="body-l" style="margin-bottom: 24px">
                Three ways to book your ritual:
            </p>

            <div class="pkg-row">
                <div class="pkg">
                    <div class="pkg__tag">Single session</div>
                    <div class="pkg__name">One treatment</div>
                    <div class="pkg__desc">
                        Pick any treatment from the menu below. Booked
                        individually, paid per session.
                    </div>
                </div>
                <div class="pkg featured">
                    <div class="pkg__tag">Most loved</div>
                    <div class="pkg__name">Monthly ritual</div>
                    <div class="pkg__desc">
                        A standing appointment each month — massage, facial, or
                        a combined hour. Same Lita, same quiet routine.
                    </div>
                </div>
                <div class="pkg">
                    <div class="pkg__tag">Occasions</div>
                    <div class="pkg__name">Bridal & event</div>
                    <div class="pkg__desc">
                        Pre-wedding, hen, birthday or just a friends' afternoon.
                        Hair, henna and finishing touches for a small group.
                    </div>
                </div>
            </div>

            <div class="svc__menu" style="margin-top: 32px">
                {#each BEAUTY_MENU as row}
                    <div class="svc__row svc__row--noprice">
                        <div class="name">
                            {row.name}
                            <small>{row.note}</small>
                        </div>
                        <div class="dot-end" aria-hidden="true">·</div>
                    </div>
                {/each}
            </div>

            <p class="price-note">
                Each treatment is priced individually — message Lita for the
                latest rates, package bundles, and any seasonal offers.
            </p>

            <div class="svc__cta-row">
                <button
                    class="btn btn--primary"
                    onclick={() => openContact("beauty")}
                >
                    Message Lita to book <Arrow />
                </button>
                <span class="meta">Replies within 2 hrs</span>
            </div>
        </div>

        <div class="svc__media">
            {#if hasCare}
                <ImageSlot
                    images={care}
                    offset={0}
                    interval={5200}
                    className="ph-a"
                    alt="Beauty & wellness ritual"
                    orientation="landscape"
                    group="beauty-care"
                />
                <ImageSlot
                    images={care}
                    offset={0}
                    interval={4800}
                    className="ph-b"
                    alt="Beauty & wellness ritual"
                    orientation="portrait"
                    group="beauty-care"
                />
                <ImageSlot
                    images={care}
                    offset={1}
                    interval={5600}
                    className="ph-c"
                    alt="Beauty & wellness ritual"
                    orientation="landscape"
                    group="beauty-care"
                />
                <ImageSlot
                    images={care}
                    offset={2}
                    interval={5000}
                    className="ph-d"
                    alt="Beauty & wellness ritual"
                    orientation="landscape"
                    group="beauty-care"
                />
                <ImageSlot
                    images={care}
                    offset={3}
                    interval={5400}
                    className="ph-e"
                    alt="Beauty & wellness ritual"
                    orientation="landscape"
                    group="beauty-care"
                />
            {:else}
                <Placeholder label="oils & candles · still life" className="ph-a" />
                <Placeholder label="massage · hands at work" className="ph-b" />
                <Placeholder label="pedicure detail" className="ph-c" />
                <Placeholder label="hands · henna detail" className="ph-d" />
                <Placeholder label="rose & ingredients" className="ph-e" />
            {/if}

            <figure class="svc__quote">
                <div class="svc__quote-mark" aria-hidden="true">"</div>
                <blockquote>
                    Caring for myself is not self-indulgence, it is
                    self-preservation, and that is an act of political warfare.
                </blockquote>
                <figcaption>
                    <span class="svc__quote-name">Audre Lorde</span>
                    <span class="svc__quote-meta">A Burst of Light · 1988</span>
                </figcaption>
            </figure>

            <figure class="svc__quote svc__quote--dark">
                <div class="svc__quote-mark" aria-hidden="true">"</div>
                <blockquote>
                    Almost everything will work again if you unplug it for a
                    few minutes, including you.
                </blockquote>
                <figcaption>
                    <span class="svc__quote-name">Anne Lamott</span>
                    <span class="svc__quote-meta">Stitches · 2013</span>
                </figcaption>
            </figure>
        </div>
    </div>
</section>
