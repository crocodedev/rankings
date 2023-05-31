<script>
  import Container from '$lib/components/Container.svelte'
  import { onMount, beforeUpdate, afterUpdate } from 'svelte'
  import { page } from '$app/stores'

  let isMenuOpen = false

  function toggleMenu() {
    isMenuOpen = !isMenuOpen
  }

  let pageName = ''
  let screenWidth
  let currentPage = ''

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

  afterUpdate(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
  })

  beforeUpdate(() => {
    const previousPage = currentPage
    currentPage = page.url
    const pathname = window.location.pathname
    const lastIndex = pathname.lastIndexOf('/')
    if (lastIndex !== -1) {
      pageName = pathname.substring(lastIndex + 1)
    } else {
      pageName = pathname
    }
    if (previousPage && currentPage && previousPage !== currentPage) {
      isMenuOpen = false
    }
  })

  export let data = {}
</script>

{#if pageName == 'contact-us'}
  <header class="header" bind:this={header}>
    <Container>
      <div class="header__wrapper header__wrapper--contact">
        <a
          href="/"
          class={isMenuOpen ? 'header__logotype header__logotype--active' : 'header__logotype'}
        >
          <span class="header__logotype-icon-wrapper">
            <img
              src="../logo.svg"
              alt="logotype-icon"
              class="header__logotype-icon header__logotype-icon--contact"
            />
          </span>
          Rankings
        </a>
        {#if screenWidth && screenWidth >= 993}
          <nav
            class={isMenuOpen ? 'header__nav-list header__nav-list--active' : 'header__nav-list'}
            bind
          >
            <span class="header__cross" on:click={toggleMenu} />
            <div class="header__items">
              {#each data.navigationCollection.items as item, i}
                <div class="header__nav-item" bind:this={navItem[i]}>
                  <a href={item.link}>{item.title} </a>
                  {#if item.subItemsCollection.items && Object.keys(item.subItemsCollection.items).length != 0}
                    <ul class="header__nav-item-stack">
                      {#each item.subItemsCollection.items as subitem}
                        <li class="header__nav-subitem header__nav-subitem--contact">
                          <a href={subitem.link}>{subitem.title}</a>
                        </li>
                      {/each}
                    </ul>
                  {/if}
                </div>
              {/each}
            </div>
            {#if screenWidth && screenWidth <= 992}
              <div class="header__mobile">
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
          </nav>
        {/if}

        <button class="header__btn-menu" on:click={toggleMenu}>
          <span class="header__btn-menu-area header__btn-menu--contact" />
        </button>
      </div>
    </Container>
  </header>
  {#if screenWidth && screenWidth <= 992}
    <nav class={isMenuOpen ? 'header__nav-list header__nav-list--active' : 'header__nav-list'} bind>
      <span class="header__cross" on:click={toggleMenu} />
      <div class="header__items">
        {#each data.navigationCollection.items as item, i}
          <div class="header__nav-item" bind:this={navItem[i]}>
            <a href={item.link}>{item.title} </a>
            {#if item.subItemsCollection.items && Object.keys(item.subItemsCollection.items).length != 0}
              <ul class="header__nav-item-stack">
                {#each item.subItemsCollection.items as subitem}
                  <li class="header__nav-subitem header__nav-subitem--contact">
                    <a href={subitem.link}>{subitem.title}</a>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>
        {/each}
      </div>
      {#if screenWidth && screenWidth <= 992}
        <div class="header__mobile">
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
    </nav>
  {/if}
  <div
    class={isMenuOpen ? 'header__background header__background--active' : 'header__background'}
    on:click={toggleMenu}
  />
{/if}
{#if pageName != 'contact-us'}
  <header class="header" bind:this={header}>
    <Container>
      <div class="header__wrapper">
        <a
          href="/"
          class={isMenuOpen ? 'header__logotype header__logotype--active' : 'header__logotype'}
        >
          <span class="header__logotype-icon-wrapper">
            <img src="../logo.svg" alt="logotype-icon" class="header__logotype-icon" />
          </span>
          Rankings
        </a>
        {#if screenWidth && screenWidth >= 993}
          <nav
            class={isMenuOpen ? 'header__nav-list header__nav-list--active' : 'header__nav-list'}
            bind
          >
            <span class="header__cross" on:click={toggleMenu} />
            <div class="header__items">
              {#each data.navigationCollection.items as item, i}
                <div class="header__nav-item" bind:this={navItem[i]}>
                  <a href={item.link}>{item.title} </a>
                  {#if item.subItemsCollection.items && Object.keys(item.subItemsCollection.items).length != 0}
                    <ul class="header__nav-item-stack">
                      {#each item.subItemsCollection.items as subitem}
                        <li class="header__nav-subitem">
                          <a href={subitem.link}>{subitem.title}</a>
                        </li>
                      {/each}
                    </ul>
                  {/if}
                </div>
              {/each}
            </div>
            {#if screenWidth && screenWidth <= 992}
              <div class="header__mobile">
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
          </nav>
        {/if}
        <button class="header__btn-menu" on:click={toggleMenu}>
          <span class="header__btn-menu-area" />
        </button>
      </div>
    </Container>
  </header>
  {#if screenWidth && screenWidth <= 993}
    <nav class={isMenuOpen ? 'header__nav-list header__nav-list--active' : 'header__nav-list'} bind>
      <span class="header__cross" on:click={toggleMenu} />
      <div class="header__items">
        {#each data.navigationCollection.items as item, i}
          <div class="header__nav-item" bind:this={navItem[i]}>
            <a href={item.link}>{item.title} </a>
            {#if item.subItemsCollection.items && Object.keys(item.subItemsCollection.items).length != 0}
              <ul class="header__nav-item-stack">
                {#each item.subItemsCollection.items as subitem}
                  <li class="header__nav-subitem">
                    <a href={subitem.link}>{subitem.title}</a>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>
        {/each}
      </div>
      {#if screenWidth && screenWidth <= 992}
        <div class="header__mobile">
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
    </nav>
  {/if}
  <div
    class={isMenuOpen ? 'header__background header__background--active' : 'header__background'}
    on:click={toggleMenu}
  />
{/if}

<style lang="scss">
</style>
