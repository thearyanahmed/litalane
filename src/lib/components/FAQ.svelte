<script>
    import Eyebrow from "./Eyebrow.svelte";

    const FAQS = [
        {
            q: "Are the beauty treatments really women-only?",
            a: "Yes — every beauty session is private and women-only. Lita comes to your home and the appointment is just you, in a space where you can fully relax.",
        },
        {
            q: "What postcodes do you cover?",
            a: "Newport (NP10, NP18, NP19, NP20) and the surrounding areas including Caerleon, Maindee, and Bettws. For larger events or catering we can travel further — just ask.",
        },
        {
            q: "Are your cleaners insured and checked?",
            a: "Every cleaner is DBS-checked, fully insured, and personally trained by Lita. We don't use agency staff and you'll see the same face on recurring bookings.",
        },
        {
            q: "Is the food halal?",
            a: "All meat is sourced halal from local Newport butchers. The kitchen is alcohol-free. Vegetarian, vegan, and gluten-free menus available — just mention dietary needs when booking.",
        },
        {
            q: "How far ahead should I book?",
            a: "Beauty and cleaning: 3–5 days' notice is best, but we often have same-week openings. Catering for events: at least 2 weeks ahead, more for groups over 30.",
        },
        {
            q: "How do I get a price?",
            a: "Every booking is a little different, so Lita prices on enquiry. Message her on WhatsApp or call — she'll give you a clear quote within a few hours.",
        },
        {
            q: "What if I need to cancel?",
            a: "No charge for cancellations more than 24 hours ahead. Inside 24 hours, we ask for 50% of the agreed booking. Catering deposits are non-refundable inside 7 days of the event.",
        },
    ];

    let open = $state(0);
    function toggle(i) {
        open = open === i ? -1 : i;
    }
</script>

<section class="section wrap" id="faq" aria-labelledby="faq-heading">
    <div class="faq__grid">
        <div>
            <Eyebrow>{#snippet children()}Questions{/snippet}</Eyebrow>
            <h2 id="faq-heading" class="h-section" style="margin-top: 16px">
                Asked &<br /><i>answered.</i>
            </h2>
            <p class="body-m" style="margin-top: 24px; max-width: 360px">
                Still wondering something? Message Lita on
                <a
                    href="https://wa.me/447727855730"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="color: var(--terracotta); text-decoration: underline"
                    >WhatsApp</a
                >
                or call
                <a
                    href="tel:07727855730"
                    class="phone-link"
                    style="color: var(--terracotta); text-decoration: underline"
                    >07727 855 730</a
                >
                — she answers herself.
            </p>
        </div>

        <div class="faq__list">
            {#each FAQS as item, i}
                {@const id = `faq-a-${i}`}
                <div class="faq__item {open === i ? 'open' : ''}">
                    <button
                        type="button"
                        class="faq__q"
                        aria-expanded={open === i}
                        aria-controls={id}
                        onclick={() => toggle(i)}
                    >
                        <span>{item.q}</span>
                        <span class="plus" aria-hidden="true">+</span>
                    </button>
                    <div
                        {id}
                        class="faq__a"
                        role="region"
                        aria-hidden={open !== i}
                    >
                        <div class="faq__a-inner">{item.a}</div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
