import { c as create_ssr_component } from "../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-mx1lqp_START -->${$$result.title = `<title>DevPage</title>`, ""}<!-- HEAD_svelte-mx1lqp_END -->`, ""}

<form method="${"POST"}" class="${"contact-form__form"}" name="${"contact-form-form-netlify"}" data-netlify="${"true"}" netlify-honeypot="${"infoo"}" style="${"opacity:0; height:0; overflow: hidden; width:0; pointer-events: none;"}"><input type="${"hidden"}" name="${"form-name"}" value="${"contact-form-form-netlify"}">
  <div class="${"contact-form__form-wrapper"}"><div class="${"contact-form__input-wrapper"}"><label for="${"name"}" class="${"contact-form__label"}">Your name</label>
      <input type="${"text"}" id="${"name"}" name="${"name"}" placeholder="${"name*"}" class="${"contact-form__input"}" required></div>
    <div class="${"contact-form__input-wrapper"}"><label for="${"email"}" class="${"contact-form__label"}">Your email</label>
      <input type="${"text"}" id="${"email"}" name="${"email"}" placeholder="${"email*"}" class="${"contact-form__input"}" required></div></div>
  <div class="${"contact-form__form-wrapper contact-form__form-wrapper--column"}"><div class="${"contact-form__input-wrapper"}"><label for="${"message"}" class="${"contact-form__label"}">Tell us about your project</label>
      <textarea name="${"message"}" id="${"message"}" rows="${"5"}" placeholder="${"ss"}" class="${"contact-form__input"}"></textarea></div>
    <div class="${"contact-form__button-wrapper"}"><input type="${"submit"}" value="${"ss"}" class="${"btn"}">
      <p class="${"contact-form__form-policy"}">ss</p></div></div></form>`;
});
export {
  Page as default
};
