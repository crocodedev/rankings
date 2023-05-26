<script>
  export let data = {}
  import Container from '$lib/components/Container.svelte'
  import { onMount } from 'svelte'

  let hero

  function scrollDown() {
    const height = hero.getBoundingClientRect().height

    window.scrollTo({
      top: height - 30,
      behavior: 'smooth',
    })
  }

  onMount(() => {
    const scrollDownButton = document.querySelector('.hero__scroll-down')
    hero = document.querySelector('.hero')

    scrollDownButton.addEventListener('click', scrollDown)
  })
</script>

<section class="hero">
  <Container>
    <div class="hero__wrapper">
      <div class="hero__leftside-inner">
        <h1 class="h1">{data.titleHero}</h1>
        <div class="hero__arrow-animate">
          <div class="arrow__points">
            <span class="arrow__point arrow__point-1">
              <span class="arrow__point-text">Qualitative research</span>
              <span class="arrow__point-num">01</span>
            </span>
            <span class="arrow__point arrow__point-2">
              <span class="arrow__point-text">Market research</span>
              <span class="arrow__point-num">02</span>
            </span>
            <span class="arrow__point arrow__point-3">
              <span class="arrow__point-text">Brand strategy & design</span>
              <span class="arrow__point-num">03</span>
            </span>
          </div>

          <div class="hero__image-white" />
          <img src="Arrow.svg" alt="" class="hero__arrow" />
        </div>
      </div>
      <div class="hero__rightside-inner">
        <div class="hero__image-wrapper">
          <img src="Graphs.svg" alt="" class="hero__image" />
        </div>
        <div class="hero__text-wrapper">
          <p class="hero__text">{data.subtext}</p>
          <a href={data.buttonLink} class="btn">{data.buttonText}</a>
        </div>
      </div>
      <span on:click={scrollDown} class="hero__scroll-down">
        <p class="hero__scroll-text">Scroll down</p>
        <img class="hero__scroll-icon" src="../Group 109.svg" />
      </span>
    </div>
  </Container>
</section>

<style lang="scss">
</style>
