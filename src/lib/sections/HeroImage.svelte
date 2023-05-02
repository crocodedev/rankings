<script>
  import Container from '$lib/components/Container.svelte'
  export let data = {}

  console.log(data)
</script>

<section class="hero-image">
  <Container>
    <div class="hero-image__wrapper">
      <div class="hero-image__text-wrapper">
        <h1 class="h1 hero-image__title">{data.title}</h1>
        <p class="hero-image__text">{data.text}</p>
        <a href={data.linkData.link} class="hero-image__link">{data.linkData.title}</a>
        <div class="hero-image__categories">
          <!-- {#each data.tagList as tag}
            <p class="hero-image__category">{tag}</p>
          {/each} -->
          <p class="hero-image__category">Packaging</p>
          <p class="hero-image__category">SEO optimisation</p>
        </div>
      </div>
      <div class="hero-image__image-wrapper">
        <img src={data.image.url} alt="" class="hero-image__image" />
      </div>
    </div>
  </Container>
</section>

<style lang="scss">
  .hero-image {
    &__wrapper {
      display: flex;
      justify-content: space-between;
    }

    @media (max-width: 768px) {
      &__wrapper {
        flex-direction: column;
        gap: 20px;
      }
    }

    &__title {
      width: max-content;
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
        background-image: url('Group 109.svg');
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
      &__image-wrapper:hover &__image {
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
