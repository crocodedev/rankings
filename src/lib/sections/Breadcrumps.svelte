<script>
  export let data = {}
  import Container from '$lib/components/Container.svelte'
</script>

<section class="breadcrumps">
  <Container>
    <div class="breadcrumps__wrapper">
      {#each data.breadcrumpsListCollection.items as item}
        <a href={item.link} class="breadcrumps__item">{item.title}</a>
      {/each}
    </div>
  </Container>
</section>

<style lang="scss">
  .breadcrumps {
    &__wrapper {
      display: flex;
    }

    &__item {
      font-size: 14px;
      color: #97a2b6;
    }

    &__item:not(&__item:last-child) {
      &::after {
        cursor: default;
        content: '/';
        padding: 5px;
      }
    }
  }
</style>
