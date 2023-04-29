<script>
  export let data = {}

  import Container from '$lib/components/Container.svelte'
  import { onMount } from 'svelte'

  let screenWidth

  onMount(() => {
    screenWidth = window.innerWidth
    window.addEventListener('resize', () => {
      screenWidth = window.innerWidth
    })
  })
</script>

<section class="stages">
  <Container>
    <div class="stages__wrapper">
      <div class="stages__title-wrapper">
        <h2 class="h2">{data.stagesTitle}</h2>
        <p class="stages__subtitle">{data.stagesSubtitle}</p>
      </div>
      <div class="stages__items">
        {#each data.stagesListCollection.items as item, index}
          <div class="stages__item">
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
        {/each}
      </div>
    </div>
  </Container>
</section>

<style lang="scss">
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

    .stages__item {
      display: flex;
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
