<script>
  import * as Sections from '$lib/sections'
  import '$lib/css/style.css'
  import { page } from '$app/stores'
  export let data
  $: activeTags = []
  $: sections = [
    ...data.pageData.sectionsCollection.items,
    {
      cards: data.cards,
      section: `Hubpage`,
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

  $: clearActive = () => (activeTags = [])

  $: handleTogleActive = (tag) => {
    activeTags = activeTags.includes(tag)
      ? activeTags.filter((el) => el !== tag)
      : [...activeTags, tag]
  }
  $: $page.url && clearActive()
</script>

<svelte:head>
  <title>{data.pageData.pageName}</title>
  {#if data.pageData.seo}
    {#if data.pageData.seo.description}
      <meta name="description" content={data.pageData.seo.description} />
    {/if}
    {#if data.pageData.seo.description}
      <meta property="og:image:url" content={data.pageData.seo.image.url} />
    {/if}
    {#if data.pageData.seo.description}
      <meta property="og:image:width" content={data.pageData.seo.image.width} />
    {/if}
    {#if data.pageData.seo.description}
      <meta property="og:image:height" content={data.pageData.seo.image.height} />
    {/if}
    {#if data.pageData.seo.description}
      <meta property="og:title" content={data.pageData.seo.title} />
    {/if}
    {#if data.pageData.seo.description}
      <meta property="og:description" content={data.pageData.seo.description} />
    {/if}
    {#if data.pageData.seo.description}
      <meta property="og:type" content={data.pageData.seo.ogype} />
    {/if}
    {#if data.pageData.seo.description}
      <meta name="keywords" content={data.pageData.seo.keywords} />
    {/if}
  {/if}
</svelte:head>

{#each sections.sort((a, b) => a.position - b.position) as section}
  {#if Sections[section?.component]}
    <svelte:component this={Sections[section?.component]} data={section} />
  {/if}

  {#if !Sections[section?.component]}
    <svelte:component
      this={Sections['Hubpage']}
      data={{ section, clearActive, handleTogleActive, activeTags }}
    />
  {/if}
{/each}

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
