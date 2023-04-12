<script>
  export let data = {}
  import Container from '$lib/components/Container.svelte'
</script>

<section class="imagewithtext">
  <Container>
    <div class="imagewithtext__wrapper">
      <div class="imagewithtext__image-wrapper">
        <img src={data.image.url} alt="" />
      </div>
      <div class="imagewithtext__inner">
        <div class="imagewithtext__text-wrapper">
          <h3 class="imagewithtext__title">{data.imageTextTitle}</h3>
          <p>{data.imageTextText}</p>
        </div>
        <a href={data.buttonLink} class="imagewithtext__btn">{data.buttonText}</a>
      </div>
    </div>
  </Container>
</section>

<style lang="scss">
  .imagewithtext {
    &__wrapper {
      display: flex;
    }

    &__image-wrapper {
      width: 50%;
      height: 270px;
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
      gap: 35px;
      justify-content: space-between;
    }

    &__btn {
      align-self: flex-end;
      color: white;
      font-size: 18px;
      text-transform: uppercase;
      padding: 10px 20px;
      background-color: #0077ff;
      width: 32%;
      text-align: center;
      border-radius: 5px;
    }
  }
</style>
