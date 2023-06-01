import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component, m as missing_component } from "../../../chunks/index3.js";
import { S as Sections } from "../../../chunks/style.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'destyle.css/destyle.css';",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sections;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  sections = data.sectionsCollection.items;
  return `${$$result.head += `<!-- HEAD_svelte-1s0ceo1_START -->${$$result.title = `<title>${escape(data.name)}</title>`, ""}${data.seo ? `${data.seo.description ? `<meta name="${"description"}"${add_attribute("content", data.seo.description, 0)}>` : ``}
    ${data.seo.description ? `<meta property="${"og:image:url"}"${add_attribute("content", data.seo.image.url, 0)}>` : ``}
    ${data.seo.description ? `<meta property="${"og:image:width"}"${add_attribute("content", data.seo.image.width, 0)}>` : ``}
    ${data.seo.description ? `<meta property="${"og:image:height"}"${add_attribute("content", data.seo.image.height, 0)}>` : ``}
    ${data.seo.description ? `<meta property="${"og:title"}"${add_attribute("content", data.seo.title, 0)}>` : ``}
    ${data.seo.description ? `<meta property="${"og:description"}"${add_attribute("content", data.seo.description, 0)}>` : ``}
    ${data.seo.description ? `<meta property="${"og:type"}"${add_attribute("content", data.seo.ogype, 0)}>` : ``}
    ${data.seo.description ? `<meta name="${"keywords"}"${add_attribute("content", data.seo.keywords, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1s0ceo1_END -->`, ""}

${each(sections.sort((a, b) => a.position - b.position), (section) => {
    return `${validate_component(Sections[section?.component] || missing_component, "svelte:component").$$render($$result, { data: section }, {}, {})}`;
  })}

<div><input type="${"hidden"}" name="${"form-name"}" value="${"contact-form"}"></div>`;
});
export {
  Page as default
};
