<script>
    import { fly } from 'svelte/transition';

    import showAbout from '../../store/showAbout.store'
</script>

<main in:fly="{{ y: 0, x: -40, duration: 500}}">
    <h1>Welcome!</h1>
    <h2>I'm David</h2>
	<button on:click={showAbout.toggle}>Learn more about me!</button>
</main>

<style>
	main {
		height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    }

    h1 {
        font-size: 48px;
        margin-bottom: 5px;
    }

    h2 {
        font-size: 32px;
        
    }
    
    button {
        background: none;
        padding: 20px 25px 20px 25px;
        border-radius: 4px;
        border-color: rgba(33, 33, 33, 0.1);
        box-shadow: 0px 1px 1px rgba(33, 33, 33, 0.1);
        font-size: 18px;
        cursor: pointer;
    }

    button:hover {
        background-color: #f5f5f5;
    }
</style>