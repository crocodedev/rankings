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

  console.log(data.variant)
</script>

<section>
  <Container>
    <div class="rich-text__wrapper {data.variant}">
      <h1 class="h1">{data.title}</h1>
      {#if data.variant == 'HalfWidth'}
        <div class="rich-text__arrow">
          <div class="rich-text__arrow-1" />
          <div class="rich-text__arrow-2" />
          <div class="rich-text__arrow-3" />
        </div>
      {/if}
      <div class="rich-text__text-wrapper">
        {#each getParagraphs(data.richText.json.content) as paragraph}
          {#if paragraph.nodeType === 'text'}
            {#if paragraph.marks && paragraph.marks.some((mark) => mark.type === 'bold')}
              <p class="rich-text__text rich-text__text--semibold">{paragraph.value}</p>
            {:else}
              <p class="rich-text__text">{paragraph.value}</p>
            {/if}
          {/if}
          {#if paragraph.nodeType === 'embedded-asset-block'}
            {#each data.richText.links.assets.block as asset}
              {#if asset.sys.id === paragraph.data.target.sys.id}
                <img src={`${asset.url}`} alt="Embedded Asset" />
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

    &__text--semibold {
      font-weight: 500;
    }

    &__text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  .rich-text__arrow {
    display: flex;
    position: absolute;
    align-self: center;
    width: max-content;
  }

  @media (max-width: 992px) {
    .rich-text__arrow {
      display: none;
    }
  }

  .rich-text__arrow-1 {
    background-color: #97a2b6;

    @media (min-width: 993px) {
      width: 85px;
      height: 22px;
    }

    @media (max-width: 992px) {
      width: 42px;
      height: 10px;
    }
  }

  .rich-text__arrow-2 {
    position: absolute;
    width: 31px;
    transform: rotate(45deg);
    right: 0;
    top: -9px;
    height: 41px;
    transform: matrix(1, 0, -1, 1, 0, 0);

    @media (min-width: 993px) {
      &::before {
        position: absolute;
        content: '';
        top: 20.5px;
        width: 100%;
        height: 100%;
        background-color: #97a2b6;
        left: 16px;
      }

      &::after {
        position: absolute;
        content: '';
        top: -20.5px;
        width: 100%;
        height: 100%;
        background-color: #97a2b6;
        transform: matrix(1, 0, 2, 1, 0, 0);
        right: 25px;
      }
    }
    @media (max-width: 992px) {
      &::before {
        position: absolute;
        content: '';
        top: 13.5px;
        width: 50%;
        height: 50%;
        background-color: #97a2b6;
        left: 16px;
      }

      &::after {
        position: absolute;
        content: '';
        top: -7.5px;
        width: 50%;
        height: 50%;
        background-color: #97a2b6;
        transform: matrix(1, 0, 2, 1, 0, 0);
        right: 21px;
      }
    }
  }

  .rich-text__arrow-3 {
    position: absolute;
    width: 31px;
    transform: rotate(45deg);
    top: -9px;
    height: 41px;
    transform: matrix(1, 0, -1, 1, 0, 0);

    @media (min-width: 993px) {
      & {
        left: calc(100% + 31px);
      }
      &::before {
        position: absolute;
        content: '';
        top: 20.5px;
        width: 100%;
        height: 100%;
        background-color: #97a2b6;
        left: 16px;
      }

      &::after {
        position: absolute;
        content: '';
        top: -20.5px;
        width: 100%;
        height: 100%;
        background-color: #97a2b6;
        transform: matrix(1, 0, 2, 1, 0, 0);
        right: 25px;
      }
    }
    @media (max-width: 992px) {
      & {
        left: calc(100% + 10px);
      }
      &::before {
        position: absolute;
        content: '';
        top: 13.5px;
        width: 50%;
        height: 50%;
        background-color: #97a2b6;
        left: 13px;
      }

      &::after {
        position: absolute;
        content: '';
        top: -7.5px;
        width: 50%;
        height: 50%;
        background-color: #97a2b6;
        transform: matrix(1, 0, 2, 1, 0, 0);
        right: 25px;
      }
    }
  }
</style>
