<script>
  import Container from '$lib/components/Container.svelte'
  let navItem = []
  let header

  setTimeout(() => {
    navItem.forEach((el) => {
      if (el.childNodes.length > 3) {
        el.addEventListener('mouseover', () => {
          header.style.paddingBottom = '143px'
        })
        el.addEventListener('mouseout', () => {
          header.style.paddingBottom = '0px'
        })
      }
    })
  }, 100)

  export let data = {}
</script>

<header
  class="header"
  style=" position: fixed;top: 0;width: 100%;backdrop-filter: blur(10px);z-index: 5;transition: 0.2s ease-in-out;"
  bind:this={header}
>
  <Container>
    <div class="header__wrapper">
      <a href="/" class="header__logotype">Rankings</a>
      <nav class="header__nav-list">
        <span class="header__cross" />
        {#each data.navigationCollection.items as item, i}
          <div class="header__nav-item" bind:this={navItem[i]}>
            <a href={item.link}>{item.title} </a>
            {#if item.subItemsCollection.items && Object.keys(item.subItemsCollection.items).length != 0}
              <ul class="header__nav-item-stack">
                {#each item.subItemsCollection.items as subitem}
                  <li class="header__nav-subitem"><a href={subitem.link}>{subitem.title}</a></li>
                {/each}
              </ul>
            {/if}
          </div>
        {/each}
      </nav>
      <button class="header__btn-menu" />
    </div>
  </Container>
</header>

<style lang="scss">
</style>
