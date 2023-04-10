<section class="imagewithtext">
  <div class="imagewithtext__wrapper">
    <div class="imagewithtext__image-wrapper">
      <img src="Group 11.svg" alt="" />
    </div>
    <div class="imagewithtext__inner">
      <div class="imagewithtext__text-wrapper">
        <h3 class="imagewithtext__title">WHAT’S YOUR MOST WICKED BUSINESS CHALLENGE?</h3>
        <p>
          We go there. It might get uncomfortable. Growth often is. But using strategy and consumer
          research, we’ll find truths in places you wouldn’t expect. We’re up for it if you are.
        </p>
      </div>
      <a href="#" class="imagewithtext__btn">GET A PROPSAL</a>
    </div>
  </div>
</section>

<style lang="scss">
  .imagewithtext {
    &__wrapper {
      display: flex;
    }

    &__image-wrapper {
      width: 50%;
      justify-content: center;
      display: flex;
    }

    &__inner {
      display: flex;
      width: 50%;
      gap: 39px;
    }

    &__title {
      color: #07124a;
      font-size: 32px;
      font-weight: bold;
    }

    p {
      font-size: 18px;
      color: #07124a;
    }

    &__text-wrapper {
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__btn {
      align-self: flex-end;
      color: white;
      font-size: 18px;
      text-transform: uppercase;
      padding: 10px 20px;
      background-color: #0077ff;
      height: max-content;
      border-radius: 5px;
    }
  }
</style>
