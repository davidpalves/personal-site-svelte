<script>
    import { fly } from 'svelte/transition';
</script>

<main>
    <div class="about-me" in:fly="{{ y: 0, x: -40, duration: 500}}">
        <img loading="lazy" src="/images/david.png" alt="David with glitch effect"/>
        <div class="content">
        <h2>About me</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ornare
        odio. Nam vel interdum diam. In hac habitasse platea dictumst. Mauris
        efficitur fermentum metus. Nullam iaculis facilisis magna in ultrices. Ut
        leo felis, egestas vitae semper at, tincidunt eu turpis. Praesent commodo
        eros interdum ex pulvinar viverra. Duis et lectus nec mi tempor eleifend.
        Sed vulputate elit urna, at faucibus augue vestibulum sit amet.
        Pellentesque blandit urna sapien, hendrerit aliquet ante tincidunt sed.
        Mauris consequat nec ex id iaculis. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Nullam dapibus
        odio id erat laoreet commodo. Phasellus turpis turpis, placerat vulputate
        ultrices ac, tempor quis sapien.
        </div>
    </div>
</main>

<style>

    main {
		height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    }

    .about-me {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      border-spacing: 10px;
    }
  
    img {
        margin-right: 20px;
        width: 400px;
        border-radius: 4px;
        box-shadow: 0px 1px 1px rgba(33, 33, 33, 0.1);
    }
    
    .content {
      align-self: flex-start;
      width: 350px;
    }
  </style>