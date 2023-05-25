<script>
  import { beforeUpdate, onMount } from 'svelte'
  export let data = {}
  import Container from '$lib/components/Container.svelte'

  let page = ''

  beforeUpdate(() => {
    let pathname = window.location.pathname
    page = pathname.substring(pathname.lastIndexOf('/') + 1)
  })
</script>

{#if page == 'contact-us'}
  <section class="breadcrumps breadcrumps--contact-us">
    <Container>
      <div class="breadcrumps__wrapper">
        {#each data.breadcrumpsListCollection.items as item}
          <a href={item.link} class="breadcrumps__item">{item.title}</a>
        {/each}
      </div>
    </Container>
  </section>
{/if}
{#if page != 'contact-us'}
  <section class="breadcrumps">
    <Container>
      <div class="breadcrumps__wrapper">
        {#each data.breadcrumpsListCollection.items as item}
          <a href={item.link} class="breadcrumps__item">{item.title}</a>
        {/each}
      </div>
    </Container>
  </section>
{/if}

<style lang="scss">
  .breadcrumps {
    @media (min-width: 993px) {
      & {
        padding-top: 75px;
        padding-bottom: 75px;
      }
    }

    @media (max-width: 992px) {
      & {
        padding-top: 50px;
        padding-bottom: 50px;
      }
    }

    &--contact-us {
      background-color: #46506f;

      @media (min-width: 993px) {
        & {
          padding-bottom: 130px;
        }
      }
    }
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

    &__item:last-of-type {
      pointer-events: none;
    }
  }
</style>
