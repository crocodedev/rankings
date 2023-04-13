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
                <a href="#"
                  ><img src="feather-external-link.svg" alt="" class="card__image-icon" /></a
                >
              </div>
              <div class="card__text-wrapper">
                <div class="card__generaly-info">
                  <span class="card__industry">{item.subtitleCard}</span>
                  <p class="card__company">{item.titleCard}</p>
                  <div class="card__categories-list">
                    {#each item.categoriesListCollection.items as category}
                      <a href="#" class="card__category">
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
      grid-template-columns: repeat(2, 1fr);
      gap: 50px;
    }

    &__title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 48%;
    }

    &__title {
      font-size: 32px;
      color: #07124a;
    }

    &__subtitle {
      font-size: 18px;
      color: #07124a;
    }
  }
  .card {
    align-self: flex-end;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    height: 100%;

    &__wrapper {
      background-color: #46506f;
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
      height: 100%;
      padding: 50px 20px 20px;
    }

    &__text {
      width: 45%;
      font-size: 18px;
    }

    &__generaly-info {
      width: 55%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__name-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__categories-list {
      padding-top: 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
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
