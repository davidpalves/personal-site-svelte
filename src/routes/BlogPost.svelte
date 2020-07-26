<script>
    export let slug = "vivamus-est-omnia-libero"

    const post = getResult(slug)

    async function getResult(slug) {
        const response =  await fetch(`http://localhost:8000/posts/${slug}`)
        return { posts: await response.json() }.posts
    }
</script>

<main>
    <div class="container">
        {#await post}
            Loading...
        {:then post}
            <h1>{post.title}</h1>
            <p>{post.text}</p>
            <div class="post-info">
                <small>Author: {post.author}</small>
                <small>Published at: {post.published_date}</small>
            </div>
        {/await}
    </div>
</main>

<style>
    h1 {
      font-size: 52px;
      justify-content: flex-start;
    }

    p {
      margin-top: 60px;
    }

    main {
      transform: translateY(50px);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container {
      width: 70%;
      text-align: center;
    }

    .post-info {
      margin-top: 60px;
      display: flex;
      text-align: center;
      justify-content: space-between;
      align-items: center;
    }
</style>