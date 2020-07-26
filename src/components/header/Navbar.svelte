<script>
    import Link from "svelte-routing/src/Link.svelte";
</script>

<nav>
    <Link to="/">
        <button class="logo">
            davidpalves
        </button>
    </Link>
    <div class="items">
        <Link to="/"><button>Home</button></Link>
        <Link to="about"><button>About</button></Link>
        <Link to="blog"><button>Blog</button></Link>
        <Link to="contact"><button>Contact</button></Link>
    </div>
</nav>

<style>
    nav {
        width: 100%;
        margin-top: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        position: fixed;
    }

    .logo {
        margin-left: 20px;
        align-self: center;
        padding: 20px 25px 20px 25px;
        cursor: pointer;
        border: none;
        transform: translateY(-4px)
    }
    
    div {
        margin: 0;
        text-decoration: none;
        list-style: none;
    }
    
    .items {
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
    }
    
    .items button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 20px 25px 20px 25px;
        align-self: center;
        font-weight: normal;
        margin-bottom: 0;
    }
    
    .items, .logo {
        background-color: rgba(255, 255, 255, 0.9);
    }
    .items button:hover, .logo:hover{
        background-color: #f5f5f5;
    }
</style>