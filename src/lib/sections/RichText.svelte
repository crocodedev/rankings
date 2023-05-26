<script>
  import Container from '$lib/components/Container.svelte'
  export let data = {}
  function getParagraphs(content) {
    return content.flatMap((node) => {
      if (node.nodeType === 'paragraph') {
        return node.content
      } else if (node.nodeType === 'embedded-asset-block') {
        return node
      }
      return []
    })
  }
</script>

<section class="rich-text">
  <Container>
    <div class="rich-text__wrapper {data.variant}">
      {#if data.pageTitle == 'Page Title'}
        <h1 class="h1 rich-text__title">{data.title}</h1>
      {/if}
      {#if data.pageTitle == 'Section Title'}
        <h2 class="h2">{data.title}</h2>
      {/if}
      {#if data.variant == 'HalfWidth'}
        <div class="rich-text__arrow">
          <img src="../arrow-static.svg" alt="arrow" />
        </div>
      {/if}
      <div class="rich-text__text-wrapper">
        {#each getParagraphs(data.richText.json.content) as paragraph}
          {#if paragraph.nodeType === 'text'}
            {#if paragraph.marks && paragraph.marks.some((mark) => mark.type === 'bold')}
              {#if data.pageTitle == 'Page Title'}
                <p class="rich-text__text rich-text__text--semibold">{paragraph.value}</p>
              {/if}
              {#if data.pageTitle == 'Section Title'}
                <p class="rich-text__text rich-text__text--bold">{paragraph.value}</p>
              {/if}
            {:else}
              {#if data.pageTitle == 'Page Title'}
                {#if paragraph.value != ' '}
                  <p class="rich-text__text">{paragraph.value}</p>
                {/if}
              {/if}
              {#if data.pageTitle == 'Section Title'}
                {#if paragraph.value != ' '}
                  <p class="rich-text__text rich-text__text--secondary">{paragraph.value}</p>
                {/if}
              {/if}
            {/if}
          {/if}
          {#if paragraph.nodeType === 'embedded-asset-block'}
            {#each data.richText.links.assets.block as asset}
              {#if asset.sys.id === paragraph.data.target.sys.id}
                <div class="rich-text__image-wrapper">
                  <img class="rich-text__image" src={`${asset.url}`} alt="Embedded Asset" />
                </div>
              {/if}
            {/each}
          {/if}
        {/each}
      </div>
    </div>
  </Container>
</section>

<style lang="scss">
  .rich-text {
    &__wrapper {
      position: relative;
    }
    &__wrapper.FullWidth {
      display: flex;
      flex-direction: column;

      @media (min-width: 993px) {
        & {
          gap: 50px;
        }
      }

      @media (max-width: 992px) {
        & {
          gap: 65px;
        }
      }
    }

    &__wrapper.HalfWidth {
      display: grid;

      @media (min-width: 993px) {
        & {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media (max-width: 992px) {
        & {
          gap: 65px;
        }
      }
    }
    &__text {
      color: #07124a;

      &:first-of-type {
        text-indent: 50px;
      }

      @media (max-width: 768px) {
        & {
          font-size: 14px;
        }
      }

      @media (min-width: 769px) {
        & {
          font-size: 18px;
        }
      }
    }

    &__text--secondary {
      color: #46506f;

      @media (max-width: 768px) {
        & {
          font-size: 14px;
        }
      }

      @media (min-width: 769px) {
        & {
          font-size: 16px;
        }
      }
    }

    &__text--semibold {
      @media (min-width: 769px) {
        font-size: 18px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
      }

      font-weight: 500;
    }

    &__text--bold {
      @media (min-width: 769px) {
        font-size: 24px;
        font-weight: 500;
      }

      @media (max-width: 768px) {
        font-size: 16px;
        font-weight: 400;
      }
    }

    &__text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &__image-wrapper {
      margin-top: 10px;
      margin-bottom: 10px;
      width: 100%;
      height: 400px;
      border-radius: 10px;
      overflow: hidden;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .rich-text__arrow {
    @media (min-width: 993px) {
      & {
        top: 498px;
        position: absolute;
        width: max-content;
      }
    }

    @media (max-width: 992px) {
      & {
        display: none;
      }
    }
  }
</style>
