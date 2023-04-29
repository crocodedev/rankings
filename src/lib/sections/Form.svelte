<script>
  export let data = {}

  import Container from '$lib/components/Container.svelte'
</script>

<section class="contact-form">
  <Container>
    <div class="contact-form__wrapper">
      <div class="contact-form__inner">
        <div class="contact-form__title-wrapper">
          <h1 class="h1 contact-form__title">{data.formTitle}</h1>
          <a href="mailto:{data.workingEmail}" class="contact-form__email">{data.workingEmail}</a>
        </div>
        <nav class="contact-form__nav">
          {#each data.formNavigationCollection.items as items}
            <a href={items.link} class="contact-form__nav-item"> {items.title} </a>
          {/each}
        </nav>
      </div>
      <div class="contact-form__inner">
        <form action="submit" class="contact-form__form">
          <div class="contact-form__form-wrapper">
            <div class="contact-form__input-wrapper">
              <label for="name" class="contact-form__label">Your name</label>
              <input
                type="text"
                id="name"
                placeholder={data.inputName}
                class="contact-form__input"
                required
              />
            </div>
            <div class="contact-form__input-wrapper">
              <label for="email" class="contact-form__label">Your email</label>
              <input
                type="text"
                id="email"
                placeholder={data.inputEmail}
                class="contact-form__input"
                required
              />
            </div>
          </div>
          <div class="contact-form__form-wrapper contact-form__form-wrapper--column">
            <div class="contact-form__input-wrapper">
              <label for="message" class="contact-form__label">Tell us about your project</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder={data.inputMessage}
                class="contact-form__input"
              />
            </div>
            <div class="contact-form__button-wrapper">
              <input type="submit" value={data.buttonText} class="btn" />
              <p class="contact-form__form-policy">{data.policyText}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Container>
</section>

<style lang="scss">
  .contact-form {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      border-radius: 10px;
      background-color: #46506f;
    }

    @media (min-width: 993px) {
      &__wrapper {
        padding: 75px 55px 87px 75px;
      }
    }

    @media (max-width: 992px) {
      &__wrapper {
        flex-direction: column;
        gap: 20px;
        padding: 20px;
      }
    }

    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (min-width: 993px) {
      &__inner {
        width: 45%;
      }
    }

    &__title {
      color: var(--primary-blue);
    }

    &__title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    @media (min-width: 993px) {
      &__title-wrapper {
        width: 75%;
      }
    }

    &__nav {
      display: flex;
      justify-content: space-between;
    }

    @media (max-width: 992px) {
      &__nav {
        display: none;
      }
    }

    &__nav-item {
      color: white;
    }

    &__email {
      color: #ffffff;
    }

    @media (min-width: 993px) {
      &__email {
        font-size: 24px;
      }
    }

    @media (max-width: 992px) {
      &__email {
        font-size: 18px;
      }
    }

    &__form {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 992px) {
      &__form {
        gap: 40px;
      }
    }

    @media (min-width: 993px) {
      &__form {
        gap: 75px;
      }
    }

    &__form-wrapper {
      display: flex;
      gap: 55px;

      &--column {
        flex-direction: column;
      }
    }

    @media (min-width: 996px) and (max-width: 1100px) {
      &__form-wrapper {
        flex-direction: column;
        gap: 40px;
        justify-content: space-between;
      }
    }

    @media (min-width: 541px) and (max-width: 996px) {
      &__form-wrapper {
        gap: 40px;
        justify-content: space-between;
      }
    }

    @media (max-width: 540px) {
      &__form-wrapper {
        flex-direction: column;
        gap: 40px;
      }
    }

    &__button-wrapper {
      display: flex;
    }

    @media (max-width: 1280px) {
      &__button-wrapper {
        flex-wrap: wrap;
      }
    }

    @media (max-width: 992px) {
      &__button-wrapper {
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }
    }

    @media (min-width: 993px) {
      &__button-wrapper {
        gap: 25px;
      }
    }

    &__form-policy {
      color: #bfc8d6;
    }

    @media (min-width: 993px) {
      &__form-policy {
        font-size: 14px;
      }
    }

    @media (max-width: 992px) {
      &__form-policy {
        font-size: 10px;
      }
    }

    &__label {
      color: white;
    }

    @media (min-width: 993px) {
      &__label {
        font-size: 32px;
      }
    }

    @media (max-width: 992px) {
      &__label {
        font-size: 24px;
      }
    }

    &__input {
      resize: none;
      outline: none;
      width: 100%;
      color: white;
      border-bottom: 1px solid #0077ff;
      padding: 20px 0;
    }

    &__input::placeholder {
      color: #bfc8d6;
    }
  }
</style>
