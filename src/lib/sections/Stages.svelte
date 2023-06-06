<script>
  import Container from '$lib/components/Container.svelte'
  import { beforeUpdate, onMount } from 'svelte'

  export let data = {}
  let screenWidth
  let showStages = false

  let page = ''

  beforeUpdate(() => {
    let pathname = window.location.pathname
    page = pathname.substring(pathname.lastIndexOf('/') + 1)
  })

  function checkVisibility() {
    if (showStages === false) {
      const element = document.querySelector(`[data-id="${data.sys.id}"]`)
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      showStages = rect.top < windowHeight
    }
  }

  onMount(() => {
    checkVisibility
    screenWidth = window.innerWidth
    window.addEventListener('scroll', checkVisibility)
    window.addEventListener('resize', () => {
      screenWidth = window.innerWidth
    })
  })
</script>

<section class="stages" data-id={data.sys.id}>
  <Container>
    <div class="stages__wrapper">
      <div class="stages__title-wrapper">
        <h2 class="h2">{data.stagesTitle}</h2>
        <p class="stages__subtitle">{data.stagesSubtitle}</p>
      </div>
      <div class="stages__items">
        {#each data.stagesListCollection.items as item, index}
          {#if showStages}
            <div class="stages__item" style="--acc:{index}">
              <div class="stages__item-text">
                {item.stagesText}
              </div>
              <div class="stages__item-bar" style="--acc:{index}">
                <div class="stages__item-number">{item.stagesNum}</div>
                {#if screenWidth && screenWidth <= 992}
                  <div class="stages__item-name">{item.stageName}</div>
                {/if}
              </div>
              {#if screenWidth && screenWidth > 992}
                <div class="stages__item-name">{item.stageName}</div>
              {/if}
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </Container>
</section>

<style lang="scss">
  @media (min-width: 993px) {
    .stages {
      padding-top: 75px;
      padding-bottom: 75px;
    }
  }

  @media (max-width: 992px) {
    .stages {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
  section * {
    .stages__wrapper {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    .stages__title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .stages__title {
      font-size: 32px;
      color: #07124a;
      font-weight: bold;
    }

    .stages__subtitle {
      font-size: 18px;
      color: #07124a;
    }

    @media (min-width: 993px) {
      .stages__subtitle {
        width: 48%;
      }
    }

    .stages__items {
      display: flex;
      justify-content: space-between;

      padding-top: 30px;
      gap: 50px;
    }

    @media (max-width: 992px) {
      .stages__items {
        flex-direction: column;
      }
    }

    @media (min-width: 993px) {
      .stages__items {
        align-items: flex-end;
      }
    }

    @keyframes fdsseq {
      100% {
        opacity: 1;
      }
    }

    .stages__item {
      display: flex;
      opacity: 0;
      animation: fdsseq 0.7s forwards;
      animation-delay: calc(0.7s * var(--acc));
    }

    @media (max-width: 992px) {
      .stages__item {
        flex-direction: column-reverse;
        gap: 40px;
      }
    }

    @media (min-width: 993px) {
      .stages__item {
        flex-direction: column;
      }
    }

    .stages__item-text {
      color: #07124a;
      font-size: 16px;
    }

    @media (min-width: 993px) {
      .stages__item-text {
        padding-bottom: 80px;
      }
    }

    .stages__item-bar {
      position: relative;
      display: flex;

      padding: 20px;
      background-color: #46506f;
      border-radius: 10px;
    }

    @media (min-width: 993px) {
      .stages__item-bar {
        align-items: flex-end;
        justify-content: center;
        height: calc(220px + (var(--acc) * 40px));
      }
    }

    @media (max-width: 992px) {
      .stages__item-bar {
        align-items: center;
        padding: 10px;
        gap: 10px;
        min-width: 50%;
        width: calc(50% + (var(--acc) * 40px));
        max-width: 100%;
      }
    }

    .stages__item-bar::after {
      position: absolute;
      content: '';
      width: 1px;
      background-color: #0077ff;
    }

    @media (max-width: 992px) {
      .stages__item-bar::after {
        right: 20px;
        bottom: -20px;
        height: 40px;
      }
    }

    @media (min-width: 993px) {
      .stages__item-bar::after {
        top: -60px;
        left: 20px;
        height: 80px;
      }
    }

    .stages__item-number {
      color: white;

      font-weight: bold;
    }

    @media (min-width: 993px) {
      .stages__item-number {
        writing-mode: tb;
        font-size: 72px;
        transform: rotateZ(-180deg);
      }
    }

    @media (max-width: 992px) {
      .stages__item-number {
        font-size: 32px;
      }
    }

    .stages__item-name {
      color: #97a2b6;

      text-align: center;
    }

    @media (min-width: 993px) {
      .stages__item-name {
        font-size: 18px;
        padding-top: 20px;
      }
    }

    @media (max-width: 992px) {
      .stages__item-name {
        font-size: 12px;
      }
    }
  }
</style>
