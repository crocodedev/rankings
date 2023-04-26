<script>
  export let data = {}
  import Container from '$lib/components/Container.svelte'

  let m = { x: 0, y: 0 }

  function handleMousemove(event) {
    m.x = event.clientX - 116
    m.y = event.clientY - 216
  }
</script>

<section class="textContent">
  <Container>
    <div class="textContent__wrapper">
      <div class="textContent__title-wrapper {data.textAlign}">
        <h2 class="h2">{data.title}</h2>
        <p class="textContent__text">{data.text}</p>
      </div>
      {#if data.image}
        <div class="textContent__image-wrapper" on:mousemove={handleMousemove}>
          <div class="textContent__cursor" style="left:{m.x}px;top:{m.y}px" />
          <img src={data.image.url} alt="" class="textContent__image" />
        </div>
      {/if}
    </div>
  </Container>
</section>

<style lang="scss">
  .textContent {
    &__cursor {
      cursor: none;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 136px;
      height: 136px;
      border-radius: 100%;
      border: 1px solid #0077ff;
    }

    &__cursor::before {
      content: 'CLICK';
      color: #0077ff;
      font-size: 18px;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    &__title-wrapper {
      display: flex;
      align-self: flex-start;
      width: 48%;
      flex-direction: column;
      gap: 20px;
    }

    &__title-wrapper.right {
      align-self: flex-end;
      text-align: end;
    }

    &__title {
      font-size: 32px;
      color: #07124a;
      font-weight: bold;
    }

    &__text {
      font-size: 18px;
      color: #07124a;
    }

    &__image-wrapper {
      position: relative;
      width: 100%;
      height: 416px;
      border-radius: 10px;
      overflow: hidden;
    }

    &__image {
      width: 100%;
      height: 100%;
    }
  }
</style>
