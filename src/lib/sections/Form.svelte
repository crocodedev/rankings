<script>
  export let data = {}

  import Container from '$lib/components/Container.svelte'
  import { beforeUpdate } from 'svelte'

  let page = ''

  beforeUpdate(() => {
    let pathname = window.location.pathname
    page = pathname.substring(pathname.lastIndexOf('/') + 1)
  })
</script>

{#if page == 'contact-us'}
  <section class="contact-form contact-form--contact">
    <Container>
      <div class="contact-form__wrapper contact-form__wrapper--contact">
        <div class="contact-form__inner">
          <div class="contact-form__title-wrapper">
            <h1 class="h1 contact-form__title">Contact <span class="highlight">us</span></h1>
          </div>
          <nav class="contact-form__nav">
            {#each data.formNavigationCollection.items as items}
              <a href={items.link} class="contact-form__nav-item"> {items.title} </a>
            {/each}
          </nav>
        </div>
        <div class="contact-form__inner contact-form__inner--contact">
          {#each data.contactItemsCollection.items as item}
            <div class="contact-form__social-item">
              <span class="contact-form__social-image-wrapper">
                <img src={item.icon.url} alt="" class="contact-form__social-image" />
              </span>
              <div class="contact-form__social-text-wrapper">
                <h2 class="h2 contact-form__social-title">{item.title}</h2>
                {#if item.text != null}
                  <p class="contact-form__social-text">
                    {#each item.text.replace('<br>', '<br>').split('<br>') as line}
                      {line}<br />
                    {/each}
                  </p>
                {/if}

                {#if item.socialItemsCollection.items.length > 0}
                  <div class="contact-form__social-icons">
                    {#each item.socialItemsCollection.items as social}
                      <a href={social.link}><img src={social.socialIcon.url} alt="" /></a>
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      </div>
      <div class="contact-form__wrapper contact-form__wrapper--arrow">
        <div class="contact-form__inscription">
          <h2 class="h2 contact-form__title">Start a <br /> converstation</h2>
          <div class="contact-form__arrow">
            <div class="contact-form__arrow-1" />
            <div class="contact-form__arrow-2" />
            <div class="contact-form__arrow-3" />
          </div>
        </div>
      </div>
      <div class="contact-form__wrapper contact-form__wrapper--end contact-form__wrapper--contact">
        <div class="contact-form__inner">
          <form
            action="../../functions/contact-form.js"
            name="contact-form"
            class="contact-form__form"
            method="post"
            netlify
          >
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
{/if}
{#if page != 'contact-us'}
  <section class="contact-form">
    <Container>
      <div class="contact-form__wrapper">
        <div class="contact-form__inner">
          <div class="contact-form__title-wrapper">
            <h1 class="h1 contact-form__title">Contact <span class="highlight">us</span></h1>
            <a href="mailto:{data.workingEmail}" class="contact-form__email">{data.workingEmail}</a>
          </div>
          <nav class="contact-form__nav">
            {#each data.formNavigationCollection.items as items}
              <a href={items.link} class="contact-form__nav-item"> {items.title} </a>
            {/each}
          </nav>
        </div>
        <div class="contact-form__inner">
          <form
            action="../../functions/contact-form.js"
            class="contact-form__form"
            name="contact-form"
            method="post"
            netlify
          >
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
                  type="email"
                  id="email"
                  placeholder="{data.inputEmail}*"
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
{/if}

<style lang="scss">
  .highlight {
    color: #0077ff;
  }
  .contact-form {
    &__inscription {
      display: flex;
      flex-direction: column;
      gap: 58px;

      @media (min-width: 993px) {
        & {
          align-items: center;
        }
      }

      @media (max-width: 992px) {
        & {
          align-items: flex-end;
        }
      }
    }

    .contact-form__title {
      color: white;
    }
    .contact-form__arrow {
      display: flex;
      position: relative;
      width: max-content;
    }

    @media (max-width: 992px) {
      .contact-form__arrow {
        transform: rotate(180deg);
      }
    }

    .contact-form__arrow-1 {
      background-color: #97a2b6;

      @media (min-width: 993px) {
        width: 85px;
        height: 22px;
      }

      @media (max-width: 992px) {
        width: 42px;
        height: 10px;
      }
    }

    .contact-form__arrow-2 {
      position: absolute;
      width: 31px;
      transform: rotate(45deg);
      right: 0;
      top: -9px;
      height: 41px;
      transform: matrix(1, 0, -1, 1, 0, 0);

      @media (min-width: 993px) {
        &::before {
          position: absolute;
          content: '';
          top: 20.5px;
          width: 100%;
          height: 100%;
          background-color: #97a2b6;
          left: 16px;
        }

        &::after {
          position: absolute;
          content: '';
          top: -20.5px;
          width: 100%;
          height: 100%;
          background-color: #97a2b6;
          transform: matrix(1, 0, 2, 1, 0, 0);
          right: 25px;
        }
      }
      @media (max-width: 992px) {
        &::before {
          position: absolute;
          content: '';
          top: 13.5px;
          width: 50%;
          height: 50%;
          background-color: #97a2b6;
          left: 16px;
        }

        &::after {
          position: absolute;
          content: '';
          top: -7.5px;
          width: 50%;
          height: 50%;
          background-color: #97a2b6;
          transform: matrix(1, 0, 2, 1, 0, 0);
          right: 21px;
        }
      }
    }

    .contact-form__arrow-3 {
      position: absolute;
      width: 31px;
      transform: rotate(45deg);
      top: -9px;
      height: 41px;
      transform: matrix(1, 0, -1, 1, 0, 0);

      @media (min-width: 993px) {
        & {
          left: calc(100% + 31px);
        }
        &::before {
          position: absolute;
          content: '';
          top: 20.5px;
          width: 100%;
          height: 100%;
          background-color: #97a2b6;
          left: 16px;
        }

        &::after {
          position: absolute;
          content: '';
          top: -20.5px;
          width: 100%;
          height: 100%;
          background-color: #97a2b6;
          transform: matrix(1, 0, 2, 1, 0, 0);
          right: 25px;
        }
      }
      @media (max-width: 992px) {
        & {
          left: calc(100% + 10px);
        }
        &::before {
          position: absolute;
          content: '';
          top: 13.5px;
          width: 50%;
          height: 50%;
          background-color: #97a2b6;
          left: 13px;
        }

        &::after {
          position: absolute;
          content: '';
          top: -7.5px;
          width: 50%;
          height: 50%;
          background-color: #97a2b6;
          transform: matrix(1, 0, 2, 1, 0, 0);
          right: 25px;
        }
      }
    }

    &__social-item {
      display: flex;
      gap: 50px;
    }

    &__social-text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &__social-image {
      width: 32px;
      height: 32px;
    }

    &__social-icons {
      display: flex;
      align-items: center;
      opacity: 0.5;
      gap: 15px;
    }

    &__social-title {
      color: white;
    }

    &__social-text {
      color: #bfc8d6;

      @media (max-width: 768px) {
        & {
          font-size: 14px;
        }
      }

      @media (min-width: 769px) {
        & {
          font-size: 18px;
        }
      }
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
      border-radius: 10px;
      background-color: #46506f;
    }

    &__wrapper--end {
      justify-content: end;
    }

    &--contact {
      background-color: #46506f;
    }

    @media (min-width: 993px) {
      &__wrapper {
        padding: 75px 55px 87px 75px;
      }

      &__wrapper--contact {
        padding: 75px 0 0 0;
      }

      &__wrapper--contact:last-of-type {
        padding-top: 30px;
      }

      &__wrapper--arrow {
        padding: 0;
      }
    }

    @media (max-width: 992px) {
      &__wrapper {
        flex-direction: column;
        gap: 40px;
        padding: 20px;
      }

      &__wrapper--contact {
        padding: 20px 20px 0 20px;
      }

      &__wrapper--arrow {
        padding-top: 80px;
        padding-bottom: 34px;
      }
    }

    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &--contact {
        gap: 55px;
      }
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

    &__nav-item:hover {
      text-shadow: 0 0 1px white;
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

    @media (max-width: 768px) {
      &__input {
        height: 60px;
      }
    }

    &__input::placeholder {
      color: #bfc8d6;
    }
  }
</style>
