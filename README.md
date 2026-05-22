# Lita Lane

Women-led beauty, private chef & home cleaning — Newport, Wales.

Static site built with SvelteKit + adapter-static, deployed to GitHub Pages.

## Develop

```bash
bun install
bun run dev
```

## Build (static)

```bash
bun run build
bun run preview
```

Output goes to `build/`. The site is fully prerendered.

## GitHub Pages

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with
`BASE_PATH=/<repo-name>` and publishes via the Pages action.

In your repo settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**.

For a custom domain or a user/organization site published at the root
(`user.github.io`), set `BASE_PATH=""` in the workflow env (or remove the
line).

## Stack

- SvelteKit 2 (Svelte 5 runes)
- `@sveltejs/adapter-static`
- Vite
- Bun (package manager + CI)

## Structure

```
src/
  app.html              page shell + Google Fonts
  app.css               full design system (tokens, components, responsive)
  routes/
    +layout.svelte      loads app.css
    +layout.js          prerender = true
    +page.svelte        composes the single-page site
  lib/
    components/         Nav, Hero, About, sections, Testimonials, FAQ, Footer, Contact, primitives
    stores/contact.svelte.js   shared $state for the contact drawer
static/
  .nojekyll             prevents GH Pages from running Jekyll on assets
  favicon.svg
```

## Notes / next steps

- All imagery is monospace-labelled placeholders by design — swap with real
  photos when ready.
- Testimonial copy is placeholder. Replace names/quotes/dates.
- Phone, email, and WhatsApp number live in `src/lib/components/Contact.svelte`
  and `src/lib/components/FAQ.svelte` / `Footer.svelte` — confirm before launch.
- No live booking endpoint — every CTA opens the WhatsApp / call / email drawer.
