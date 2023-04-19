<script>
  export let data = {}
  import Container from '$lib/components/Container.svelte'
</script>

{#if data.component == 'Cards'}
  <section class="grid-content">
    <Container>
      <div class="grid-content__wrapper">
        <div class="grid-content__title-wrapper">
          <h2 class="h2">{data.title}</h2>
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
{/if}

{#if data.component == 'Seo'}
  <section class="seotext">
    <Container>
      <div class="seotext__wrapper">
        <h2 class="h2">{data.title}</h2>
        <div class="seotext__items">
          {#each data.contentListCollection.items as item}
            <div class="seotext__item">
              <div class="seotext__name-wrapper">
                <p class="seotext__name">
                  {#if item.title == null}
                    {(item.title = '  ')}
                  {/if}
                  {item.title}
                </p>

                <span class="seotext__bar" />
              </div>
              <p class="seotext__text">
                {item.text}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </Container>
  </section>
{/if}

{#if data.component == 'Methods'}
  <section class="methods">
    <Container>
      <div class="methods__wrapper">
        <div class="methods__title-wrapper">
          <h2 class="h2 h2--white">{data.title}</h2>
          <p class="methods__subtitle">{data.subtitle}</p>
        </div>
        <div class="methods__items">
          {#each data.contentListCollection.items as item}
            <div class="methods__item">
              <span class="methods__icon">
                <img src={item.icon.url} alt="" class="methods__icon-img" />
              </span>
              <p class="methods__text">{item.text}</p>
            </div>
          {/each}
        </div>
      </div>
    </Container>
  </section>
{/if}

{#if data.component == 'Indicator'}
  <section class="indicators">
    <Container>
      <div class="indicators__wrapper">
        {#each data.contentListCollection.items as item}
          <div class="indicator">
            <div class="indicator__wrapper">
              <span class="indicator__fact">{item.title}</span>
              <span class="indicator__value">{item.text}</span>
            </div>
          </div>
        {/each}
      </div>
    </Container>
  </section>
{/if}

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
  .seotext {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    &__items {
      display: flex;
      flex-direction: column;
      gap: 70px;
      flex-basis: 50%;
    }

    &__item {
      display: flex;
      flex-direction: column;
      position: relative;
      gap: 32px;
      width: 49%;
    }

    &__item:not(:last-of-type):nth-child(odd):before {
      content: '';
      position: absolute;
      background-repeat: no-repeat;
      width: 50px;
      height: 50px;
      left: -100px;
      bottom: 0;
      opacity: 0.2;
      transform: rotate(90deg);
      background-image: url('Group 109.svg');
    }

    &__item:not(:last-of-type):nth-child(even):before {
      content: '';
      position: absolute;
      background-repeat: no-repeat;
      width: 50px;
      height: 50px;
      left: calc(100% + 50px);
      bottom: 0;
      opacity: 0.2;
      transform: rotate(90deg);
      background-image: url('Group 109.svg');
    }

    &__item:nth-child(odd) {
      align-self: flex-end;
    }

    &__name-wrapper {
      display: flex;
      align-items: center;
      position: relative;
      color: #46506f;
      font-size: 24px;
      text-transform: uppercase;
    }

    &__name {
      position: absolute;
      background-color: white;
      left: 0;
      padding-right: 30px;
    }

    &__bar {
      width: 100%;
      height: 1px;
      background-color: #0077ff;
    }

    &__text {
      color: var(--dark-blue);
      font-size: 18px;
    }
  }

  .methods {
    background-color: #46506f;
    border-radius: 20px;
    padding-top: 75px;
    padding-bottom: 80px;
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 135px;
    }

    &__title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__subtitle {
      color: white;
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 50px;
      row-gap: 75px;
    }

    &__icon {
      display: flex;
    }

    &__item {
      display: flex;
      text-indent: 50px;
      gap: 100px;
      color: white;
    }
  }

  .indicators {
    &__wrapper {
      display: flex;
      justify-content: space-between;
    }
  }

  .indicator {
    width: 220px;

    &__fact {
      font-size: 14px;
      color: #46506f;
    }
    &__wrapper {
      background-color: rgba(255, 0, 0, 0.205);
      padding-left: 20px;
      height: 270px;
      padding-top: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__value {
      color: #07124a;
      font-size: 72px;
      letter-spacing: -4.32px;
      line-height: 48px;
    }
  }
</style>
