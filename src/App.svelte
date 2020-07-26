<script>
  import { Router, Route } from "svelte-routing";

  import Navbar from "./components/header/Navbar.svelte";
  import Welcome from "./routes/Welcome.svelte";
  import About from "./routes/About.svelte";
  import Blog from "./routes/Blog.svelte";
  import BlogPost from "./routes/BlogPost.svelte";

  export let url = ""
</script>

<Router url="{url}">
  <Navbar />
  <Route path="/blog" component="{Blog}"/>
  <Route path="/about" component="{About}"/>
  <Route path="/blog/:id" component="{BlogPost}"/>
	<Route path="/"><BlogPost/></Route>
</Router>
