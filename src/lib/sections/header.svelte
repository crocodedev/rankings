<script>
  import Container from '$lib/components/Container.svelte'

  import { onMount } from 'svelte'

  let screenWidth

  let isMenuOpen = false

  function toggleMenu() {
    isMenuOpen = !isMenuOpen
  }

  onMount(() => {
    screenWidth = window.innerWidth
    window.addEventListener('resize', () => {
      screenWidth = window.innerWidth
    })
  })

  let navItem = []
  let header

  $: if (navItem.length > 0) {
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
  }

  export let data = {}
</script>

<header class="header" bind:this={header}>
  <Container>
    <div class="header__wrapper">
      <a
        href="/"
        class={isMenuOpen ? 'header__logotype header__logotype--active' : 'header__logotype'}
        >Rankings</a
      >

      <nav
        class={isMenuOpen ? 'header__nav-list header__nav-list--active' : 'header__nav-list'}
        bind
      >
        <span class="header__cross" on:click={toggleMenu} />
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
      {#if screenWidth && screenWidth <= 992}
        <div class={isMenuOpen ? 'header__mobile header__mobile--active' : 'header__mobile'}>
          <div class="header__icons">
            {#each data.socialsCollection.items as item}
              <a href={item.link}>
                <img src={item.socialIcon.url} alt={item.socialIcon.title} />
              </a>
            {/each}
          </div>
          <div class="header__mobile-links">
            {#each data.mobileMenuLinksCollection.items as item}
              <a href={item.link} class="header__mobile-link">{item.title}</a>
            {/each}
          </div>
        </div>
      {/if}
      <button class="header__btn-menu" on:click={toggleMenu} />
    </div>
  </Container>
</header>
<div class={isMenuOpen ? 'header__background header__background--active' : 'header__background'} />

<style lang="scss">
</style>
