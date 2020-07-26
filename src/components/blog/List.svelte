<script>
    let posts = [
		{ id: 'J---aiyznGQ', title: 'Adversarial Machine Learning', description: 'asdasdasdasdasdasdasdasdasd rqe rwe awef awf sdaf sgd hfhfghfg we raeds fdf adf asdfasfa asdas asdasd', author: 'David Alves', published_date: '2020-01-01' },
		{ id: 'z_AbfPXTKms', title: 'Integrating Formik and Redux', description: 'asdasdasdasdasdasdasdasdasd rqe rwe awef awf sdaf sgd hfhfghfg we raeds fdf adf asdfasfa asdas asdasd', author: 'David Alves', published_date: '2020-01-01' },
		{ id: 'OUtn3pvWmpg', title: 'Henri The Existential Cat', description: 'asdasdasdasdasdasdasdasdasd rqe rwe awef awf sdaf sgd hfhfghfg we raeds fdf adf asdfasfa asdas asdasd', author: 'David Alves', published_date: '2020-01-01' },
		{ id: 'J---aiyznGQ', title: 'Adversarial Machine Learning', description: 'asdasdasdasdasdasdasdasdasd rqe rwe awef awf sdaf sgd hfhfghfg we raeds fdf adf asdfasfa asdas asdasd', author: 'David Alves', published_date: '2020-01-01' },
		{ id: 'z_AbfPXTKms', title: 'Integrating Formik and Redux', description: 'asdasdasdasdasdasdasdasdasd rqe rwe awef awf sdaf sgd hfhfghfg we raeds fdf adf asdfasfa asdas asdasd', author: 'David Alves', published_date: '2020-01-01' },
		{ id: 'OUtn3pvWmpg', title: 'Henri The Existential Cat', description: 'asdasdasdasdasdasdasdasdasd rqe rwe awef awf sdaf sgd hfhfghfg we raeds fdf adf asdfasfa asdas asdasd', author: 'David Alves', published_date: '2020-01-01' },
		{ id: 'J---aiyznGQ', title: 'Adversarial Machine Learning', description: 'asdasdasdasdasdasdasdasdasd rqe rwe awef awf sdaf sgd hfhfghfg we raeds fdf adf asdfasfa asdas asdasd', author: 'David Alves', published_date: '2020-01-01' },
		{ id: 'z_AbfPXTKms', title: 'Integrating Formik and Redux', description: 'asdasdasdasdasdasdasdasdasd rqe rwe awef awf sdaf sgd hfhfghfg we raeds fdf adf asdfasfa asdas asdasd', author: 'David Alves', published_date: '2020-01-01' },
		{ id: 'OUtn3pvWmpg', title: 'Henri The Existential Cat', description: 'asdasdasdasdasdasdasdasdasd rqe rwe awef awf sdaf sgd hfhfghfg we raeds fdf adf asdfasfa asdas asdasd', author: 'David Alves', published_date: '2020-01-01' },
		{ id: 'J---aiyznGQ', title: 'Adversarial Machine Learning', description: 'asdasdasdasdasdasdasdasdasd rqe rwe awef awf sdaf sgd hfhfghfg we raeds fdf adf asdfasfa asdas asdasd', author: 'David Alves', published_date: '2020-01-01' },
		{ id: 'z_AbfPXTKms', title: 'Integrating Formik and Redux', description: 'asjnglçrtkjltkjhn rkltj nrkltjnh lkrjtnhl jkrtn jnjkn kjnrthkj rntlhsjnt lktj nkjnlkdasdasdasdasdasdasdasdasd rqe rwe awef awf sdaf sgd hfhfghfg we raeds fdf adf asdfasfa asdas asdasd', author: 'David Alves', published_date: '2020-01-01' },
		{ id: 'OUtn3pvWmpg', title: 'Henri The Existential Cat', description: 'asdasdasdasdasdasdasdasdasd rqe rwe awef awf sdaf sgd hfhfghfg we raeds fdf adf asdfasfa asdas asdasd', author: 'David Alves', published_date: '2020-01-01' },
    ];

</script>

<main>
<div class="container">
    <h1>Blog</h1>
    {#each posts as post}
    <div class="content">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <div class="post-info">
            <small>Author: {post.author}</small>
            <small>Published at: {post.published_date}</small>
        </div>
    </div>
    {/each}
</div>
</main>

<style>
    main {
        width: 100%;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
    }
    .container {
        transform: translateY(50px);
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

    h2 {
        text-align: center;
    }

    .content {
        text-align: center;
        flex-wrap: wrap;
        margin-bottom: 50px;
        padding-bottom: 30px;
        border-bottom: 1px solid black;
    }

    .content p {
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