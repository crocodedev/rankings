<svelte:head>
  <title>DevPage</title>
</svelte:head>

<form
  method="POST"
  class="contact-form__form"
  name="contact-form-form-netlify"
  style="display: none"
  data-netlify="true"
>
  <input type="hidden" name="form-name" value="contact-form-form-netlify" />
  <div class="contact-form__form-wrapper">
    <div class="contact-form__input-wrapper">
      <label for="name" class="contact-form__label">Your name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="ss"
        class="contact-form__input"
        required
      />
    </div>
    <div class="contact-form__input-wrapper">
      <label for="email" class="contact-form__label">Your email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="ss"
        class="contact-form__input"
        required
      />
    </div>
  </div>
  <div class="contact-form__form-wrapper contact-form__form-wrapper--column">
    <div class="contact-form__input-wrapper">
      <label for="message" class="contact-form__label">Tell us about your project</label>
      <textarea name="message" id="message" rows="5" placeholder="ss" class="contact-form__input" />
    </div>
    <div class="contact-form__button-wrapper">
      <input type="submit" value="ss" class="btn" />
      <p class="contact-form__form-policy">ss</p>
    </div>
    <span class="contact-form__succes" />
  </div>
</form>
