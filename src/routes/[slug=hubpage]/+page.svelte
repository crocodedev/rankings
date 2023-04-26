<script>
  import * as Sections from '$lib/sections'
  import '$lib/css/style.css'
  import Container from '$lib/components/Container.svelte'

  export let data
  $: sections = [
    ...data.pageData.sectionsCollection.items,
    {
      cards: data.cards,
      section: `${data.pageData.contentType}List`,
      position: 2,
      title: data.pageData.pageName,
      tags: [
        ...new Set(
          data.cards
            .map((el) => el.tagList)
            .filter((el) => el)
            .flat()
        ),
      ],
    },
  ].sort((a, b) => a.position - b.position)
  $: console.log(sections)
</script>

<svelte:head>
  <title>{data.pageData.pageName}</title>
</svelte:head>

<div>
  {#each sections as section}
    {#if Sections[section?.component]}
      <svelte:component this={Sections[section?.component]} data={section} />
    {/if}

    {#if !Sections[section?.component]}
      <section class="cases">
        <Container>
          <div class="cases__wrapper">
            <h1 class="cases__title h1">{section.title}</h1>
            <div class="cases__tags">
              {#each section.tags as tag}
                <div class="cases__tag">{tag}</div>
              {/each}
            </div>
            <div class="cases__items">
              {#each section.cards as card}
                <div class="cases__item">
                  <div class="cases__item-image-wrapper">
                    <img src={card.imageCard.url} alt="" class="cases__item-image" />
                  </div>
                  <div class="cases__text-wrapper">
                    <a href="/" class="cases__item-name">{card.titleCard}</a>
                    <a href="/" class="cases__item-category">{card.subtitleCard}</a>
                    <div class="cases__item-tags">
                      {#if card.tagList}
                        {#each card.tagList as tag}
                          <div class="cases__item-tag">{tag}</div>
                        {/each}
                      {/if}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </Container>
      </section>
    {/if}
  {/each}
</div>

<style global lang="scss">
  @import 'destyle.css/destyle.css';
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');

  .hero {
    &__title {
      font-weight: bold;
      font-size: 72px;
      color: #07124a;
    }
  }

  .cases {
    &__title {
      padding-bottom: 150px;
    }
    &__tags {
      display: flex;
      padding-bottom: 50px;
      border-bottom: 2px solid #0077ff;
      gap: 10px;
    }

    &__tag {
      background-color: white;
      border: 1px solid #07124a;
      border-radius: 5px;
      color: #07124a;
      padding: 5px 15px;
      cursor: pointer;
    }

    &__items {
      padding-top: 50px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 50px;
      row-gap: 150px;
    }

    &__item {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__item-image-wrapper {
      width: 100%;
      height: 500px;
      border-radius: 10px;
      overflow: hidden;
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
      gap: 10px;
    }

    &__item-tag {
      font-size: 14px;
      border-radius: 5px;
      border: 1px solid #07124a;
      color: #07124a;
      padding: 5px 15px;
    }
  }
</style>
