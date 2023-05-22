<script>
  export let data = {}
  import Container from '$lib/components/Container.svelte'
  import { Lightbox } from 'svelte-lightbox'

  let cursor
  let m = { x: 0, y: 0 }

  function handleMousemove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    m = { x: event.clientX - rect.left, y: event.clientY - rect.top }
  }

  function handleClose() {
    dispatch('close')
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
        <Lightbox description={data.title} on:click={handleClose}>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="textContent__image-wrapper" on:mousemove={handleMousemove}>
            <div
              class="textContent__cursor"
              style={`left: ${m.x - (cursor ? cursor.offsetWidth / 2 : 0)}px; top: ${
                m.y - (cursor ? cursor.offsetHeight / 2 : 0)
              }px;`}
              bind:this={cursor}
            />

            <img src={data.image.url} alt="" class="textContent__image" />
          </div>
        </Lightbox>
      {/if}
    </div>
  </Container>
</section>

<style lang="scss">
  .textContent {
    @media (min-width: 993px) {
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
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    &__title-wrapper {
      display: flex;
      align-self: flex-start;
      flex-direction: column;
      gap: 20px;
    }

    @media (min-width: 993px) {
      &__title-wrapper {
        width: 48%;
      }
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
      color: #07124a;
    }

    @media (max-width: 768px) {
      &__text {
        font-size: 14px;
      }
    }
    @media (min-width: 769px) {
      &__text {
        font-size: 18px;
      }
    }

    &__image-wrapper {
      cursor: none;
      position: relative;
      width: 100%;
      height: 416px;
      border-radius: 10px;
      overflow: hidden;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .svelte-lightbox-body .textContent__image-wrapper .textContent__cursor {
    cursor: pointer;
    opacity: 0;
  }

  :global(.svelte-lightbox-body) {
    pointer-events: none;
  }
</style>
