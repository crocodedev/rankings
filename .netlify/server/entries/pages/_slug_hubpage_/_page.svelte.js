import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, f as each, v as validate_component, m as missing_component } from "../../../chunks/index3.js";
import { S as Sections, H as Hubpage } from "../../../chunks/style.js";
import { p as page } from "../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'destyle.css/destyle.css';.card__image-icon{position:absolute;top:20px;right:20px}.cases__title{padding-bottom:150px}.cases__tags{display:flex;flex-wrap:wrap;gap:10px}@media(max-width: 992px){.cases__tags{padding-bottom:20px}}@media(min-width: 993px){.cases__tags{padding-bottom:50px}}.cases__tag{background-color:white;border:1px solid #07124a;border-radius:5px;color:#07124a;padding:5px 15px;cursor:pointer}.cases__tag--active{color:white;background-color:#07124a}@media(max-width: 992px){.cases__tag{font-size:14px}}.cases__items{display:flex;flex-wrap:wrap;border-top:2px solid #0077ff}@media(max-width: 768px){.cases__items{row-gap:75px}}@media(min-width: 769px) and (max-width: 992px){.cases__items{column-gap:30px;row-gap:100px}}@media(min-width: 993px){.cases__items{column-gap:50px;row-gap:150px}}.cases__item{display:flex;flex-direction:column;gap:10px}@media(min-width: 769px){.cases__item{width:47%}}@media(max-width: 768px){.cases__item{width:100%}}.cases__item-image-wrapper{position:relative;width:100%;border-radius:10px;overflow:hidden;transition:0.3s ease-in-out}@media(min-width: 993px){.cases__item-image-wrapper{height:500px}}@media(min-width: 769px) and (max-width: 992px){.cases__item-image-wrapper{height:325px}}@media(max-width: 768px){.cases__item-image-wrapper{height:267px}}.cases__item-image{width:100%;height:100%;object-fit:cover}.cases__text-wrapper{display:flex;flex-direction:column;gap:10px}.cases__item-name{font-size:18px;color:#07124a;font-weight:bold}.cases__item-category{font-size:18px;color:#97a2b6}.cases__item-tags{display:flex;flex-wrap:wrap;gap:10px}.cases__item-tag{font-size:14px;border-radius:5px;border:1px solid #07124a;color:#07124a;padding:5px 15px}@media(min-width: 993px){.cases__item:is(.FullWidth){width:100%}.cases__item:is(.HalfHeight){min-height:500px}.cases__item:is(.HalfHeight) .cases__item-image-wrapper{height:250px}.cases__item:is(.FullWidth):hover .cases__item-image-wrapper{width:48%}.cases__item:is(.HalfHeight):hover .cases__item-image-wrapper{height:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTags;
  let sections;
  let clearActive;
  let handleTogleActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  activeTags = [];
  sections = [
    ...data.pageData.sectionsCollection.items,
    {
      cards: data.cards,
      section: `Hubpage`,
      position: 2,
      title: data.pageData.pageName,
      tags: [...new Set(data.cards.map((el) => el.tagList).filter((el) => el).flat())]
    }
  ].sort((a, b) => a.position - b.position);
  clearActive = () => activeTags = [];
  handleTogleActive = (tag) => {
    activeTags = activeTags.includes(tag) ? activeTags.filter((el) => el !== tag) : [...activeTags, tag];
  };
  $page.url && clearActive();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1bkp9xw_START -->${$$result.title = `<title>${escape(data.pageData.pageName)}</title>`, ""}${data.pageData.seo ? `${data.pageData.seo.description ? `<meta name="${"description"}"${add_attribute("content", data.pageData.seo.description, 0)}>` : ``}
    ${data.pageData.seo.description ? `<meta property="${"og:image:url"}"${add_attribute("content", data.pageData.seo.image.url, 0)}>` : ``}
    ${data.pageData.seo.description ? `<meta property="${"og:image:width"}"${add_attribute("content", data.pageData.seo.image.width, 0)}>` : ``}
    ${data.pageData.seo.description ? `<meta property="${"og:image:height"}"${add_attribute("content", data.pageData.seo.image.height, 0)}>` : ``}
    ${data.pageData.seo.description ? `<meta property="${"og:title"}"${add_attribute("content", data.pageData.seo.title, 0)}>` : ``}
    ${data.pageData.seo.description ? `<meta property="${"og:description"}"${add_attribute("content", data.pageData.seo.description, 0)}>` : ``}
    ${data.pageData.seo.description ? `<meta property="${"og:type"}"${add_attribute("content", data.pageData.seo.ogype, 0)}>` : ``}
    ${data.pageData.seo.description ? `<meta name="${"keywords"}"${add_attribute("content", data.pageData.seo.keywords, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1bkp9xw_END -->`, ""}

${each(sections.sort((a, b) => a.position - b.position), (section) => {
    return `${Sections[section?.component] ? `${validate_component(Sections[section?.component] || missing_component, "svelte:component").$$render($$result, { data: section }, {}, {})}` : ``}

  ${!Sections[section?.component] ? `${validate_component(Hubpage || missing_component, "svelte:component").$$render(
      $$result,
      {
        data: {
          section,
          clearActive,
          handleTogleActive,
          activeTags
        }
      },
      {},
      {}
    )}` : ``}`;
  })}`;
});
export {
  Page as default
};
