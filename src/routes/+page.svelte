<script>
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Strip from '$lib/components/Strip.svelte';
  import About from '$lib/components/About.svelte';
  import BeautySection from '$lib/components/BeautySection.svelte';
  import ChefSection from '$lib/components/ChefSection.svelte';
  import CleaningSection from '$lib/components/CleaningSection.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import GiftAndLoyalty from '$lib/components/GiftAndLoyalty.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Contact from '$lib/components/Contact.svelte';
</script>

<Nav />

<main id="main" tabindex="-1">
  <Hero />
  <Strip />
  <About />
  <BeautySection />
  <CleaningSection />
  <ChefSection />
  <!-- <Testimonials /> -->
  <GiftAndLoyalty />
  <FAQ />
</main>

<Footer />
<Contact />
