<script>
  export let data = {}
  import Container from '$lib/components/Container.svelte'
</script>

<section class="grid-content">
  <Container>
    <div class="grid-content__wrapper">
      <div class="grid-content__title-wrapper">
        <h2 class="grid-content__title">{data.title}</h2>
        <p class="grid-content__subtitle">{data.subtitle}</p>
      </div>
      <div class="grid-content__items">
        {#each data.contentListCollection.items as item}
          <div class="card">
            <div class="card__wrapper">
              <div class="card__image-wrapper">
                <img src={item.imageCard.url} alt="card" class="card__image" />
                <a href="#">
                  <img src="feather-external-link.svg" alt="" class="card__image-icon" />
                </a>
              </div>
              <div class="card__text-wrapper">
                <div class="card__generaly-info">
                  <span class="card__industry">{item.subtitleCard}</span>
                  <p class="card__company">{item.titleCard}</p>
                  <div class="card__categories-list">
                    {#each item.categoriesListCollection.items as category}
                      <a href={category.url} class="card__category">
                        {category.tagName}
                      </a>
                    {/each}
                  </div>
                </div>
                <p class="card__text">
                  {item.textCard}
                </p>
              </div>
            </div>
          </div>
        {/each}
      </div>
      {#if data.seeMoreText}
        <a href="#" class="grid-content__show-wrapper">
          <p class="grid-content__show-text">{data.seeMoreText}</p>
          <span><img src="Group 109.svg" alt="arrow" class="grid-content__show-icon" /></span>
        </a>
      {/if}
    </div>
  </Container>
</section>

<style lang="scss">
  section {
    padding: 50px 0;
  }
  .grid-content {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    &__items {
      display: grid;
      gap: 50px;
    }

    @media (min-width: 768px) and (max-width: 993px) {
      &__items {
        gap: 25px;
      }
    }

    @media (min-width: 768px) {
      &__items {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &__title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 48%;
    }

    &__title {
      font-size: 32px;
      font-weight: bold;
      color: #07124a;
    }

    &__subtitle {
      font-size: 18px;
      color: #07124a;
    }

    &__show-wrapper {
      display: flex;
      align-self: flex-end;
      align-items: center;
      gap: 10px;
    }

    &__show-text {
      display: flex;
      flex-direction: column;
      color: #97a2b6;
      font-size: 14px;
    }

    &__show-icon {
      filter: opacity(25%);
    }
  }
  .card {
    align-self: flex-end;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    height: 100%;
    background-color: #46506f;

    &__wrapper {
      display: flex;
      flex-direction: column;
    }

    &__image-wrapper {
      width: 100%;
      height: 365px;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }

    @media (max-width: 768px) {
      &__image-wrapper {
        height: 200px;
      }
    }

    &__image-icon {
      position: absolute;
      top: 20px;
      right: 20px;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__text-wrapper {
      display: flex;
      gap: 40px;
      padding: 50px 20px 20px;
    }

    @media (max-width: 992px) {
      &__text-wrapper {
        padding: 20px;
        flex-direction: column;
        gap: 20px;
      }
    }

    &__text {
      font-size: 18px;
    }

    @media (min-width: 993px) {
      &__text {
        padding-top: 26px;
        width: 45%;
      }
    }

    &__generaly-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    @media (min-width: 993px) {
      &__generaly-info {
        width: 55%;
      }
    }

    &__name-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__categories-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    @media (min-width: 993px) {
      &__categories-list {
        padding-top: 30px;
      }
    }

    &__category {
      padding: 10px 30px;
      background-color: white;
      color: #07124a;
      font-size: 14px;
      border-radius: 8px;
    }

    &__industry {
      font-size: 14px;
    }

    &__company {
      text-transform: uppercase;
      font-size: 24px;
      font-weight: 600;
    }
  }
</style>
