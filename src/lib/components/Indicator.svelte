<div class="indicator">
  <div class="indicator__wrapper">
    <span class="indicator__fact">Some fact about case</span>
    <span class="indicator__value">+34.5m</span>
  </div>
</div>

<!-- <div class="indicator">
  <div class="indicator__wrapper">
    <span class="indicator__fact">Some fact about case</span>
    <span class="indicator__value"> > 4 years</span>
  </div>
</div>
<div class="indicator">
  <div class="indicator__wrapper">
    <span class="indicator__fact">Some fact about case</span>
    <span class="indicator__value">+73%</span>
  </div>
</div>
<div class="indicator">
  <div class="indicator__wrapper">
    <span class="indicator__fact">Some fact about case</span>
    <span class="indicator__value">2.1k</span>
  </div>
</div> -->
<style lang="scss">
  .indicator {
    width: 220px;

    &__fact {
      font-size: 14px;
      color: #46506f;
    }
    &__wrapper {
      background-color: rgba(255, 0, 0, 0.205);
      padding-left: 20px;
      padding-bottom: 20px;
      height: 270px;
      padding-top: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__value {
      color: #07124a;
      font-size: 72px;
      letter-spacing: -4.32px;
      line-height: 48px;
    }
  }
</style>
