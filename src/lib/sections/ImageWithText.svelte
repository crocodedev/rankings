<script>
  export let data = {}
  import Container from '$lib/components/Container.svelte'
  import { beforeUpdate } from 'svelte'

  let page = ''

  beforeUpdate(() => {
    let pathname = window.location.pathname
    page = pathname.substring(pathname.lastIndexOf('/') + 1)
  })
</script>

{#if page == 'contact-us'}
  <section class="imagewithtext imagewithtext--contact">
    <Container>
      <div class="imagewithtext__wrapper">
        <div class="imagewithtext__image-wrapper">
          <img src={data.image.url} alt="" class="imagewithtext__image" />
        </div>
        <div class="imagewithtext__inner">
          <div class="imagewithtext__text-wrapper">
            <h3 class="h2 white">{data.imageTextTitle}</h3>
            <p class="white">{data.imageTextText}</p>
          </div>
          <a href={data.buttonLink} class="imagewithtext__btn">{data.buttonText}</a>
        </div>
      </div>
    </Container>
  </section>
{/if}
{#if page != 'contact-us'}
  <section class="imagewithtext">
    <Container>
      <div class="imagewithtext__wrapper">
        <div class="imagewithtext__image-wrapper">
          <img src={data.image.url} alt="" class="imagewithtext__image" />
        </div>
        <div class="imagewithtext__inner">
          <div class="imagewithtext__text-wrapper">
            <h3 class="h2">{data.imageTextTitle}</h3>
            <p>{data.imageTextText}</p>
          </div>
          <a href={data.buttonLink} class="imagewithtext__btn">{data.buttonText}</a>
        </div>
      </div>
    </Container>
  </section>
{/if}

<style lang="scss">
  .imagewithtext--contact {
    background-color: #46506f;
  }
  .imagewithtext {
    &__wrapper {
      display: flex;
    }

    @media (max-width: 992px) {
      &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
      }

      &__image {
        width: 100%;
      }
    }

    &__image-wrapper {
      height: 270px;
      justify-content: center;
      display: flex;
    }

    @media (min-width: 993px) {
      &__image-wrapper {
        width: 50%;
      }
    }

    &__inner {
      display: flex;
      gap: 39px;
    }

    @media (min-width: 993px) {
      &__inner {
        width: 50%;
      }
    }

    @media (max-width: 992px) {
      &__inner {
        flex-direction: column;
      }
    }

    &__title {
      color: #07124a;
      font-size: 32px;
      font-weight: bold;
    }

    p {
      font-size: 18px;
      color: #07124a;
    }

    .white {
      color: white;
    }

    &__text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 35px;
      justify-content: space-between;
    }

    @media (min-width: 993px) {
      &__text-wrapper {
        width: 65%;
      }
    }

    @media (max-width: 992px) {
      &__text-wrapper {
        text-align: center;
      }
    }

    &__btn {
      color: white;
      font-size: 18px;
      text-transform: uppercase;
      padding: 10px 20px;
      background-color: #0077ff;
      text-align: center;
      border-radius: 5px;
    }

    &__btn:hover {
      text-shadow: 0 0 1px white;
    }

    @media (min-width: 993px) {
      &__btn {
        align-self: flex-end;
        width: 32%;
        min-width: 202px;
      }
    }

    @media (max-width: 992px) {
      &__btn {
        align-self: center;
      }
    }
  }
</style>
