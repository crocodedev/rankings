<script>
  export let data = {}
  import Container from '$lib/components/Container.svelte'
</script>

<section class="hero" style="padding-top:90px">
  <Container>
    <div class="hero__wrapper">
      <div class="hero__leftside-inner">
        <h1 class="h1">{data.titleHero}</h1>
        <div class="hero__arrow-animate">
          <img src="Arrow.svg" alt="" class="hero__arrow" />
        </div>
      </div>
      <div class="hero__rightside-inner">
        <div class="hero__image-wrapper">
          <img src="Graphs.svg" alt="" />
        </div>
        <div class="hero__text-wrapper">
          <p class="hero__text">{data.subtext}</p>
          <a href={data.buttonLink} class="btn">{data.buttonText}</a>
        </div>
      </div>
    </div>
  </Container>
</section>

<style lang="scss">
  section * {
    .hero__title {
      font-size: 72px;
      color: #07124a;
      text-transform: uppercase;
    }

    .hero__wrapper {
      justify-content: space-between;
      display: flex;
      gap: 80px;
    }

    .hero__arrow-animate {
      width: 100%;
      height: 300px;
    }

    .hero__arrow {
      width: 100%;
      height: 100%;
    }

    .hero__leftside-inner,
    .hero__rightside-inner {
      display: flex;
      flex-direction: column;
      gap: 130px;
    }

    .hero__text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 34px;
    }

    .hero__text {
      font-size: 18px;
      color: #07124a;
    }

    .hero__button {
      border-radius: 5px;
      background-color: #0077ff;
      color: white;
      text-transform: uppercase;
      padding: 10px 20px;
      width: max-content;
    }
  }
</style>
