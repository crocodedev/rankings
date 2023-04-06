<div class="breadcrumps">
  <div class="breadcrumps__wrapper">
    <a href="#" class="breadcrumps__item">Homepage</a>
    <a href="#" class="breadcrumps__item">Services</a>
    <a href="#" class="breadcrumps__item">Project 1</a>
    <a href="#" class="breadcrumps__item">Project 2</a>
  </div>
</div>

<style lang="scss">
  .breadcrumps {
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
  }
</style>
