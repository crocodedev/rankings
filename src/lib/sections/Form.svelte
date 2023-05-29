<script>
  export let data = {}

  import Container from '$lib/components/Container.svelte'
  import { beforeUpdate } from 'svelte'

  let page = ''

  beforeUpdate(() => {
    let pathname = window.location.pathname
    page = pathname.substring(pathname.lastIndexOf('/') + 1)
  })

  let isSubmitting = false

  const handleSubmit = (e) => {
    e.preventDefault() // Отменяем отправку формы по умолчанию

    let myForm = document.querySelector('.contact-form__form')
    let formData = new FormData(myForm)
    let isSubmitting = true // Добавлено объявление переменной

    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Form successfully submitted')
          isSubmitting = false
          myForm.reset()
        } else {
          throw new Error('Form submission failed')
        }
      })
      .catch((error) => {
        alert(error)
        isSubmitting = false
      })
  }

  console.log('done')
</script>

<!-- {#if page == 'contact-us'}
  <section class="contact-form contact-form--contact">
    <Container>
      <div class="contact-form__wrapper contact-form__wrapper--contact">
        <div class="contact-form__inner">
          <div class="contact-form__title-wrapper">
            <h1 class="h1 contact-form__title">Contact <span class="highlight">us</span></h1>
          </div>
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
                      {#if social.socialIcon != null}
                        <a href={social.link}><img src={social.socialIcon.url} alt="" /> </a>
                      {/if}
                      {#if social.socialIcon == null}
                        <a href={social.link} class="contact-form__social-map">
                          <span class="contact-form__social-text-map">{social.title}</span>
                          <span class="contact-form__social-arrow"
                            ><img src="../map-arrow.svg" alt="" /></span
                          >
                        </a>
                      {/if}
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
          <h2 class="h2 contact-form__title">Start a <br /> conversation</h2>
          <div class="contact-form__arrow">
            <img src="../arrow-static.svg" alt="arrow" class="contact-form__arrow-img" />
          </div>
        </div>
      </div>
      <div class="contact-form__wrapper contact-form__wrapper--end contact-form__wrapper--contact">
        <div class="contact-form__inner contact-form__inner--grid">
          <form
            method="POST"
            netlify-honeypot="bot-field"
            class="contact-form__form"
            name="contact-form"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <div class="contact-form__form-wrapper">
              <div class="contact-form__input-wrapper">
                <label for="name" class="contact-form__label">Your name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="{data.inputName}*"
                  class="contact-form__input"
                  required
                />
              </div>
              <div class="contact-form__input-wrapper">
                <label for="email" class="contact-form__label">Your email</label>
                <input
                  type="text"
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
{/if} -->
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
            method="POST"
            netlify-honeypot="bot-field"
            class="contact-form__form"
            name="contact-form"
            onSubmit={handleSubmit}
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <div class="contact-form__form-wrapper">
              <div class="contact-form__input-wrapper">
                <label for="name" class="contact-form__label">Your name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="{data.inputName}*"
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
              <span class="contact-form__succes" />
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
    &__succes {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      border: 2px solid #0077ff;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: succes 1.5s ease-in-out;

      &::before {
        position: absolute;
        width: 18px;
        height: 10px;
        content: '';
        transform: rotate(130deg) translateX(-2px) translateY(1px);
        border-top: 2px solid #0077ff;
        border-right: 2px solid #0077ff;
      }
    }

    @keyframes succes {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
    @media (min-width: 993px) {
      &:not(.contact-form--contact) {
        padding-top: 75px;
      }
    }

    @media (max-width: 993px) {
      &:not(.contact-form--contact) {
        padding-top: 50px;
      }
    }

    &__inscription {
      display: flex;
      flex-direction: column;

      @media (min-width: 993px) {
        & {
          align-items: center;
          justify-self: center;
          padding-left: 105px;
          gap: 58px;
        }
      }

      @media (max-width: 992px) {
        & {
          align-items: flex-end;
          gap: 25px;
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

    .contact-form__arrow-img {
      @media (max-width: 992px) {
        & {
          width: 100px;
        }
      }
    }

    @media (max-width: 992px) {
      .contact-form__arrow {
        transform: rotate(180deg);
      }
    }

    @media (min-width: 993px) {
      .contact-form__arrow {
        align-self: baseline;
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

    &__social-map {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    &__social-text-map {
      position: relative;
      text-decoration: underline;
      color: #97a2b6;

      @media (max-width: 768px) {
        & {
          font-size: 12px;
        }
      }

      @media (min-width: 769px) {
        & {
          font-size: 14px;
        }
      }
    }

    &__social-arrow {
      display: flex;

      @media (min-width: 769px) {
        & {
          filter: grayscale(1) brightness(37.5);
          opacity: 0.5;
        }
      }
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
      display: grid;

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
        justify-items: start;
        grid-template-columns: 0.85fr 1fr;
        gap: 70px;
        padding: 87px 55px 87px 75px;
      }

      &__wrapper--contact {
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 0 0 0;
      }

      &__wrapper--contact:last-of-type {
        padding-top: 30px;
      }

      &__wrapper--arrow {
        padding: 0;
        gap: 0;
      }
    }

    @media (max-width: 992px) {
      &__wrapper {
        grid-template-columns: 1fr;
        flex-direction: column;
        gap: 40px;
        padding: 20px;
      }

      &__wrapper--contact {
        padding: 20px 0 0 0;
      }

      &__wrapper--arrow {
        padding-top: 80px;
        padding-bottom: 34px;
        padding-left: 0;

        padding-right: 0;
      }
    }

    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &--contact {
        gap: 55px;
      }

      &--contact .contact-form__social-item:first-of-type .contact-form__social-image-wrapper {
        transform: translateX(-3px);
      }
    }

    @media (min-width: 993px) {
      .contact-form__inner {
        grid-column-start: auto;
      }
      .contact-form__wrapper--contact .contact-form__inner--grid {
        grid-column-start: 2;
      }
      .contact-form__wrapper--contact .contact-form__inner {
        width: 100%;
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
        align-items: flex-end;
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

    &__input-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      min-width: 45%;
    }

    &__input {
      resize: none;
      outline: none;
      width: 100%;
      color: white;
      border-bottom: 1px solid #0077ff;
      padding-top: 10px;
    }

    @media (max-width: 768px) {
      &__input {
        height: 60px;
        padding-bottom: 10px;
      }
    }

    @media (min-width: 769px) {
      &__input {
        padding-bottom: 20px;
      }
    }

    &__input::placeholder {
      color: #bfc8d6;
    }
  }
</style>
