<script>
    import BlogPreview from './BlogPreview.svelte'

    const posts = getResult()

    async function getResult() {
        const response =  await fetch("http://localhost:8000/posts/")

        return { posts: await response.json() }.posts
   }

</script>

<main>
  <div class="container">
    <h1>Blog</h1>
    {#await posts}
    Searching...
    {:then posts}
        {#each posts as post}
            <BlogPreview post={post}/>
        {/each}
    {/await}
  </div>
</main>


<style>
    main {
      transform: translateY(50px);
      width: 100%;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 55%;
    }
  
    .container h1 {
      font-size: 52px;
      justify-content: flex-start;
      margin-bottom: 60px;
    }
  
</style>