<script>
  export let data = {}
  import Container from '$lib/components/Container.svelte'
</script>

<section class="hero">
  <Container>
    <div class="hero__wrapper">
      <div class="hero__leftside-inner">
        <h1 class="hero__title">{data.titleHero}</h1>
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
          <a href={data.buttonLink} class="hero__button">{data.buttonText}</a>
        </div>
      </div>
    </div>
  </Container>
</section>

<style lang="scss">
  .hero {
    &__title {
      font-size: 72px;
      color: #07124a;
      text-transform: uppercase;
    }

    &__wrapper {
      justify-content: space-between;
      display: flex;
      gap: 80px;
    }

    &__leftside-inner,
    &__rightside-inner {
      display: flex;
      flex-direction: column;
      gap: 130px;
    }

    &__text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 34px;
    }

    &__text {
      font-size: 18px;
      color: #07124a;
    }

    &__button {
      border-radius: 5px;
      background-color: #0077ff;
      color: white;
      text-transform: uppercase;
      padding: 10px 20px;
      width: max-content;
    }
  }
</style>
