<script>
    import Eyebrow from "./Eyebrow.svelte";
    import Placeholder from "./Placeholder.svelte";
</script>

<section class="section wrap" id="about" aria-label="About Lita">
    <div class="about__grid">
        <div class="about__portrait">
            <Placeholder
                label="lita's care space · still life"
                style="width: 100%; height: 100%"
            />
        </div>
        <div>
            <Eyebrow>{#snippet children()}About Lita{/snippet}</Eyebrow>
            <p class="about__quote" style="margin-top: 24px">
                "I trained in London for the kind of women-only practice I
                couldn't find back home — unhurried, private, done by hand.
                When I came back to Newport, I knew exactly the kind of
                sanctuary I wanted to bring with me."
            </p>
            <p class="about__quote" style="margin-top: 4px">
                "Beauty, to me, isn't a product on a shelf — it's an hour
                where someone is properly looked after. That's the hour I
                want every woman in Newport to be able to book."
            </p>
            <p class="body-m">
                Litalane is a small, women-led practice in Newport. Every
                beauty appointment is private and female-only, delivered by
                Lita or a woman she has personally trained.
            </p>

            <p class="body-m">
                The homes she worked in needed more than a quiet hour —
                so cleaning followed naturally, looked after with the same
                attention. And because Lita has always cooked for the people
                she cares for, food stayed too: private chef evenings and
                catering for the families and charities she's grown to know.
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
