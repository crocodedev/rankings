<script>
  import Container from '$lib/components/container.svelte'
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<header class="header">
  <Container>
    <div class="header__wrapper">
      <div class="header__logotype">Rankings</div>
      <nav class="header__nav-list">
        <a href="#" class="header__nav-item">Services</a>
        <a href="#" class="header__nav-item">Cases</a>
        <a href="#" class="header__nav-item">Blog</a>
        <a href="#" class="header__nav-item">About us</a>
        <a href="#" class="header__nav-item">Contact us</a>
      </nav>
    </div>
  </Container>
</header>

<style lang="scss">
  .header {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 35px 0;
    }

    &__nav-list {
      display: flex;
      gap: 60px;

      a {
        color: #07124a;
      }
    }

    &__nav-item:hover {
      font-weight: 600;
    }

    &__logotype {
      color: #07124a;
      font-size: 24px;
      font-weight: 600;
    }
  }
</style>
