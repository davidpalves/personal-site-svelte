<script>
  import Navbar from "./components/header/Navbar.svelte";
  import Welcome from "./components/welcome/Welcome.svelte";
  import About from "./components/about/About.svelte";

  import showAbout from "./store/showAbout.store.js"
</script>

<Navbar />
{#if !$showAbout}
	<Welcome/>
{:else}
	<About />
{/if}
