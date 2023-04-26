<script>
  import Container from '$lib/components/Container.svelte'
  export let data = {}
</script>

<footer class="footer">
  <Container>
    <div class="footer__wrapper">
      <div class="footer__inner">
        <p class="footer__rights-text">{data.footerRights}</p>
        <div class="footer__links-wrapper">
          {#each data.socialLinksCollection.items as item}
            <a href={item.link} class="footer__link">
              <img src={item.socialIcon.url} alt="" class="footer__link-icon" />
            </a>
          {/each}
        </div>
      </div>

      <div class="footer__terms-wrapper">
        {#each data.footerTermsPolicyCollection.items as item}
          <a href={item.link} class="footer__terms">{item.title}</a>
        {/each}
      </div>
    </div>
  </Container>
</footer>

<style lang="scss">
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
  }
</style>
