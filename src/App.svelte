<script>
  import { Router, Route } from "svelte-routing";

  import Navbar from "./components/header/Navbar.svelte";
  import Welcome from "./components/welcome/Welcome.svelte";
  import About from "./components/about/About.svelte";

  import showAbout from "./store/showAbout.store.js"

  export let url = ""
</script>

<Router url="{url}">
  <Navbar />
  <Route path="/about"><About /></Route>
	<Route path="/"><Welcome/></Route>
</Router>
