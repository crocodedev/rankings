import { c as create_ssr_component, b as subscribe, e as escape } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.error.message)}</h1>

<p>Sorry, something went wrong</p>`;
});
export {
  Error as default
};
