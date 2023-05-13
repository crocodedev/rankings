<script>
  import Container from '$lib/components/Container.svelte'
  export let data = {}

  import { beforeUpdate } from 'svelte'

  let page = ''

  beforeUpdate(() => {
    let pathname = window.location.pathname
    let startIndex = pathname.indexOf('/') + 1
    let endIndex = pathname.indexOf('/', startIndex)
    page = pathname.substring(startIndex, endIndex)
  })
</script>

{#if page != 'services'}
  <section class="hero-image">
    <Container>
      <div class="hero-image__wrapper">
        <div class="hero-image__text-wrapper">
          <h1 class="h1">{data.title}</h1>
          <p class="hero-image__text">{data.text}</p>
          {#if data.linkData}
            <a href={data.linkData.link} class="hero-image__link">{data.linkData.title}</a>
          {/if}
          <div class="hero-image__categories">
            {#each data.tagListCollection.items as tag}
              <p class="hero-image__category">{tag.title}</p>
            {/each}
          </div>
        </div>
        <div class="hero-image__image-wrapper hero-image__image-wrapper--hover">
          <img src={data.image.url} alt="" class="hero-image__image" />
        </div>
      </div>
    </Container>
  </section>
{/if}

{#if page == 'services'}
  <section class="hero-image">
    <Container>
      <div class="hero-image__wrapper hero-image__bottom">
        <div class="hero-image__text-wrapper">
          <h1 class="h1">{data.title}</h1>
          <p class="hero-image__text">{data.text}</p>

          <div class="hero-image__categories">
            {#each data.buttonListCollection.items as button}
              <a href={button.link} class="hero-image__button">{button.title}</a>
            {/each}
          </div>
        </div>
        <div class="hero-image__image-wrapper ">
          <img src={data.image.url} alt="" class="hero-image__image" />
        </div>
      </div>
    </Container>
  </section>
{/if}

<style lang="scss">
  .hero-image {
    &__wrapper {
      display: flex;
      justify-content: space-between;
    }

    &__button {
      border: 1px solid #0077ff;
      padding: 10px 20px;
      border-radius: 5px;
      text-transform: uppercase;

      &:first-of-type {
        background-color: #0077ff;
        color: white;
      }

      &:last-of-type {
        background-color: white;
        color: #0077ff;
      }
    }

    &__bottom {
      border-bottom: 2px solid #0077ff;

      @media (max-width: 768px) {
        .hero-image__image-wrapper {
          padding-top: 100px;
        }
        & {
          padding-bottom: 105px;
        }
      }
    }

    @media (max-width: 768px) {
      &__wrapper {
        flex-direction: column;
        gap: 20px;
      }
    }

    &__text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    @media (min-width: 769px) {
      &__text-wrapper {
        width: 48%;
      }
    }

    &__text {
      display: flex;
      font-size: 18px;
      color: #97a2b6;
    }

    @media (min-width: 769px) and (max-width: 992px) {
      &__text {
        width: 80%;
      }
    }

    @media (min-width: 993px) {
      &__text {
        width: 61%;
      }
    }

    @media (max-width: 769px) {
      &__text {
        font-size: 14px;
      }
    }

    &__link {
      position: relative;
      color: #97a2b6;
      font-size: 14px;
      width: max-content;

      &::after {
        position: absolute;
        content: '';
        right: -30px;
        width: 18px;
        height: 15px;
        object-fit: cover;
        background-size: cover;
        opacity: 0.3;
        background-image: url('../Group 109.svg');
      }
    }

    @media (max-width: 768px) {
      &__link {
        order: 4;
      }
    }

    &__categories {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    &__category {
      font-size: 14px;
      padding: 5px 15px;
      background-color: #07124a;
      border-radius: 5px;
      color: white;
      width: max-content;
    }

    &__image-wrapper {
      overflow: hidden;
      border-radius: 10px;
    }

    @media (min-width: 769px) {
      &__image-wrapper {
        width: 48%;
        height: 500px;
      }
    }

    @media (max-width: 768px) {
      &__image-wrapper {
        width: 100%;
        height: 267px;
      }
    }

    @media (min-width: 769px) {
      &__image-wrapper--hover:hover &__image {
        height: 100%;
      }
    }

    &__image {
      transition: 0.3s ease-in-out;
      border-radius: 10px;
      object-fit: cover;
      width: 100%;
    }

    @media (min-width: 769px) {
      &__image {
        height: 75.4%;
      }
    }

    @media (max-width: 768px) {
      &__image {
        height: 100%;
      }
    }
  }
</style>
