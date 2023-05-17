<script>
  import Container from '../components/Container.svelte'
  export let data

  const { clearActive, handleTogleActive, activeTags, section } = data
</script>

<section class="cases">
  <Container>
    <div class="cases__wrapper">
      <h1 class="cases__title h1">{data.section.title}</h1>
      {#if section.title == 'Blog'}
        <div class="cases__tags" style="justify-content:center">
          <button
            on:click={data.clearActive}
            class={`cases__tag ${data.activeTags.length === 0 ? 'cases__tag--active' : ''}`}
            >All topics</button
          >
          {#each data.section.tags as tag}
            <button
              on:click={() => data.handleTogleActive(tag)}
              class={`cases__tag ${data.activeTags.includes(tag) ? 'cases__tag--active' : ''}`}
            >
              {tag}</button
            >
          {/each}
        </div>
      {/if}

      {#if section.title == 'Cases'}
        <div class="cases__tags">
          <button
            on:click={data.clearActive}
            type="button"
            class={`cases__tag ${data.activeTags.length === 0 ? 'cases__tag--active' : ''}`}
            >All projects</button
          >
          {#each section.tags as tag}
            <button
              type="button"
              on:click={() => data.handleTogleActive(tag)}
              class={`cases__tag ${data.activeTags.includes(tag) ? 'cases__tag--active' : ''}`}
              >{tag}</button
            >
          {/each}
        </div>
      {/if}

      <div class="cases__items">
        {#each data.section.cards as card}
          {#if data.activeTags.length === 0 || card.tagList?.some( (el) => data.activeTags.includes(el) )}
            <div class="cases__item {card.blogCardVariation}">
              <div class="cases__item-image-wrapper">
                <img src={card.imageCard.url} alt="" class="cases__item-image" />
                <a href={card.url}>
                  <img src="feather-external-link.svg" alt="" class="card__image-icon" />
                </a>
              </div>
              <div class="cases__text-wrapper">
                <a href={card.url} class="cases__item-name">{card.titleCard}</a>
                {#if card.subtitleCard != null}
                  <a href={card.url} class="cases__item-category">{card.subtitleCard}</a>
                {/if}
                <div class="cases__item-tags">
                  {#if section.title == 'Cases'}
                    {#if card.tagList}
                      {#each card.tagList as tag}
                        <div class="cases__item-tag">{tag}</div>
                      {/each}
                    {/if}
                  {/if}
                </div>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </Container>
</section>

<style global lang="scss">
  @import 'destyle.css/destyle.css';

  .card__image-icon {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .cases {
    &__title {
      padding-bottom: 150px;
    }
    &__tags {
      display: flex;
      flex-wrap: wrap;

      gap: 10px;
    }

    @media (max-width: 992px) {
      &__tags {
        padding-bottom: 20px;
      }
    }

    @media (min-width: 993px) {
      &__tags {
        padding-bottom: 50px;
      }
    }

    &__tag {
      background-color: white;
      border: 1px solid #07124a;
      border-radius: 5px;
      color: #07124a;
      padding: 5px 15px;
      cursor: pointer;
    }

    &__tag--active {
      color: white;
      background-color: #07124a;
    }

    @media (max-width: 992px) {
      &__tag {
        font-size: 14px;
      }
    }

    &__items {
      padding-top: 50px;
      display: flex;
      flex-wrap: wrap;
      border-top: 2px solid #0077ff;
    }

    @media (max-width: 768px) {
      &__items {
        row-gap: 75px;
      }
    }

    @media (min-width: 769px) and (max-width: 992px) {
      &__items {
        column-gap: 30px;
        row-gap: 100px;
      }
    }

    @media (min-width: 993px) {
      &__items {
        justify-content: space-between;
        column-gap: 50px;
        row-gap: 150px;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    @media (min-width: 769px) {
      &__item {
        width: 47%;
      }
    }

    @media (max-width: 768px) {
      &__item {
        width: 100%;
      }
    }

    &__item-image-wrapper {
      position: relative;
      width: 100%;

      border-radius: 10px;
      overflow: hidden;
      transition: 0.3s ease-in-out;
    }

    @media (min-width: 993px) {
      &__item-image-wrapper {
        height: 500px;
      }
    }

    @media (min-width: 769px) and (max-width: 992px) {
      &__item-image-wrapper {
        height: 325px;
      }
    }

    @media (max-width: 768px) {
      &__item-image-wrapper {
        height: 267px;
      }
    }

    &__item-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__item-name {
      font-size: 18px;
      color: #07124a;
      font-weight: bold;
    }

    &__item-category {
      font-size: 18px;
      color: #97a2b6;
    }

    &__item-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    &__item-tag {
      font-size: 14px;
      border-radius: 5px;
      border: 1px solid #07124a;
      color: #07124a;
      padding: 5px 15px;
    }

    @media (min-width: 993px) {
      &__item:is(.FullWidth) {
        width: 100%;
      }

      &__item:is(.HalfHeight) {
        min-height: 500px;
        .cases__item-image-wrapper {
          height: 250px;
        }
      }
      &__item:is(.FullWidth):hover {
        .cases__item-image-wrapper {
          width: 48%;
        }
      }

      &__item:is(.HalfHeight):hover {
        .cases__item-image-wrapper {
          height: 100%;
        }
      }
    }
  }
</style>
