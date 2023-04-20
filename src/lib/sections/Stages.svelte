<script>
  export let data = {}

  import Container from '$lib/components/Container.svelte'
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
            </div>
            <div class="stages__item-name">{item.stageName}</div>
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
      align-items: flex-end;
      padding-top: 30px;
      gap: 50px;
    }

    .stages__item {
      display: flex;
      flex-direction: column;
    }

    .stages__item-text {
      color: #07124a;
      font-size: 16px;
      height: 135px;
    }

    .stages__item-bar {
      position: relative;
      display: flex;
      align-items: flex-end;
      padding: 20px;
      justify-content: center;
      height: calc(220px + (var(--acc) * 40px));
      background-color: #46506f;
      border-radius: 10px;
    }

    .stages__item-bar::after {
      position: absolute;
      top: -60px;
      left: 20px;
      content: '';
      width: 1px;
      height: 80px;
      background-color: #0077ff;
    }

    .stages__item-number {
      color: white;
      writing-mode: tb;
      transform: rotateZ(-180deg);
      font-size: 72px;
      font-weight: bold;
    }

    .stages__item-name {
      color: #97a2b6;
      font-size: 18px;
      padding-top: 20px;
      text-align: center;
    }
  }
</style>
