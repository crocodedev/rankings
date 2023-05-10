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

<section>
  <Container>
    <h1 class="h1">{data.title}</h1>
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
  </Container>
</section>

<style lang="scss">
  .rich-text {
    &__text {
      color: #07124a;
      font-size: 18px;
      padding: 10px 0;
    }

    &__text--semibold {
      font-weight: 500;
    }
  }
</style>
