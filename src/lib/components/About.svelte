<script>
    import Eyebrow from "./Eyebrow.svelte";
    import Placeholder from "./Placeholder.svelte";
</script>

<section class="section wrap" id="about" aria-label="About Lita">
    <div class="about__grid">
        <div class="about__portrait">
            <Placeholder
                label="lita's kitchen · still life"
                style="width: 100%; height: 100%"
            />
        </div>
        <div>
            <Eyebrow>{#snippet children()}About Lita{/snippet}</Eyebrow>
            <p class="about__quote" style="margin-top: 24px">
                "I’ve always had a passion for cooking and bringing people
                together through food. What started as cooking for myself and my
                family slowly grew into sharing meals with friends, neighbours,
                and even community charities."
            </p>
            <p class="about__quote" style="margin-top: 4px">
                "People around me encouraged me to open a restaurant, but I
                chose to begin from home — creating homemade dishes with care,
                warmth, and flavour. Today, I offer private chef services and
                continue to share my love for food with others."
            </p>
            <p class="body-m">
                Litalane is a small, women-led practice in Newport. Every
                service is delivered by Lita or a woman she has personally
                trained.
            </p>

            <p class="body-m">
                It started with food, but the homes I cooked in needed care too
                — so cleaning followed naturally, looked after with the same
                attention I bring to a kitchen and home. Self-care came next,
                because the women I cooked and cleaned for kept asking who they
                could trust with their hair, skin and quiet hours.
            </p>

            <p class="body-m">
                After training in London, I knew exactly the kind of women-only
                space I wanted to bring back to Newport — one where every ritual
                is unhurried, done by hand, and always in trusted company.
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
