<header class="header">
  <div class="container">
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
  </div>
</header>

<style global lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');

  * {
    font-family: 'Lexend', sans-serif;
  }

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

    &__logotype {
      color: #07124a;
      font-size: 24px;
      font-weight: 600;
    }
  }

  .container {
    max-width: 1366px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 50px;
    padding-right: 50px;
  }
</style>
