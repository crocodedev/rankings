<div>
  <slot />
</div>

<style>
  div {
    max-width: 1366px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 993px) {
    div {
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  @media (max-width: 992px) {
    div {
      padding-left: 25px;
      padding-right: 25px;
    }
  }
</style>
