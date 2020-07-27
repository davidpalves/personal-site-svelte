<script>
    import Link from "svelte-routing/src/Link.svelte";

    import { truncate } from '../../utils'
    export let post = {}
</script>

<div class="content">
    <Link to={`blog/${post.slug}`}><h2>{post.title}</h2></Link>
    <p>{truncate(post.text, 296)}</p>
    <div class="post-info">
    <small>Author: {post.author}</small>
    <small>Published at: {post.published_date}</small>
    </div>
</div>

<style>
    h2 {
      text-align: center;
      color: #1a1a1a;
      text-decoration: none;
    }

    .content {
        text-align: center;
        flex-wrap: wrap;
        margin-bottom: 50px;
        padding-bottom: 30px;
        border-bottom: 1px solid black;
    }
      
    .content p {
      margin-top: 40px;
      margin-bottom: 20px;
    }
  
    .content:last-child {
      border: none;
    }
  
    .post-info {
      margin-top: 60px;
      display: flex;
      width: 100%;
      text-align: center;
      justify-content: space-between;
    }
</style>