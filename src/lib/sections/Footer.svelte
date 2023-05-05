<script>
  import Container from '$lib/components/Container.svelte'
  export let data = {}

  import { beforeUpdate, onMount } from 'svelte'

  let screenWidth

  onMount(() => {
    screenWidth = window.innerWidth
    let pathname = window.location.pathname
    page = pathname.substring(pathname.lastIndexOf('/') + 1)
    window.addEventListener('resize', () => {
      screenWidth = window.innerWidth
    })
  })

  let page = ''

  beforeUpdate(() => {
    let pathname = window.location.pathname
    page = pathname.substring(pathname.lastIndexOf('/') + 1)
  })
</script>

{#if page == 'contact-us'}
  <footer class="footer footer--contact">
    <Container>
      <div class="footer__wrapper footer__wrapper--contact">
        <div class="footer__inner">
          <p class="footer__rights-text">{data.footerRights}</p>
          {#if screenWidth && screenWidth > 992}
            <div class="footer__links-wrapper">
              {#each data.socialLinksCollection.items as item}
                <a href="#" class="footer__link">
                  <img src={item.socialIcon.url} alt="" class="footer__link-icon" />
                </a>
              {/each}
            </div>
          {/if}
        </div>

        {#if screenWidth && screenWidth > 992}
          <div class="footer__terms-wrapper">
            {#each data.footerTermsPolicyCollection.items as item}
              <a href={item.link} class="footer__terms">{item.title}</a>
            {/each}
          </div>
        {/if}
      </div>
    </Container>
  </footer>
{/if}

{#if page != 'contact-us'}
  <footer class="footer">
    <Container>
      <div class="footer__wrapper">
        <div class="footer__inner">
          <p class="footer__rights-text">{data.footerRights}</p>
          {#if screenWidth && screenWidth > 992}
            <div class="footer__links-wrapper">
              {#each data.socialLinksCollection.items as item}
                <a href="#" class="footer__link">
                  <img src={item.socialIcon.url} alt="" class="footer__link-icon" />
                </a>
              {/each}
            </div>
          {/if}
        </div>

        {#if screenWidth && screenWidth > 992}
          <div class="footer__terms-wrapper">
            {#each data.footerTermsPolicyCollection.items as item}
              <a href={item.link} class="footer__terms">{item.title}</a>
            {/each}
          </div>
        {/if}
      </div>
    </Container>
  </footer>
{/if}

<style lang="scss">
  footer.footer--contact {
    background-color: #46506f;
  }

  .footer__wrapper--contact {
    filter: brightness(4000%);
  }
  footer.footer * {
    color: #07124a;

    .footer__inner {
      display: flex;
      gap: 100px;
    }

    .footer__wrapper {
      position: relative;
      width: 100%;
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
    }

    .footer__links-wrapper {
      display: flex;
      gap: 25px;
    }

    .footer__terms-wrapper {
      display: flex;
      gap: 50px;
    }

    .footer__rights-text {
      text-align: center;
    }

    @media (min-width: 993px) and (max-width: 1100px) {
      .footer__inner {
        gap: 20px;
      }

      .footer__terms-wrapper {
        gap: 20px;
      }
    }
  }
</style>
