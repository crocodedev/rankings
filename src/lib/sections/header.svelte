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
  style=" position: fixed;top: 0;width: 100%;backdrop-filter: blur(5px);z-index: 5;transition: 0.2s ease-in-out;"
  bind:this={header}
>
  <Container>
    <div class="header__wrapper">
      <div class="header__logotype">Rankings</div>
      <nav class="header__nav-list">
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
    </div>
  </Container>
</header>

<style lang="scss">
  header {
    transition: 1s ease-in-out;
  }
  .header__general-wrapper {
    position: relative;
    z-index: 2;
  }

  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    position: relative;
  }

  .header__nav-list {
    display: flex;
    gap: 60px;
    position: relative;
  }

  .header__nav-item {
    color: #07124a;
    padding-bottom: 35px;
    padding-top: 35px;

    &:hover .header__nav-item-stack {
      display: grid;
      opacity: 1;
      left: 0;
      pointer-events: all;
    }

    &:hover .header__nav-item-stack::after {
      left: 0;
      width: 100%;
    }
  }

  .header__nav-item-stack {
    position: absolute;
    opacity: 0;
    display: grid;
    left: -100%;
    top: 100%;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 50px;
    grid-auto-flow: column;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    transition: 0.2s ease-in-out;
    pointer-events: none;

    &::after {
      z-index: 10;
      position: absolute;
      content: '';
      transition: 0.2s ease-in-out;
      background-color: #0077ff;
      height: 1px;
      width: 200%;
      left: -100%;
      top: 0;
    }
  }

  .header__nav-subitem {
    color: #07124a;
    font-size: 14px;
    width: max-content;
  }

  .header__nav-item:hover {
    text-shadow: 0 0 1px #07124a;
  }
  .header__logotype {
    color: #07124a;
    font-size: 24px;
    font-weight: 600;
  }
</style>
