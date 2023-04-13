<script>
  import Container from '$lib/components/Container.svelte'

  export let data = {}
</script>

<header class="header">
  <Container>
    <div class="header__wrapper">
      <div class="header__logotype">Rankings</div>
      <nav class="header__nav-list">
        {#each data.navigationCollection.items as item}
          <a href="#" class="header__nav-item">{item.title}</a>
          {#if item.subItemsCollection.items}
            <ul class="header__nav-item-stack">
              {#each item.subItemsCollection.items as subitem}
                <a href="#" class="header__nav-item">{subitem.title}</a>
              {/each}
            </ul>
          {/if}
        {/each}
      </nav>
    </div>
  </Container>
</header>

<style lang="scss">
  .header * {
    .header__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 35px 0;
      z-index: 2;
      position: relative;
    }

    .header__nav-list {
      display: flex;
      gap: 60px;
    }

    .header__nav-item {
      color: #07124a;
    }

    .header__nav-item:hover {
      text-shadow: 0 0 1px #07124a;
    }

    .header__nav-item-stack {
      position: absolute;
      backdrop-filter: blur(10px);
      top: 100%;
    }

    .header__logotype {
      color: #07124a;
      font-size: 24px;
      font-weight: 600;
    }
  }
</style>
