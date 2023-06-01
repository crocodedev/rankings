import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape, f as each, h as null_to_empty, i as compute_rest_props, j as spread, k as escape_object, o as onDestroy, l as createEventDispatcher, b as subscribe, p as compute_slots } from "./index3.js";
import { w as writable } from "./index2.js";
const Container_svelte_svelte_type_style_lang = "";
const css$h = {
  code: "div.svelte-1lwfuve{max-width:1366px;margin-left:auto;margin-right:auto}@media(min-width: 993px){div.svelte-1lwfuve{padding-left:50px;padding-right:50px}}@media(max-width: 992px){div.svelte-1lwfuve{padding-left:25px;padding-right:25px}}",
  map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$h);
  return `<div class="${"svelte-1lwfuve"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navItem = [];
  let header;
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    if (navItem.length > 0) {
      navItem.forEach((el) => {
        if (el.childNodes.length > 3) {
          el.addEventListener("mouseover", () => {
            header.style.paddingBottom = "143px";
          });
          el.addEventListener("mouseout", () => {
            header.style.paddingBottom = "0px";
          });
        }
      });
    }
  }
  return `${``}
${`<header class="${"header"}"${add_attribute("this", header, 0)}>${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"header__wrapper"}"><a href="${"/"}"${add_attribute(
        "class",
        "header__logotype",
        0
      )}><span class="${"header__logotype-icon-wrapper"}"><img src="${"../logo.svg"}" alt="${"logotype-icon"}" class="${"header__logotype-icon"}"></span>
          Rankings
        </a>
        ${``}
        <button class="${"header__btn-menu"}"><span class="${"header__btn-menu-area"}"></span></button></div>`;
    }
  })}</header>
  ${``}
  <div${add_attribute(
    "class",
    "header__background",
    0
  )}></div>`}`;
});
const ImageWithText_svelte_svelte_type_style_lang = "";
const css$g = {
  code: ".imagewithtext--contact.svelte-1ceuog7.svelte-1ceuog7{background-color:#46506f}@media(min-width: 993px){.imagewithtext--contact.svelte-1ceuog7.svelte-1ceuog7{padding-top:75px;padding-bottom:75px}}.imagewithtext__wrapper.svelte-1ceuog7.svelte-1ceuog7{display:flex}@media(max-width: 992px){.imagewithtext__wrapper.svelte-1ceuog7.svelte-1ceuog7{display:flex;flex-direction:column;gap:40px}}@media(max-width: 992px) and (min-width: 421px){.imagewithtext__wrapper.svelte-1ceuog7.svelte-1ceuog7{align-items:center}}@media(max-width: 992px){.imagewithtext__image.svelte-1ceuog7.svelte-1ceuog7{width:100%}}.imagewithtext__image-wrapper.svelte-1ceuog7.svelte-1ceuog7{justify-content:center;display:flex}@media(min-width: 421px){.imagewithtext__image-wrapper.svelte-1ceuog7.svelte-1ceuog7{height:270px}}@media(min-width: 993px){.imagewithtext__wrapper--contact.svelte-1ceuog7.svelte-1ceuog7{gap:40px}.imagewithtext__image-wrapper.svelte-1ceuog7.svelte-1ceuog7{width:50%}}.imagewithtext__inner.svelte-1ceuog7.svelte-1ceuog7{display:flex;gap:39px}@media(min-width: 993px){.imagewithtext__inner.svelte-1ceuog7.svelte-1ceuog7{width:50%}}@media(max-width: 992px){.imagewithtext__inner.svelte-1ceuog7.svelte-1ceuog7{flex-direction:column}}.imagewithtext.svelte-1ceuog7 .imagewithtext__text.svelte-1ceuog7{color:#07124a}@media(min-width: 769px){.imagewithtext.svelte-1ceuog7 .imagewithtext__text.svelte-1ceuog7{font-size:18px}}@media(max-width: 768px){.imagewithtext.svelte-1ceuog7 .imagewithtext__text.svelte-1ceuog7{font-size:16px}}.imagewithtext.svelte-1ceuog7 .white.svelte-1ceuog7{color:white}.imagewithtext__text-wrapper.svelte-1ceuog7.svelte-1ceuog7{display:flex;flex-direction:column;gap:35px;justify-content:space-between}@media(min-width: 993px){.imagewithtext__text-wrapper.svelte-1ceuog7.svelte-1ceuog7{width:65%}}@media(max-width: 992px){.imagewithtext__text-wrapper.svelte-1ceuog7.svelte-1ceuog7{text-align:center}}.imagewithtext__btn.svelte-1ceuog7.svelte-1ceuog7{color:white;font-size:18px;text-transform:uppercase;padding:10px 20px;background-color:#0077ff;text-align:center;border-radius:5px}.imagewithtext__btn.svelte-1ceuog7.svelte-1ceuog7:hover{text-shadow:0 0 1px white}@media(min-width: 993px){.imagewithtext__btn.svelte-1ceuog7.svelte-1ceuog7{align-self:flex-end;width:32%;min-width:202px}}@media(max-width: 992px){.imagewithtext__btn.svelte-1ceuog7.svelte-1ceuog7{align-self:center}}",
  map: null
};
const ImageWithText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$g);
  return `${``}
${`<section class="${"imagewithtext svelte-1ceuog7"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"imagewithtext__wrapper svelte-1ceuog7"}"><div class="${"imagewithtext__image-wrapper svelte-1ceuog7"}"><img${add_attribute("src", data.image.url, 0)} alt="${""}" class="${"imagewithtext__image svelte-1ceuog7"}"></div>
        <div class="${"imagewithtext__inner svelte-1ceuog7"}"><div class="${"imagewithtext__text-wrapper svelte-1ceuog7"}"><h3 class="${"h2"}">${escape(data.imageTextTitle)}</h3>
            <p class="${"imagewithtext__text svelte-1ceuog7"}">${escape(data.imageTextText)}</p></div>
          <a${add_attribute("href", data.buttonLink, 0)} class="${"imagewithtext__btn svelte-1ceuog7"}">${escape(data.buttonText)}</a></div></div>`;
    }
  })}</section>`}`;
});
const Ourmethods_svelte_svelte_type_style_lang = "";
const css$f = {
  code: ".ourmethods__wrapper.svelte-1nihcd6{color:#fff;border-radius:20px;background-color:#46506f;display:flex;flex-direction:column;padding:73px 50px 83px}.ourmethods__title-wrapper.svelte-1nihcd6{width:52%;display:flex;flex-direction:column;gap:10px}.ourmethods__title.svelte-1nihcd6{font-size:32px;font-weight:bold}.ourmethods__subtitle.svelte-1nihcd6{font-size:18px}.ourmethods__items.svelte-1nihcd6{padding-top:135px;display:grid;column-gap:50px;row-gap:85px;grid-template-columns:repeat(2, 1fr)}.ourmethods__item.svelte-1nihcd6{color:18px;display:flex;gap:100px}.ourmethods__text.svelte-1nihcd6{text-indent:60px}",
  map: null
};
const Ourmethods = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$f);
  return `<section class="${"ourmethods"}"><div class="${"ourmethods__wrapper svelte-1nihcd6"}"><div class="${"ourmethods__title-wrapper svelte-1nihcd6"}"><h3 class="${"ourmethods__title svelte-1nihcd6"}">OUR METHODS</h3>
      <p class="${"ourmethods__subtitle svelte-1nihcd6"}">At the same time we’re also able to help you with strategic marketing, search engine
        promotion (SEO) and marketing research
      </p></div>
    <div class="${"ourmethods__items svelte-1nihcd6"}"><div class="${"ourmethods__item svelte-1nihcd6"}"><span class="${"ourmethods__icon"}"><img src="${"Group 150.svg"}" alt="${""}"></span>
        <p class="${"ourmethods__text svelte-1nihcd6"}">We believe, and studies show, that search engine optimisation is worth the investment.
        </p></div>
      <div class="${"ourmethods__item svelte-1nihcd6"}"><span class="${"ourmethods__icon"}"><img src="${"Group 151.svg"}" alt="${""}"></span>
        <p class="${"ourmethods__text svelte-1nihcd6"}">We believe, and studies show, that search engine optimisation is worth the investment.
        </p></div>
      <div class="${"ourmethods__item svelte-1nihcd6"}"><span class="${"ourmethods__icon"}"><img src="${"Group 160.svg"}" alt="${""}"></span>
        <p class="${"ourmethods__text svelte-1nihcd6"}">We believe, and studies show, that search engine optimisation is worth the investment.
        </p></div>
      <div class="${"ourmethods__item svelte-1nihcd6"}"><span class="${"ourmethods__icon"}"><img src="${"Group 161.svg"}" alt="${""}"></span>
        <p class="${"ourmethods__text svelte-1nihcd6"}">We believe, and studies show, that search engine optimisation is worth the investment.
        </p></div>
      <div class="${"ourmethods__item svelte-1nihcd6"}"><span class="${"ourmethods__icon"}"><img src="${"Group 162.svg"}" alt="${""}"></span>
        <p class="${"ourmethods__text svelte-1nihcd6"}">We believe, and studies show, that search engine optimisation is worth the investment.
        </p></div>
      <div class="${"ourmethods__item svelte-1nihcd6"}"><span class="${"ourmethods__icon"}"><img src="${"Group 163.svg"}" alt="${""}"></span>
        <p class="${"ourmethods__text svelte-1nihcd6"}">We believe, and studies show, that search engine optimisation is worth the investment.
        </p></div></div></div>
</section>`;
});
const GridContent_svelte_svelte_type_style_lang = "";
const css$e = {
  code: '.grid-content__wrapper.svelte-iyrf85{display:flex;flex-direction:column}@media(min-width: 993px){.grid-content.svelte-iyrf85{padding-bottom:75px}}@media(max-width: 992px){.grid-content__wrapper.svelte-iyrf85{gap:20px}}@media(min-width: 993px){.grid-content__wrapper.svelte-iyrf85{gap:53px}}.grid-content__items.svelte-iyrf85{display:grid}@media(max-width: 992px){.grid-content__items.svelte-iyrf85{gap:25px;padding-bottom:20px}}@media(min-width: 768px){.grid-content__items.svelte-iyrf85{grid-template-columns:repeat(2, 1fr)}}@media(min-width: 993px){.grid-content__items.svelte-iyrf85{gap:50px}}.grid-content__title-wrapper.svelte-iyrf85{display:flex;flex-direction:column}@media(min-width: 993px){.grid-content__title-wrapper.svelte-iyrf85{width:48%;gap:20px}}@media(max-width: 992px){.grid-content__title-wrapper.svelte-iyrf85{gap:10px}}.grid-content__subtitle.svelte-iyrf85{color:#07124a}@media(min-width: 993px){.grid-content__subtitle.svelte-iyrf85{font-size:18px}}@media(max-width: 992px){.grid-content__subtitle.svelte-iyrf85{font-size:14px}}.grid-content__show-wrapper.svelte-iyrf85{display:flex;align-items:center;gap:10px}@media(min-width: 769px){.grid-content__show-wrapper.svelte-iyrf85{align-self:flex-end}}@media(max-width: 768px){.grid-content__show-wrapper.svelte-iyrf85{align-self:center}}.grid-content__show-text.svelte-iyrf85{display:flex;flex-direction:column;color:#97a2b6}@media(min-width: 769px){.grid-content__show-text.svelte-iyrf85{font-size:14px}}@media(max-width: 768px){.grid-content__show-text.svelte-iyrf85{font-size:12px}}.grid-content__show-icon.svelte-iyrf85{width:35px;height:35px;filter:opacity(25%)}.card.svelte-iyrf85{align-self:flex-end;color:white;border-radius:10px;overflow:hidden;height:100%;background-color:#46506f}.card__wrapper.svelte-iyrf85{display:flex;flex-direction:column}.card__image-wrapper.svelte-iyrf85{width:100%;height:365px;border-radius:10px;overflow:hidden;position:relative}@media(max-width: 768px){.card__image-wrapper.svelte-iyrf85{height:200px}}.card__image-icon.svelte-iyrf85{position:absolute;top:20px;right:20px}.card__image.svelte-iyrf85{width:100%;height:100%;object-fit:cover}.card__text-wrapper.svelte-iyrf85{display:flex;gap:40px;padding:50px 20px 20px}@media(max-width: 992px){.card__text-wrapper.svelte-iyrf85{padding:20px;flex-direction:column;gap:20px}}@media(min-width: 993px){.card__text.svelte-iyrf85{font-size:18px;padding-top:26px;width:45%}}@media(max-width: 993px){.card__text.svelte-iyrf85{font-size:14px}}.card__generaly-info.svelte-iyrf85{display:flex;flex-direction:column;gap:10px}@media(min-width: 993px){.card__generaly-info.svelte-iyrf85{width:55%}}.card__categories-list.svelte-iyrf85{display:flex;flex-wrap:wrap;gap:10px}@media(min-width: 993px){.card__categories-list.svelte-iyrf85{padding-top:30px}}@media(max-width: 992px){.card__categories-list.svelte-iyrf85{padding-top:10px}}.card__category.svelte-iyrf85{padding:10px 30px;background-color:white;color:#07124a;font-size:14px;border-radius:8px}@media(max-width: 992px){.card__category.svelte-iyrf85{padding:5px 15px;font-size:12px}}.card__industry.svelte-iyrf85{font-size:14px}.card__company.svelte-iyrf85{text-transform:uppercase;font-size:24px;font-weight:600}@media(max-width: 992px){.card__company.svelte-iyrf85{text-transform:uppercase;font-size:18px}}@media(min-width: 993px){.seotext.svelte-iyrf85{padding-top:75px;padding-bottom:75px}}@media(max-width: 992px){.seotext.svelte-iyrf85{padding-top:50px;padding-bottom:50px}}.seotext__wrapper.svelte-iyrf85{display:flex;flex-direction:column;gap:50px}.seotext__items.svelte-iyrf85{display:flex;flex-direction:column;gap:70px}.seotext__item.svelte-iyrf85{display:flex;flex-direction:column;position:relative;gap:32px}@media(min-width: 768px){.seotext__item.svelte-iyrf85{width:49%}}@media(min-width: 768px){.seotext__item.svelte-iyrf85:not(:last-of-type):nth-child(odd):before{content:"";position:absolute;background-repeat:no-repeat;width:50px;height:50px;left:-100px;bottom:0;opacity:0.2;transform:rotate(90deg);background-image:url("Group 109.svg")}.seotext__item.svelte-iyrf85:not(:last-of-type):nth-child(even):before{content:"";position:absolute;background-repeat:no-repeat;width:50px;height:50px;left:calc(100% + 50px);bottom:0;opacity:0.2;transform:rotate(90deg);background-image:url("Group 109.svg")}}@media(max-width: 768px){.seotext__item.svelte-iyrf85:not(:last-of-type):nth-child(odd):before{content:"";position:absolute;background-repeat:no-repeat;width:50px;height:50px;align-self:center;justify-self:center;bottom:0;opacity:0.2;top:calc(100% + 46px);transform:rotate(90deg);background-image:url("Group 109.svg")}.seotext__item.svelte-iyrf85:not(:last-of-type):nth-child(even):before{content:"";position:absolute;background-repeat:no-repeat;width:50px;height:50px;align-self:center;justify-self:center;top:calc(100% + 46px);bottom:0;opacity:0.2;transform:rotate(90deg);background-image:url("Group 109.svg")}}.seotext__item.svelte-iyrf85:nth-child(odd){align-self:flex-end}.seotext__name-wrapper.svelte-iyrf85{display:flex;align-items:center;position:relative;color:#46506f;font-size:24px;text-transform:uppercase}.seotext__name.svelte-iyrf85{position:absolute;background-color:white;left:0;padding-right:30px}.seotext__bar.svelte-iyrf85{width:100%;height:1px;background-color:#0077ff}.seotext__text.svelte-iyrf85{color:var(--dark-blue);font-size:18px}@media(max-width: 786px){.seotext__items.svelte-iyrf85{gap:139px}.seotext__name-wrapper.svelte-iyrf85{font-size:18px}.seotext__text.svelte-iyrf85{font-size:14px}}.methods.svelte-iyrf85{background-color:#46506f;border-radius:20px}@media(min-width: 993px){.methods.svelte-iyrf85{padding-top:75px;padding-bottom:80px;margin-top:75px;margin-bottom:75px}}@media(max-width: 992px){.methods.svelte-iyrf85{padding-top:30px;padding-bottom:30px;margin-top:50px;margin-bottom:50px}}.methods__wrapper.svelte-iyrf85{display:flex;flex-direction:column}@media(min-width: 993px){.methods__wrapper.svelte-iyrf85{gap:135px}}@media(max-width: 992px){.methods__wrapper.svelte-iyrf85{gap:40px}}.methods__title-wrapper.svelte-iyrf85{display:flex;flex-direction:column;gap:10px}@media(min-width: 992px){.methods__title-wrapper.svelte-iyrf85{width:48%}}.methods__subtitle.svelte-iyrf85{color:white}@media(max-width: 992px){.methods__subtitle.svelte-iyrf85{text-indent:50px}}.methods__items.svelte-iyrf85{display:grid}@media(min-width: 993px){.methods__items.svelte-iyrf85{grid-template-columns:repeat(2, 1fr);column-gap:50px;row-gap:75px}}@media(max-width: 992px){.methods__items.svelte-iyrf85{grid-template-columns:1fr;gap:40px}}.methods__icon.svelte-iyrf85{display:flex;width:55px;height:55px}.methods__icon-img.svelte-iyrf85{width:55px;height:55px}.methods__item.svelte-iyrf85{display:flex;color:white}@media(min-width: 993px){.methods__item.svelte-iyrf85{text-indent:50px;gap:100px}}@media(max-width: 992px){.methods__item.svelte-iyrf85{gap:35px}.methods__item.svelte-iyrf85:nth-child(6n+5),.methods__item.svelte-iyrf85:nth-child(6n+6),.methods__item.svelte-iyrf85:nth-child(6n+4){flex-direction:row-reverse}}.indicators.svelte-iyrf85{padding-top:20px}.indicators__wrapper.svelte-iyrf85{display:flex;column-gap:20px;justify-content:space-between;flex-wrap:wrap;row-gap:50px;border-bottom:2px solid #0077ff}@media(min-width: 993px){.indicators__wrapper.svelte-iyrf85{padding-bottom:155px}}@media(max-width: 992px){.indicators__wrapper.svelte-iyrf85{padding-bottom:70px}}.indicator.svelte-iyrf85{width:280px;position:relative}@media(max-width: 992px){.indicator.svelte-iyrf85{width:150px}}.indicator.svelte-iyrf85::before{position:absolute;content:"";background-repeat:no-repeat;background-image:url("../Graph 3.svg");width:60px;height:100%;left:calc(100% - 60px);top:0}.indicator__fact.svelte-iyrf85{font-size:14px;color:#46506f}.indicator__wrapper.svelte-iyrf85{padding-left:20px;padding-top:70px;padding-bottom:20px;display:flex;flex-direction:column;justify-content:space-between}@media(max-width: 769px){.indicator.svelte-iyrf85{padding-top:50px}}@media(max-width: 992px){.indicator__wrapper.svelte-iyrf85{height:217px}}@media(min-width: 993px){.indicator__wrapper.svelte-iyrf85{height:270px}}.indicator__value.svelte-iyrf85{color:#07124a;letter-spacing:-4.32px;line-height:48px}@media(min-width: 993px){.indicator__value.svelte-iyrf85{font-size:72px}}@media(max-width: 992px){.indicator__value.svelte-iyrf85{font-size:32px}}.faq.svelte-iyrf85{z-index:0;position:relative}.faq__title.svelte-iyrf85{font-size:32px;font-weight:bold;color:#07124a;width:341px}.faq__wrapper.svelte-iyrf85{display:flex;flex-direction:column;gap:75px}@media(min-width: 769px){.faq__question.svelte-iyrf85{font-size:24px}}@media(max-width: 768px){.faq__question.svelte-iyrf85{font-size:18px}}.faq__items.svelte-iyrf85{display:flex;flex-direction:column;gap:20px}.faq__question-wrapper.svelte-iyrf85{position:relative;display:flex;align-items:flex-end;gap:20px;cursor:pointer;color:#07124a;background-color:white;border:1px solid #46506f;border-radius:10px;transition:0.5s ease}@media(min-width: 769px){.faq__question-wrapper.svelte-iyrf85{padding:30px 35px;padding-right:100px}}@media(max-width: 768px){.faq__question-wrapper.svelte-iyrf85{padding:14px 10px;padding-right:65px}}.faq__question-wrapper.active.svelte-iyrf85{background-color:#414c6d;color:white}.faq__num.svelte-iyrf85{font-size:14px;color:#97a2b6}@media(max-width: 768px){.faq__num.svelte-iyrf85{align-self:flex-start}}.faq__answer.svelte-iyrf85{opacity:0;height:0;transform:translateY(-100px);text-indent:40px;color:#46506f;position:relative;z-index:-10;transition:0.5s ease}@media(min-width: 769px){.faq__answer.svelte-iyrf85{width:608px;font-size:16px}}@media(max-width: 768px){.faq__answer.svelte-iyrf85{width:100%;font-size:14px}}.faq__icon.svelte-iyrf85{align-self:center;position:absolute;right:30px;transition:0.5s ease}@media(max-width: 768px){.faq__icon.svelte-iyrf85{right:10px}.faq__icon-img.svelte-iyrf85{width:30px}}.faq__icon.active.svelte-iyrf85{filter:invert(1);mix-blend-mode:color-dodge;transform:rotate(90deg)}.faq__answer.active.svelte-iyrf85{padding-top:15px;opacity:1;transform:translateY(0);height:fit-content;z-index:1}',
  map: null
};
const GridContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  let activeQuestions = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$e);
  return `${data.component == "Cards" ? `<section class="${"grid-content svelte-iyrf85"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"grid-content__wrapper svelte-iyrf85"}"><div class="${"grid-content__title-wrapper svelte-iyrf85"}"><h2 class="${"h2"}">${escape(data.title)}</h2>
          <p class="${"grid-content__subtitle svelte-iyrf85"}">${escape(data.subtitle)}</p></div>
        <div class="${"grid-content__items svelte-iyrf85"}">${each(data.contentListCollection.items.slice(0, 4), (item) => {
        return `<div class="${"card svelte-iyrf85"}"><div class="${"card__wrapper svelte-iyrf85"}"><div class="${"card__image-wrapper svelte-iyrf85"}"><img${add_attribute("src", item.imageCard.url, 0)} alt="${"card"}" class="${"card__image svelte-iyrf85"}">
                  <a${add_attribute("href", item.url, 0)}><img src="${"../feather-external-link.svg"}" alt="${""}" class="${"card__image-icon svelte-iyrf85"}">
                  </a></div>
                <div class="${"card__text-wrapper svelte-iyrf85"}"><div class="${"card__generaly-info svelte-iyrf85"}"><span class="${"card__industry svelte-iyrf85"}">${escape(item.subtitleCard)}</span>
                    <p class="${"card__company svelte-iyrf85"}">${escape(item.titleCard)}</p>
                    <div class="${"card__categories-list svelte-iyrf85"}">${item.tagList ? `${each(item.tagList, (tag) => {
          return `<p class="${"card__category svelte-iyrf85"}">${escape(tag)}
                          </p>`;
        })}` : ``}
                    </div></div>
                  <p class="${"card__text svelte-iyrf85"}">${escape(item.textCard)}</p>
                </div></div>
            </div>`;
      })}</div>
        ${data.linkMore ? `<a${add_attribute("href", data.linkMore.link, 0)} class="${"grid-content__show-wrapper svelte-iyrf85"}"><span class="${"grid-content__texts"}">${each(data.linkMore.title.replace("<br/>", "<br/>").split("<br/>"), (line) => {
        return `<p class="${"grid-content__show-text svelte-iyrf85"}">${escape(line)}</p>`;
      })}</span>
            <span class="${"grid-content__show-icon svelte-iyrf85"}"><img src="${"../Group 109.svg"}" alt="${"arrow"}" class="${""}"></span></a>` : ``}</div>`;
    }
  })}</section>` : ``}

${data.component == "Seo" ? `<section class="${"seotext svelte-iyrf85"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"seotext__wrapper svelte-iyrf85"}"><div class="${"grid-content__title-wrapper svelte-iyrf85"}"><h2 class="${"h2"}">${escape(data.title)}</h2>
          ${data.subtitle !== null ? `<p class="${"grid-content__subtitle svelte-iyrf85"}">${escape(data.subtitle)}</p>` : `${typeof data.subtitle === "undefined" ? `<p class="${"grid-content__subtitle svelte-iyrf85"}"> </p>` : ``}`}</div>
        <div class="${"seotext__items svelte-iyrf85"}">${each(data.contentListCollection.items, (item) => {
        return `<div class="${"seotext__item svelte-iyrf85"}"><div class="${"seotext__name-wrapper svelte-iyrf85"}"><p class="${"seotext__name svelte-iyrf85"}">${item.title !== null ? `${escape(item.title)}` : `${escape(" ")}`}</p>
                <span class="${"seotext__bar svelte-iyrf85"}"></span></div>
              <p class="${"seotext__text svelte-iyrf85"}">${escape(item.text)}</p>
            </div>`;
      })}</div></div>`;
    }
  })}</section>` : ``}

${data.component == "Methods" ? `<section class="${"methods svelte-iyrf85"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"methods__wrapper svelte-iyrf85"}"><div class="${"methods__title-wrapper svelte-iyrf85"}"><h2 class="${"h2 h2--white"}">${escape(data.title)}</h2>
          <p class="${"methods__subtitle svelte-iyrf85"}">${escape(data.subtitle)}</p></div>
        <div class="${"methods__items svelte-iyrf85"}">${each(data.contentListCollection.items, (item, index) => {
        return `<div class="${"methods__item svelte-iyrf85"}"${add_attribute("style", `--item-align: ${index}`, 0)}><span class="${"methods__icon svelte-iyrf85"}"><img${add_attribute("src", item.icon.url, 0)} alt="${""}" class="${"methods__icon-img svelte-iyrf85"}"></span>
              <p class="${"methods__text"}">${escape(item.text)}</p>
            </div>`;
      })}</div></div>`;
    }
  })}</section>` : ``}

${data.component == "Indicator" ? `<section class="${"indicators svelte-iyrf85"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"indicators__wrapper svelte-iyrf85"}">${each(data.contentListCollection.items, (item) => {
        return `<div class="${"indicator svelte-iyrf85"}"><div class="${"indicator__wrapper svelte-iyrf85"}"><span class="${"indicator__fact svelte-iyrf85"}">${escape(item.title)}</span>
              <span class="${"indicator__value svelte-iyrf85"}">${escape(item.text)}</span></div>
          </div>`;
      })}</div>`;
    }
  })}</section>` : ``}

${data.component == "Faq" ? `<section class="${"faq svelte-iyrf85"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"faq__wrapper svelte-iyrf85"}"><h2 class="${"h2 faq__title svelte-iyrf85"}">${escape(data.title)}</h2>
        <div class="${"faq__items svelte-iyrf85"}">${each(data.contentListCollection.items, (item, index) => {
        return `
            <div class="${"faq__item"}"><div class="${escape(
          null_to_empty(activeQuestions.includes(index) ? "faq__question-wrapper active" : "faq__question-wrapper"),
          true
        ) + " svelte-iyrf85"}"><span class="${"faq__num svelte-iyrf85"}">0${escape(index + 1)}.</span>
                <p class="${"faq__question svelte-iyrf85"}">${escape(item.title)}</p>
                <span class="${escape(
          null_to_empty(activeQuestions.includes(index) ? "faq__icon active" : "faq__icon"),
          true
        ) + " svelte-iyrf85"}"><img src="${"../Group 109.svg"}" alt="${""}" class="${"faq__icon-img svelte-iyrf85"}"></span></div>
              <p class="${escape(
          null_to_empty(activeQuestions.includes(index) ? "faq__answer active" : "faq__answer"),
          true
        ) + " svelte-iyrf85"}">${escape(item.text)}</p>
            </div>`;
      })}</div></div>`;
    }
  })}</section>` : ``}`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="${"hero"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"hero__wrapper"}"><div class="${"hero__leftside-inner"}"><h1 class="${"h1"}">${escape(data.titleHero)}</h1>
        <div class="${"hero__arrow-animate"}"><div class="${"arrow__points"}"><span class="${"arrow__point arrow__point-1"}"><span class="${"arrow__point-text"}">Qualitative research</span>
              <span class="${"arrow__point-num"}">01</span></span>
            <span class="${"arrow__point arrow__point-2"}"><span class="${"arrow__point-text"}">Market research</span>
              <span class="${"arrow__point-num"}">02</span></span>
            <span class="${"arrow__point arrow__point-3"}"><span class="${"arrow__point-text"}">Brand strategy &amp; design</span>
              <span class="${"arrow__point-num"}">03</span></span></div>

          <div class="${"hero__image-white"}"></div>
          <img src="${"Arrow.svg"}" alt="${""}" class="${"hero__arrow"}"></div></div>
      <div class="${"hero__rightside-inner"}"><div class="${"hero__image-wrapper"}"><img src="${"Graphs.svg"}" alt="${""}" class="${"hero__image"}"></div>
        <div class="${"hero__text-wrapper"}"><p class="${"hero__text"}">${escape(data.subtext)}</p>
          <a${add_attribute("href", data.buttonLink, 0)} class="${"btn"}">${escape(data.buttonText)}</a></div></div>
      <span class="${"hero__scroll-down"}"><p class="${"hero__scroll-text"}">Scroll down</p>
        <img class="${"hero__scroll-icon"}" src="${"../Group 109.svg"}"></span></div>`;
    }
  })}
</section>`;
});
const Stages_svelte_svelte_type_style_lang = "";
const css$d = {
  code: '@media(min-width: 993px){.stages.svelte-1asizg0.svelte-1asizg0{padding-top:75px;padding-bottom:75px}}@media(max-width: 992px){.stages.svelte-1asizg0.svelte-1asizg0{padding-top:50px;padding-bottom:50px}}section.svelte-1asizg0 * .stages__wrapper.svelte-1asizg0{display:flex;flex-direction:column;gap:50px}section.svelte-1asizg0 * .stages__title-wrapper.svelte-1asizg0{display:flex;flex-direction:column;gap:20px}section.svelte-1asizg0 * .stages__subtitle.svelte-1asizg0{font-size:18px;color:#07124a}@media(min-width: 993px){section.svelte-1asizg0 * .stages__subtitle.svelte-1asizg0{width:48%}}section.svelte-1asizg0 * .stages__items.svelte-1asizg0{display:flex;justify-content:space-between;padding-top:30px;gap:50px}@media(max-width: 992px){section.svelte-1asizg0 * .stages__items.svelte-1asizg0{flex-direction:column}}@media(min-width: 993px){section.svelte-1asizg0 * .stages__items.svelte-1asizg0{align-items:flex-end}}@keyframes svelte-1asizg0-fdsseq{100%{opacity:1}}section.svelte-1asizg0 * .stages__item.svelte-1asizg0{display:flex;opacity:0;animation:svelte-1asizg0-fdsseq 0.7s forwards;animation-delay:calc(0.7s * var(--acc))}@media(max-width: 992px){section.svelte-1asizg0 * .stages__item.svelte-1asizg0{flex-direction:column-reverse;gap:40px}}@media(min-width: 993px){section.svelte-1asizg0 * .stages__item.svelte-1asizg0{flex-direction:column}}section.svelte-1asizg0 * .stages__item-text.svelte-1asizg0{color:#07124a;font-size:16px}@media(min-width: 993px){section.svelte-1asizg0 * .stages__item-text.svelte-1asizg0{padding-bottom:80px}}section.svelte-1asizg0 * .stages__item-bar.svelte-1asizg0{position:relative;display:flex;padding:20px;background-color:#46506f;border-radius:10px}@media(min-width: 993px){section.svelte-1asizg0 * .stages__item-bar.svelte-1asizg0{align-items:flex-end;justify-content:center;height:calc(220px + var(--acc) * 40px)}}@media(max-width: 992px){section.svelte-1asizg0 * .stages__item-bar.svelte-1asizg0{align-items:center;padding:10px;gap:10px;min-width:50%;width:calc(50% + var(--acc) * 40px);max-width:100%}}section.svelte-1asizg0 * .stages__item-bar.svelte-1asizg0::after{position:absolute;content:"";width:1px;background-color:#0077ff}@media(max-width: 992px){section.svelte-1asizg0 * .stages__item-bar.svelte-1asizg0::after{right:20px;bottom:-20px;height:40px}}@media(min-width: 993px){section.svelte-1asizg0 * .stages__item-bar.svelte-1asizg0::after{top:-60px;left:20px;height:80px}}section.svelte-1asizg0 * .stages__item-number.svelte-1asizg0{color:white;font-weight:bold}@media(min-width: 993px){section.svelte-1asizg0 * .stages__item-number.svelte-1asizg0{writing-mode:tb;font-size:72px;transform:rotateZ(-180deg)}}@media(max-width: 992px){section.svelte-1asizg0 * .stages__item-number.svelte-1asizg0{font-size:32px}}section.svelte-1asizg0 * .stages__item-name.svelte-1asizg0{color:#97a2b6;text-align:center}@media(min-width: 993px){section.svelte-1asizg0 * .stages__item-name.svelte-1asizg0{font-size:18px;padding-top:20px}}@media(max-width: 992px){section.svelte-1asizg0 * .stages__item-name.svelte-1asizg0{font-size:12px}}',
  map: null
};
const Stages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$d);
  return `<section class="${"stages svelte-1asizg0"}"${add_attribute("data-id", data.sys.id, 0)}>${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"stages__wrapper svelte-1asizg0"}"><div class="${"stages__title-wrapper svelte-1asizg0"}"><h2 class="${"h2"}">${escape(data.stagesTitle)}</h2>
        <p class="${"stages__subtitle svelte-1asizg0"}">${escape(data.stagesSubtitle)}</p></div>
      <div class="${"stages__items svelte-1asizg0"}">${each(data.stagesListCollection.items, (item, index) => {
        return `${``}`;
      })}</div></div>`;
    }
  })}
</section>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$c = {
  code: "footer.footer--contact.svelte-v7a3oj.svelte-v7a3oj{background-color:#46506f}@media(max-width: 992px){footer.footer--contact.svelte-v7a3oj.svelte-v7a3oj{padding-top:30px}}.footer__wrapper--contact.svelte-v7a3oj.svelte-v7a3oj{filter:brightness(4000%)}footer.footer.svelte-v7a3oj .svelte-v7a3oj{color:#07124a}footer.footer.svelte-v7a3oj * .footer__inner.svelte-v7a3oj{display:flex;gap:100px}@media(max-width: 768px){footer.footer.svelte-v7a3oj * .footer__inner.svelte-v7a3oj{justify-content:center}}footer.footer.svelte-v7a3oj * .footer__wrapper.svelte-v7a3oj{position:relative;width:100%;padding-top:20px;padding-bottom:20px;display:flex}@media(min-width: 993px){footer.footer.svelte-v7a3oj * .footer__wrapper.svelte-v7a3oj{justify-content:space-between}}@media(max-width: 992px){footer.footer.svelte-v7a3oj * .footer__wrapper.svelte-v7a3oj{justify-content:center}}footer.footer.svelte-v7a3oj * .footer__links-wrapper.svelte-v7a3oj{display:flex;gap:25px}footer.footer.svelte-v7a3oj * .footer__terms-wrapper.svelte-v7a3oj{display:flex;gap:50px}footer.footer.svelte-v7a3oj * .footer__rights-text.svelte-v7a3oj{text-align:center}@media(max-width: 768px){footer.footer.svelte-v7a3oj * .footer__rights-text.svelte-v7a3oj{font-size:12px;width:75%;line-height:20px}}@media(min-width: 993px) and (max-width: 1100px){footer.footer.svelte-v7a3oj * .footer__inner.svelte-v7a3oj{gap:20px}footer.footer.svelte-v7a3oj * .footer__terms-wrapper.svelte-v7a3oj{gap:20px}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$c);
  return `${``}

${`<footer class="${"footer svelte-v7a3oj"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"footer__wrapper svelte-v7a3oj"}"><div class="${"footer__inner svelte-v7a3oj"}"><p class="${"footer__rights-text svelte-v7a3oj"}">${escape(data.footerRights)}</p>
          ${``}</div>

        ${``}</div>`;
    }
  })}</footer>`}`;
});
const LightboxThumbnail_svelte_svelte_type_style_lang = "";
const css$b = {
  code: "div.svelte-hpqpx9{position:static;cursor:zoom-in}.svelte-lightbox-thumbnail > *{max-width:100%;height:auto}",
  map: null
};
const LightboxThumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  $$result.css.add(css$b);
  return `<div${spread([escape_object($$restProps)], {
    classes: "svelte-lightbox-thumbnail svelte-hpqpx9"
  })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const BodyChild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let targetElement;
  let child;
  const removeTarget = () => {
    if (typeof document !== "undefined") {
      document.body.removeChild(child);
    }
  };
  onDestroy(removeTarget);
  return `<div${spread([escape_object($$restProps)], {})}${add_attribute("this", targetElement, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const LightboxHeader_svelte_svelte_type_style_lang = "";
const css$a = {
  code: "div.svelte-lightbox-header.svelte-5qj430{width:auto;height:3rem;display:flex;justify-content:flex-end;align-items:center}div.svelte-lightbox-header.fullscreen.svelte-5qj430{position:fixed;z-index:5;top:0;left:0;right:0}button.svelte-5qj430{background:transparent;font-size:3rem;border:none;color:white}button.svelte-5qj430:hover{color:lightgray;cursor:pointer}button.svelte-5qj430:active{background-color:transparent}button.fullscreen.svelte-5qj430{filter:drop-shadow(0 0 5px black) drop-shadow(0 0 10px black)}",
  map: null
};
const LightboxHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["closeButtonProps", "showCloseButton", "enableEscapeToClose", "imagePreset"]);
  createEventDispatcher();
  let { closeButtonProps = {} } = $$props;
  let { showCloseButton } = $$props;
  let { enableEscapeToClose } = $$props;
  let { imagePreset } = $$props;
  if ($$props.closeButtonProps === void 0 && $$bindings.closeButtonProps && closeButtonProps !== void 0)
    $$bindings.closeButtonProps(closeButtonProps);
  if ($$props.showCloseButton === void 0 && $$bindings.showCloseButton && showCloseButton !== void 0)
    $$bindings.showCloseButton(showCloseButton);
  if ($$props.enableEscapeToClose === void 0 && $$bindings.enableEscapeToClose && enableEscapeToClose !== void 0)
    $$bindings.enableEscapeToClose(enableEscapeToClose);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  $$result.css.add(css$a);
  return `

<div${spread([{ class: "svelte-lightbox-header" }, escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-5qj430"
  })}>${showCloseButton ? `<button${spread([escape_object(closeButtonProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-5qj430"
  })}>×
        </button>` : ``}
</div>`;
});
const LightboxBody_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "div.svelte-lightbox-body.svelte-1d3ym4l{position:relative;width:auto;height:auto;max-height:80vh}div.svelte-lightbox-body > *{max-width:100%;max-height:inherit;height:auto;width:auto;object-fit:contain}div.svelte-lightbox-body.scroll > *{max-height:100%}div.svelte-lightbox-body.expand > *{flex-grow:1}div.fullscreen.svelte-1d3ym4l{width:inherit;max-width:inherit;height:inherit;max-height:100%;display:flex;align-items:center;justify-content:center}div.scroll.svelte-1d3ym4l{overflow:scroll}",
  map: null
};
const LightboxBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imagePreset } = $$props;
  let { enableImageExpand } = $$props;
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.enableImageExpand === void 0 && $$bindings.enableImageExpand && enableImageExpand !== void 0)
    $$bindings.enableImageExpand(enableImageExpand);
  $$result.css.add(css$9);
  return `<div class="${[
    "svelte-lightbox-body svelte-1d3ym4l",
    (imagePreset === "fullscreen" ? "fullscreen" : "") + " " + (imagePreset === "scroll" ? "scroll" : "") + " " + (enableImageExpand ? "expand" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const i18n = writable({
  generateLocalizedGalleryCounter: (activeImage, imageCount) => {
    return `Image ${activeImage + 1} of ${imageCount}`;
  }
});
const LightboxFooter_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "div.svelte-lightbox-footer.svelte-6fc1ka{width:100%;height:auto;color:white;text-align:left;position:absolute}div.svelte-lightbox-footer.fullscreen.svelte-6fc1ka{position:fixed;z-index:5;bottom:0;left:0;right:0;padding-left:1rem}",
  map: null
};
const LightboxFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let localizedGalleryCounter;
  let $$restProps = compute_rest_props($$props, ["imagePreset", "title", "description", "gallery"]);
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { imagePreset } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { gallery = null } = $$props;
  const generateLocalizedGalleryCounter = (i18n2, gallery2) => {
    if (gallery2 !== null) {
      return i18n2.generateLocalizedGalleryCounter(gallery2.activeImage, gallery2.imageCount);
    }
  };
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.gallery === void 0 && $$bindings.gallery && gallery !== void 0)
    $$bindings.gallery(gallery);
  $$result.css.add(css$8);
  localizedGalleryCounter = generateLocalizedGalleryCounter($i18n, gallery);
  $$unsubscribe_i18n();
  return `<div${spread([{ class: "svelte-lightbox-footer" }, escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-6fc1ka"
  })}><h2><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2>
    <h5><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></h5>
    ${gallery !== null ? `<p>${escape(localizedGalleryCounter)}</p>` : ``}
</div>`;
});
const ModalCover_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: `div.svelte-lightbox-overlay.svelte-7wg54p{position:fixed;z-index:1000000!important;background-color:rgba(43, 39, 45, 0.87);top:0;bottom:0;left:0;right:0;overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center}div.svelte-lightbox-overlay.svelte-7wg54p::before{content:'';position:absolute;top:0;bottom:0;left:0;right:0;opacity:0;z-index:-1}div.svelte-lightbox-overlay.svelte-7wg54p::after{content:"";clear:both;display:table}`,
  map: null
};
const ModalCover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["transitionDuration"]);
  let { transitionDuration } = $$props;
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  $$result.css.add(css$7);
  return `<div${spread([{ class: "svelte-lightbox-overlay" }, escape_object($$restProps)], { classes: "svelte-7wg54p" })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "div.svelte-lightbox-main.svelte-891jqp{position:relative;max-width:100%;max-height:100%;height:auto;width:auto;background-color:transparent}div.svelte-lightbox-main.fullscreen.svelte-891jqp{height:inherit;width:inherit;max-height:inherit;max-width:inherit}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["transitionDuration", "imagePreset"]);
  let { transitionDuration } = $$props;
  let { imagePreset } = $$props;
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  $$result.css.add(css$6);
  return `<div${spread([{ class: "svelte-lightbox-main" }, escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " " + (imagePreset === "scroll" ? "scroll" : "") + " svelte-891jqp"
  })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Lightbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { imagePreset = "" } = $$props;
  let { customization = {} } = $$props;
  let { transitionDuration = 300 } = $$props;
  let { keepBodyScroll = false } = $$props;
  let { enableImageExpand = false } = $$props;
  let { enableFallbackThumbnail = true } = $$props;
  let { enableEscapeToClose = true } = $$props;
  let { enableClickToClose = false } = $$props;
  let { showCloseButton = true } = $$props;
  let { isVisible = false } = $$props;
  const toggle = () => {
    isVisible = !isVisible;
  };
  const open = () => {
    isVisible = true;
  };
  const close = () => {
    isVisible = false;
  };
  const programmaticController = { toggle, open, close };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.customization === void 0 && $$bindings.customization && customization !== void 0)
    $$bindings.customization(customization);
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.keepBodyScroll === void 0 && $$bindings.keepBodyScroll && keepBodyScroll !== void 0)
    $$bindings.keepBodyScroll(keepBodyScroll);
  if ($$props.enableImageExpand === void 0 && $$bindings.enableImageExpand && enableImageExpand !== void 0)
    $$bindings.enableImageExpand(enableImageExpand);
  if ($$props.enableFallbackThumbnail === void 0 && $$bindings.enableFallbackThumbnail && enableFallbackThumbnail !== void 0)
    $$bindings.enableFallbackThumbnail(enableFallbackThumbnail);
  if ($$props.enableEscapeToClose === void 0 && $$bindings.enableEscapeToClose && enableEscapeToClose !== void 0)
    $$bindings.enableEscapeToClose(enableEscapeToClose);
  if ($$props.enableClickToClose === void 0 && $$bindings.enableClickToClose && enableClickToClose !== void 0)
    $$bindings.enableClickToClose(enableClickToClose);
  if ($$props.showCloseButton === void 0 && $$bindings.showCloseButton && showCloseButton !== void 0)
    $$bindings.showCloseButton(showCloseButton);
  if ($$props.isVisible === void 0 && $$bindings.isVisible && isVisible !== void 0)
    $$bindings.isVisible(isVisible);
  if ($$props.programmaticController === void 0 && $$bindings.programmaticController && programmaticController !== void 0)
    $$bindings.programmaticController(programmaticController);
  return `${$$slots.thumbnail || enableFallbackThumbnail ? `${validate_component(LightboxThumbnail, "Thumbnail").$$render($$result, Object.assign({}, customization?.thumbnailProps || {}), {}, {
    default: () => {
      return `${$$slots.thumbnail ? `${slots.thumbnail ? slots.thumbnail({}) : ``}` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })}` : ``}

${isVisible ? `${validate_component(BodyChild, "BodyChild").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ModalCover, "ModalCover").$$render($$result, Object.assign({}, { transitionDuration }, customization.coverProps || {}), {}, {
        default: () => {
          return `${validate_component(Modal, "Modal").$$render($$result, Object.assign({}, { imagePreset }, { transitionDuration }, customization.lightboxProps || {}), {}, {
            default: () => {
              return `${validate_component(LightboxHeader, "Header").$$render(
                $$result,
                Object.assign(
                  {},
                  { imagePreset },
                  { showCloseButton },
                  { enableEscapeToClose },
                  {
                    closeButtonProps: customization.closeButtonProps
                  },
                  customization.lightboxHeaderProps || {}
                ),
                {},
                {}
              )}

				${validate_component(LightboxBody, "Body").$$render($$result, { imagePreset, enableImageExpand }, {}, {
                default: () => {
                  return `${slots.default ? slots.default({}) : ``}`;
                }
              })}

				${validate_component(LightboxFooter, "Footer").$$render($$result, Object.assign({}, { imagePreset }, { title }, { description }, customization.lightboxFooterProps || {}), {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })}` : ``}`;
});
const PreviousImageButton_svelte_svelte_type_style_lang = "";
const NextImageButton_svelte_svelte_type_style_lang = "";
const GalleryThumbnail_svelte_svelte_type_style_lang = "";
const TextContentImage_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '@media(min-width: 993px){.textContent__cursor.svelte-16lf8ze.svelte-16lf8ze{cursor:none;position:absolute;display:flex;align-items:center;justify-content:center;width:136px;height:136px;border-radius:100%;border:1px solid #0077ff}.textContent__cursor.svelte-16lf8ze.svelte-16lf8ze::before{content:"CLICK";color:#0077ff;font-size:18px}}.textContent__wrapper.svelte-16lf8ze.svelte-16lf8ze{display:flex;flex-direction:column;gap:50px}.textContent__title-wrapper.svelte-16lf8ze.svelte-16lf8ze{display:flex;align-self:flex-start;flex-direction:column;gap:20px}@media(min-width: 993px){.textContent__title-wrapper.svelte-16lf8ze.svelte-16lf8ze{width:48%}}.textContent__title-wrapper.right.svelte-16lf8ze.svelte-16lf8ze{align-self:flex-end;text-align:end}.textContent__title.svelte-16lf8ze.svelte-16lf8ze{font-size:32px;color:#07124a;font-weight:bold}.textContent__text.svelte-16lf8ze.svelte-16lf8ze{color:#07124a}@media(max-width: 768px){.textContent__text.svelte-16lf8ze.svelte-16lf8ze{font-size:14px}}@media(min-width: 769px){.textContent__text.svelte-16lf8ze.svelte-16lf8ze{font-size:18px}}.textContent__image.svelte-16lf8ze.svelte-16lf8ze{width:100%;height:100%;cursor:none;object-fit:cover}.svelte-lightbox-body .textContent__image-wrapper.svelte-16lf8ze .textContent__cursor.svelte-16lf8ze{cursor:pointer;opacity:0}.svelte-lightbox-body{pointer-events:none}.textContent__image-wrapper{cursor:none;position:relative;max-width:100%;height:416px;border-radius:10px;overflow:hidden}',
  map: null
};
const TextContentImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  let cursorX = 0;
  let cursorY = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$5);
  return `<section class="${"textContent"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"textContent__wrapper svelte-16lf8ze"}"><div class="${"textContent__title-wrapper " + escape(data.textAlign, true) + " svelte-16lf8ze"}"><h2 class="${"h2"}">${escape(data.title)}</h2>
        <p class="${"textContent__text svelte-16lf8ze"}">${escape(data.text)}</p></div>
      ${data.image ? `${validate_component(Lightbox, "Lightbox").$$render($$result, { description: data.title }, {}, {
        default: () => {
          return `
          <div class="${"textContent__image-wrapper svelte-16lf8ze"}"><div class="${"textContent__cursor svelte-16lf8ze"}"${add_attribute("style", `left: ${cursorX - 0}px; top: ${cursorY - 0}px;`, 0)}></div>

            <img${add_attribute("src", data.image.url, 0)} alt="${""}" class="${"textContent__image svelte-16lf8ze"}"></div>`;
        }
      })}` : ``}</div>`;
    }
  })}
</section>`;
});
const Form_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '.highlight.svelte-1obljwm.svelte-1obljwm{color:#0077ff}.contact-form__succes.svelte-1obljwm.svelte-1obljwm{width:40px;height:40px;border-radius:100%;border:2px solid #0077ff;position:relative;display:flex;align-items:center;justify-content:center;animation:svelte-1obljwm-succes 1.5s ease-in-out}.contact-form__succes.svelte-1obljwm.svelte-1obljwm::before{position:absolute;width:18px;height:10px;content:"";transform:rotate(130deg) translateX(-2px) translateY(1px);border-top:2px solid #0077ff;border-right:2px solid #0077ff}@keyframes svelte-1obljwm-succes{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@media(min-width: 993px){.contact-form.svelte-1obljwm.svelte-1obljwm:not(.contact-form--contact){padding-top:75px}}@media(max-width: 993px){.contact-form.svelte-1obljwm.svelte-1obljwm:not(.contact-form--contact){padding-top:50px}}.contact-form__inscription.svelte-1obljwm.svelte-1obljwm{display:flex;flex-direction:column}@media(min-width: 993px){.contact-form__inscription.svelte-1obljwm.svelte-1obljwm{align-items:center;justify-self:center;padding-left:105px;gap:58px}}@media(max-width: 992px){.contact-form__inscription.svelte-1obljwm.svelte-1obljwm{align-items:flex-end;gap:25px}}.contact-form.svelte-1obljwm .contact-form__title.svelte-1obljwm{color:white}.contact-form.svelte-1obljwm .contact-form__arrow.svelte-1obljwm{display:flex;position:relative;width:max-content}@media(max-width: 992px){.contact-form.svelte-1obljwm .contact-form__arrow-img.svelte-1obljwm{width:100px}}@media(max-width: 992px){.contact-form.svelte-1obljwm .contact-form__arrow.svelte-1obljwm{transform:rotate(180deg)}}@media(min-width: 993px){.contact-form.svelte-1obljwm .contact-form__arrow.svelte-1obljwm{align-self:baseline}}.contact-form__social-item.svelte-1obljwm.svelte-1obljwm{display:flex;gap:50px}.contact-form__social-text-wrapper.svelte-1obljwm.svelte-1obljwm{display:flex;flex-direction:column;gap:15px}.contact-form__social-image.svelte-1obljwm.svelte-1obljwm{width:32px;height:32px}.contact-form__social-map.svelte-1obljwm.svelte-1obljwm{display:flex;align-items:center;gap:15px}.contact-form__social-text-map.svelte-1obljwm.svelte-1obljwm{position:relative;text-decoration:underline;color:#97a2b6}@media(max-width: 768px){.contact-form__social-text-map.svelte-1obljwm.svelte-1obljwm{font-size:12px}}@media(min-width: 769px){.contact-form__social-text-map.svelte-1obljwm.svelte-1obljwm{font-size:14px}}.contact-form__social-arrow.svelte-1obljwm.svelte-1obljwm{display:flex}@media(min-width: 769px){.contact-form__social-arrow.svelte-1obljwm.svelte-1obljwm{filter:grayscale(1) brightness(37.5);opacity:0.5}}.contact-form__social-icons.svelte-1obljwm.svelte-1obljwm{display:flex;align-items:center;opacity:0.5;gap:15px}.contact-form__social-title.svelte-1obljwm.svelte-1obljwm{color:white}.contact-form__social-text.svelte-1obljwm.svelte-1obljwm{color:#bfc8d6}@media(max-width: 768px){.contact-form__social-text.svelte-1obljwm.svelte-1obljwm{font-size:14px}}@media(min-width: 769px){.contact-form__social-text.svelte-1obljwm.svelte-1obljwm{font-size:18px}}.contact-form__wrapper.svelte-1obljwm.svelte-1obljwm{display:grid;justify-content:space-between;border-radius:10px;background-color:#46506f}.contact-form__wrapper--end.svelte-1obljwm.svelte-1obljwm{justify-content:end}.contact-form--contact.svelte-1obljwm.svelte-1obljwm{background-color:#46506f}@media(min-width: 993px){.contact-form__wrapper.svelte-1obljwm.svelte-1obljwm{justify-items:start;grid-template-columns:0.85fr 1fr;gap:70px;padding:87px 55px 87px 75px}.contact-form__wrapper--contact.svelte-1obljwm.svelte-1obljwm{display:grid;gap:40px;grid-template-columns:repeat(2, 1fr);padding:0 0 0 0}.contact-form__wrapper--contact.svelte-1obljwm.svelte-1obljwm:last-of-type{padding-top:30px}.contact-form__wrapper--arrow.svelte-1obljwm.svelte-1obljwm{padding:0;gap:0}}@media(max-width: 992px){.contact-form__wrapper.svelte-1obljwm.svelte-1obljwm{grid-template-columns:1fr;flex-direction:column;gap:40px;padding:20px}.contact-form__wrapper--contact.svelte-1obljwm.svelte-1obljwm{padding:20px 0 0 0}.contact-form__wrapper--arrow.svelte-1obljwm.svelte-1obljwm{padding-top:80px;padding-bottom:34px;padding-left:0;padding-right:0}}.contact-form__inner.svelte-1obljwm.svelte-1obljwm{display:flex;flex-direction:column;justify-content:space-between}.contact-form__inner--contact.svelte-1obljwm.svelte-1obljwm{gap:55px}.contact-form__inner--contact.svelte-1obljwm .contact-form__social-item:first-of-type .contact-form__social-image-wrapper.svelte-1obljwm{transform:translateX(-3px)}@media(min-width: 993px){.contact-form.svelte-1obljwm .contact-form__inner.svelte-1obljwm{grid-column-start:auto}.contact-form.svelte-1obljwm .contact-form__wrapper--contact .contact-form__inner--grid.svelte-1obljwm{grid-column-start:2}.contact-form.svelte-1obljwm .contact-form__wrapper--contact .contact-form__inner.svelte-1obljwm{width:100%}}.contact-form__title.svelte-1obljwm.svelte-1obljwm{color:var(--primary-blue)}@media(max-width: 992px){.contact-form__title--start.svelte-1obljwm.svelte-1obljwm{text-align:end}}.contact-form__title-wrapper.svelte-1obljwm.svelte-1obljwm{display:flex;flex-direction:column;gap:20px}@media(min-width: 993px){.contact-form__title-wrapper.svelte-1obljwm.svelte-1obljwm{width:75%}}.contact-form__nav.svelte-1obljwm.svelte-1obljwm{display:flex;justify-content:space-between}@media(max-width: 992px){.contact-form__nav.svelte-1obljwm.svelte-1obljwm{display:none}}.contact-form__nav-item.svelte-1obljwm.svelte-1obljwm{color:white}.contact-form__nav-item.svelte-1obljwm.svelte-1obljwm:hover{text-shadow:0 0 1px white}.contact-form__email.svelte-1obljwm.svelte-1obljwm{color:#ffffff}@media(min-width: 993px){.contact-form__email.svelte-1obljwm.svelte-1obljwm{font-size:24px}}@media(max-width: 992px){.contact-form__email.svelte-1obljwm.svelte-1obljwm{font-size:18px}}.contact-form__form.svelte-1obljwm.svelte-1obljwm{display:flex;flex-direction:column}@media(max-width: 992px){.contact-form__form.svelte-1obljwm.svelte-1obljwm{gap:40px}}@media(min-width: 993px){.contact-form__form.svelte-1obljwm.svelte-1obljwm{gap:75px}}.contact-form__form-wrapper.svelte-1obljwm.svelte-1obljwm{display:flex;gap:55px}.contact-form__form-wrapper--column.svelte-1obljwm.svelte-1obljwm{flex-direction:column}@media(min-width: 996px) and (max-width: 1100px){.contact-form__form-wrapper.svelte-1obljwm.svelte-1obljwm{flex-direction:column;gap:40px;justify-content:space-between}}@media(min-width: 541px) and (max-width: 996px){.contact-form__form-wrapper.svelte-1obljwm.svelte-1obljwm{gap:40px;justify-content:space-between}}@media(max-width: 540px){.contact-form__form-wrapper.svelte-1obljwm.svelte-1obljwm{flex-direction:column;gap:40px}}.contact-form__button-wrapper.svelte-1obljwm.svelte-1obljwm{display:flex}@media(max-width: 1280px){.contact-form__button-wrapper.svelte-1obljwm.svelte-1obljwm{flex-wrap:wrap}}@media(max-width: 992px){.contact-form__button-wrapper.svelte-1obljwm.svelte-1obljwm{flex-direction:column;align-items:center;gap:20px}}@media(min-width: 993px){.contact-form__button-wrapper.svelte-1obljwm.svelte-1obljwm{align-items:flex-end;gap:25px}}.contact-form__form-policy.svelte-1obljwm.svelte-1obljwm{color:#bfc8d6}@media(min-width: 993px){.contact-form__form-policy.svelte-1obljwm.svelte-1obljwm{font-size:14px}}@media(max-width: 992px){.contact-form__form-policy.svelte-1obljwm.svelte-1obljwm{font-size:10px}}.contact-form__label.svelte-1obljwm.svelte-1obljwm{color:white}@media(min-width: 993px){.contact-form__label.svelte-1obljwm.svelte-1obljwm{font-size:32px}}@media(max-width: 992px){.contact-form__label.svelte-1obljwm.svelte-1obljwm{font-size:24px}}.contact-form__input-wrapper.svelte-1obljwm.svelte-1obljwm{display:flex;flex-direction:column;gap:10px;min-width:45%}.contact-form__input.svelte-1obljwm.svelte-1obljwm{resize:none;outline:none;width:100%;color:white;border-bottom:1px solid #0077ff;padding-top:10px}@media(max-width: 768px){.contact-form__input.svelte-1obljwm.svelte-1obljwm{height:60px;padding-bottom:10px}}@media(min-width: 769px){.contact-form__input.svelte-1obljwm.svelte-1obljwm{padding-bottom:20px}}.contact-form__input.svelte-1obljwm.svelte-1obljwm::placeholder{color:#bfc8d6}',
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$4);
  return `${``}
${`<section class="${"contact-form svelte-1obljwm"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"contact-form__wrapper svelte-1obljwm"}"><div class="${"contact-form__inner svelte-1obljwm"}"><div class="${"contact-form__title-wrapper svelte-1obljwm"}"><h1 class="${"h1 contact-form__title svelte-1obljwm"}">Contact <span class="${"highlight svelte-1obljwm"}">us</span></h1>
            <a href="${"mailto:" + escape(data.workingEmail, true)}" class="${"contact-form__email svelte-1obljwm"}">${escape(data.workingEmail)}</a></div>
          <nav class="${"contact-form__nav svelte-1obljwm"}">${each(data.formNavigationCollection.items, (items) => {
        return `<a${add_attribute("href", items.link, 0)} class="${"contact-form__nav-item svelte-1obljwm"}">${escape(items.title)} </a>`;
      })}</nav></div>
        ${``}</div>`;
    }
  })}</section>`}`;
});
const RichText_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".rich-text__wrapper.svelte-l74c7x{position:relative}.rich-text__wrapper.FullWidth.svelte-l74c7x{display:flex;flex-direction:column}@media(min-width: 993px){.rich-text__wrapper.FullWidth.svelte-l74c7x{gap:50px}}@media(max-width: 992px){.rich-text__wrapper.FullWidth.svelte-l74c7x{gap:65px}}.rich-text__wrapper.HalfWidth.svelte-l74c7x{display:grid}@media(min-width: 993px){.rich-text__wrapper.HalfWidth.svelte-l74c7x{grid-template-columns:1fr 1fr}}@media(max-width: 992px){.rich-text__wrapper.HalfWidth.svelte-l74c7x{gap:65px}}.rich-text__text.svelte-l74c7x{color:#07124a}.rich-text__text.svelte-l74c7x:first-of-type{text-indent:50px}@media(max-width: 768px){.rich-text__text.svelte-l74c7x{font-size:14px}}@media(min-width: 769px){.rich-text__text.svelte-l74c7x{font-size:18px}}.rich-text__text--secondary.svelte-l74c7x{color:#46506f}@media(max-width: 768px){.rich-text__text--secondary.svelte-l74c7x{font-size:14px}}@media(min-width: 769px){.rich-text__text--secondary.svelte-l74c7x{font-size:16px}}.rich-text__text--semibold.svelte-l74c7x{font-weight:500}@media(min-width: 769px){.rich-text__text--semibold.svelte-l74c7x{font-size:18px}}@media(max-width: 768px){.rich-text__text--semibold.svelte-l74c7x{font-size:14px}}@media(min-width: 769px){.rich-text__text--bold.svelte-l74c7x{font-size:24px;font-weight:500}}@media(max-width: 768px){.rich-text__text--bold.svelte-l74c7x{font-size:16px;font-weight:400}}.rich-text__text-wrapper.svelte-l74c7x{display:flex;flex-direction:column;gap:20px}.rich-text__image-wrapper.svelte-l74c7x{margin-top:10px;margin-bottom:10px;width:100%;height:400px;border-radius:10px;overflow:hidden}.rich-text__image.svelte-l74c7x{width:100%;height:100%;object-fit:cover}@media(min-width: 993px){.rich-text__arrow.svelte-l74c7x{top:498px;position:absolute;width:max-content}}@media(max-width: 992px){.rich-text__arrow.svelte-l74c7x{display:none}}",
  map: null
};
function getParagraphs(content) {
  return content.flatMap((node) => {
    if (node.nodeType === "paragraph") {
      return node.content;
    } else if (node.nodeType === "embedded-asset-block") {
      return node;
    }
    return [];
  });
}
const RichText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$3);
  return `<section class="${"rich-text"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"rich-text__wrapper " + escape(data.variant, true) + " svelte-l74c7x"}">${data.pageTitle == "Page Title" ? `<h1 class="${"h1 rich-text__title"}">${escape(data.title)}</h1>` : ``}
      ${data.pageTitle == "Section Title" ? `<h2 class="${"h2"}">${escape(data.title)}</h2>` : ``}
      ${data.variant == "HalfWidth" ? `<div class="${"rich-text__arrow svelte-l74c7x"}"><img src="${"../arrow-static.svg"}" alt="${"arrow"}"></div>` : ``}
      <div class="${"rich-text__text-wrapper svelte-l74c7x"}">${each(getParagraphs(data.richText.json.content), (paragraph) => {
        return `${paragraph.nodeType === "text" ? `${paragraph.marks && paragraph.marks.some((mark) => mark.type === "bold") ? `${data.pageTitle == "Page Title" ? `<p class="${"rich-text__text rich-text__text--semibold svelte-l74c7x"}">${escape(paragraph.value)}</p>` : ``}
              ${data.pageTitle == "Section Title" ? `<p class="${"rich-text__text rich-text__text--bold svelte-l74c7x"}">${escape(paragraph.value)}</p>` : ``}` : `${data.pageTitle == "Page Title" ? `${paragraph.value != " " ? `<p class="${"rich-text__text svelte-l74c7x"}">${escape(paragraph.value)}</p>` : ``}` : ``}
              ${data.pageTitle == "Section Title" ? `${paragraph.value != " " ? `<p class="${"rich-text__text rich-text__text--secondary svelte-l74c7x"}">${escape(paragraph.value)}</p>` : ``}` : ``}`}` : ``}
          ${paragraph.nodeType === "embedded-asset-block" ? `${each(data.richText.links.assets.block, (asset) => {
          return `${asset.sys.id === paragraph.data.target.sys.id ? `<div class="${"rich-text__image-wrapper svelte-l74c7x"}"><img class="${"rich-text__image svelte-l74c7x"}"${add_attribute("src", `${asset.url}`, 0)} alt="${"Embedded Asset"}">
                </div>` : ``}`;
        })}` : ``}`;
      })}</div></div>`;
    }
  })}
</section>`;
});
const Breadcrumps_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@media(min-width: 993px){.breadcrumps.svelte-db3310{padding-top:75px;padding-bottom:75px}}@media(max-width: 992px){.breadcrumps.svelte-db3310{padding-top:50px;padding-bottom:50px}}.breadcrumps--contact-us.svelte-db3310{background-color:#46506f}@media(min-width: 993px){.breadcrumps--contact-us.svelte-db3310{padding-bottom:130px}}.breadcrumps__wrapper.svelte-db3310{display:flex}.breadcrumps__item.svelte-db3310{font-size:14px;color:#97a2b6}.breadcrumps__item.svelte-db3310:not(.breadcrumps__item:last-child)::after{cursor:default;content:"/";padding:5px}.breadcrumps__item.svelte-db3310:last-of-type{pointer-events:none}',
  map: null
};
const Breadcrumps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$2);
  return `${``}
${`<section class="${"breadcrumps svelte-db3310"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"breadcrumps__wrapper svelte-db3310"}">${each(data.breadcrumpsListCollection.items, (item) => {
        return `<a${add_attribute("href", item.link, 0)} class="${"breadcrumps__item svelte-db3310"}">${escape(item.title)}</a>`;
      })}</div>`;
    }
  })}</section>`}`;
});
const HeroImage_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.hero-image__diagramm-wrapper.svelte-1bs0o8d.svelte-1bs0o8d{display:flex;width:max-content;align-items:flex-end;min-height:150px;max-height:150px;gap:5px;transform:translateY(-40%)}.hero-image__diagramm.svelte-1bs0o8d.svelte-1bs0o8d{background-color:#bfc8d6;display:flex;width:100%;color:#07124a;justify-content:center;align-items:flex-end;border-radius:12px;height:var(--height)}@media(min-width: 769px){.hero-image__diagramm.svelte-1bs0o8d.svelte-1bs0o8d{padding:10px 12px}}@media(max-width: 768px){.hero-image__diagramm.svelte-1bs0o8d.svelte-1bs0o8d{padding:5px 7px;font-size:10px}}.hero-image__diagramm.svelte-1bs0o8d.svelte-1bs0o8d:is(.hero-image__diagramm--blue){background-color:#0077ff;color:white}.hero-image__images.svelte-1bs0o8d.svelte-1bs0o8d{display:flex;right:50px;flex-direction:column;height:100%;justify-content:space-between;position:absolute}@media(max-width: 768px){.hero-image__images.svelte-1bs0o8d.svelte-1bs0o8d{top:0;right:25px}}@media(min-width: 769px){.hero-image__images.svelte-1bs0o8d.svelte-1bs0o8d{right:50px}}.hero-image__images-item.svelte-1bs0o8d.svelte-1bs0o8d{align-self:center}@media(min-width: 993px){.hero-image__images-item.svelte-1bs0o8d.svelte-1bs0o8d{width:88px;height:182px;transform:translateY(30%)}}@media(max-width: 992px){.hero-image__images-item.svelte-1bs0o8d.svelte-1bs0o8d{width:38px;height:153px;transform:translateY(31%)}}@media(min-width: 769px) and (max-width: 992px){.hero-image__images-item.svelte-1bs0o8d.svelte-1bs0o8d{width:70px;height:172px;transform:translateY(36%)}}.hero-image__wrapper.svelte-1bs0o8d.svelte-1bs0o8d{display:flex;justify-content:space-between}.hero-image__button.svelte-1bs0o8d.svelte-1bs0o8d{border:1px solid #0077ff;padding:10px 20px;border-radius:5px;text-transform:uppercase}.hero-image__button.svelte-1bs0o8d.svelte-1bs0o8d:first-of-type{background-color:#0077ff;color:white}.hero-image__button.svelte-1bs0o8d.svelte-1bs0o8d:last-of-type{background-color:white;color:#0077ff}.hero-image__bottom.svelte-1bs0o8d.svelte-1bs0o8d{border-bottom:2px solid #0077ff}@media(min-width: 993px){.hero-image__bottom.svelte-1bs0o8d.svelte-1bs0o8d{padding-bottom:170px}}@media(max-width: 768px){.hero-image__wrapper.svelte-1bs0o8d.svelte-1bs0o8d{flex-direction:column;gap:20px}}.hero-image__text-wrapper.svelte-1bs0o8d.svelte-1bs0o8d{display:flex;flex-direction:column;gap:20px}@media(min-width: 769px){.hero-image__text-wrapper.svelte-1bs0o8d.svelte-1bs0o8d{width:48%;height:fit-content}}.hero-image__text.svelte-1bs0o8d.svelte-1bs0o8d{display:flex;font-size:18px;color:#97a2b6}@media(min-width: 769px) and (max-width: 992px){.hero-image__text.svelte-1bs0o8d.svelte-1bs0o8d{width:80%}}@media(min-width: 993px){.hero-image__text.svelte-1bs0o8d.svelte-1bs0o8d{width:61%}}@media(max-width: 769px){.hero-image__text.svelte-1bs0o8d.svelte-1bs0o8d{font-size:14px}}.hero-image__link.svelte-1bs0o8d.svelte-1bs0o8d{position:relative;color:#97a2b6;font-size:14px;width:max-content}.hero-image__link.svelte-1bs0o8d.svelte-1bs0o8d::after{position:absolute;content:"";right:-30px;width:18px;height:15px;object-fit:cover;background-size:cover;opacity:0.3;background-image:url("../Group 109.svg")}@media(max-width: 768px){.hero-image__link.svelte-1bs0o8d.svelte-1bs0o8d{order:4}}.hero-image__categories.svelte-1bs0o8d.svelte-1bs0o8d{display:flex;flex-wrap:wrap;gap:10px}.hero-image__category.svelte-1bs0o8d.svelte-1bs0o8d{font-size:14px;padding:5px 15px;background-color:#07124a;border-radius:5px;color:white;width:max-content}.hero-image__image-wrapper.svelte-1bs0o8d.svelte-1bs0o8d{border-radius:10px;position:relative}.hero-image__circle.svelte-1bs0o8d.svelte-1bs0o8d{display:flex;align-items:center;justify-content:center;position:absolute;content:" ";border-radius:100%;z-index:1;background:conic-gradient(#0077ff 0% calc(var(--percent) + 0.2%), #07124a calc(var(--percent) + 0.3%) 100%)}.hero-image__circle-num.svelte-1bs0o8d.svelte-1bs0o8d{position:relative;display:flex;align-items:center;justify-content:center;font-size:34px;color:#07124a;width:114px;z-index:3;height:114px;background-color:white;border-radius:100%}@media(min-width: 993px){.hero-image__circle.svelte-1bs0o8d.svelte-1bs0o8d{width:195px;height:195px;left:-97.5px;bottom:-53.5px}}@media(min-width: 769px) and (max-width: 992px){.hero-image__circle.svelte-1bs0o8d.svelte-1bs0o8d{width:145px;height:145px;left:-72.5px;bottom:-48.3333333333px}.hero-image__circle-num.svelte-1bs0o8d.svelte-1bs0o8d{width:90px;height:90px}}@media(min-width: 769px){.hero-image__image-wrapper.svelte-1bs0o8d.svelte-1bs0o8d{width:48%;height:500px}.hero-image__image-wrapper--service.svelte-1bs0o8d.svelte-1bs0o8d{height:355px;position:relative;left:50px}}@media(max-width: 768px){.hero-image__circle.svelte-1bs0o8d.svelte-1bs0o8d{width:100px;height:100px;left:-16.5px;bottom:-33px}.hero-image__circle-num.svelte-1bs0o8d.svelte-1bs0o8d{font-size:16px;width:60px;height:60px}.hero-image__image-wrapper.svelte-1bs0o8d.svelte-1bs0o8d{width:100%;height:267px}.hero-image__image-wrapper--service.svelte-1bs0o8d.svelte-1bs0o8d{height:219px;position:relative;left:25px}}@media(min-width: 769px){.hero-image__image-wrapper--hover.svelte-1bs0o8d:hover .hero-image__image.svelte-1bs0o8d{height:100%}}.hero-image__image.svelte-1bs0o8d.svelte-1bs0o8d{transition:0.3s ease-in-out;border-radius:10px;object-fit:cover;width:100%}@media(min-width: 769px){.hero-image__image.svelte-1bs0o8d.svelte-1bs0o8d{height:75.4%}.hero-image__image--service.svelte-1bs0o8d.svelte-1bs0o8d{position:absolute;height:100%}}@media(max-width: 768px){.hero-image__image.svelte-1bs0o8d.svelte-1bs0o8d{height:100%}.hero-image__image--service.svelte-1bs0o8d.svelte-1bs0o8d{height:219px}}@media(min-width: 769px) and (max-width: 992px){.hero-image.svelte-1bs0o8d .hero-image__bottom.svelte-1bs0o8d{padding-bottom:75px}}@media(max-width: 768px){.hero-image.svelte-1bs0o8d .hero-image__image-wrapper.svelte-1bs0o8d{padding-top:100px}.hero-image.svelte-1bs0o8d .hero-image__image-wrapper--service.svelte-1bs0o8d{padding-top:0}.hero-image.svelte-1bs0o8d .hero-image__bottom.svelte-1bs0o8d{padding-bottom:105px;gap:100px}}',
  map: null
};
const HeroImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  console.log(data.diagramListCollection.items);
  let values = [];
  data.diagramListCollection.items.forEach((el) => {
    values.push(el.title);
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `${`<section class="${"hero-image svelte-1bs0o8d"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"hero-image__wrapper svelte-1bs0o8d"}"><div class="${"hero-image__text-wrapper svelte-1bs0o8d"}"><h1 class="${"h1"}">${escape(data.title)}</h1>
          <p class="${"hero-image__text svelte-1bs0o8d"}">${escape(data.text)}</p>
          ${data.linkData ? `<a${add_attribute("href", data.linkData.link, 0)} class="${"hero-image__link svelte-1bs0o8d"}">${escape(data.linkData.title)}</a>` : ``}
          <div class="${"hero-image__categories svelte-1bs0o8d"}">${each(data.tagListCollection.items, (tag) => {
        return `<p class="${"hero-image__category svelte-1bs0o8d"}">${escape(tag.title)}</p>`;
      })}</div></div>
        <div class="${"hero-image__image-wrapper hero-image__image-wrapper--hover svelte-1bs0o8d"}"><img${add_attribute("src", data.image.url, 0)} alt="${""}" class="${"hero-image__image svelte-1bs0o8d"}"></div></div>`;
    }
  })}</section>`}

${``}`;
});
const Hubpage_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'destyle.css/destyle.css';.card__image-icon{position:absolute;top:20px;right:20px}.cases{padding-top:150px}.cases__tags{display:flex;flex-wrap:wrap;gap:10px}@media(min-width: 993px){.cases__tags{padding-bottom:50px}.cases:not(:has(.cases__tags)) .cases__title{padding-bottom:228px}.cases:has(.cases__tags) .cases__title{padding-bottom:150px}}@media(max-width: 992px){.cases__tags{padding-bottom:20px}.cases:not(:has(.cases__tags)) .cases__title{padding-bottom:150px}.cases:has(.cases__tags) .cases__title{padding-bottom:62px}}.cases__tag{background-color:white;border:1px solid #07124a;border-radius:5px;color:#07124a;padding:5px 15px;cursor:pointer}.cases__tag--active{color:white;background-color:#07124a}@media(max-width: 992px){.cases__tag{font-size:14px}}.cases__items{padding-top:20px;display:flex;flex-wrap:wrap;border-top:2px solid #0077ff}@media(max-width: 768px){.cases__items{row-gap:75px}}@media(min-width: 769px) and (max-width: 992px){.cases__items{column-gap:30px;row-gap:100px}}@media(min-width: 993px){.cases__items{padding-top:50px;column-gap:50px;row-gap:150px}.cases__items.cases__items--services{column-gap:unset;justify-content:space-between}.cases__items.cases__items--services .cases__item{max-width:30.7%}}.cases__item{display:flex;flex-direction:column;gap:10px}@media(min-width: 769px){.cases__items .cases__item{flex:1 1 auto;gap:25px}}@media(max-width: 768px){.cases__item{gap:20px;width:100%}}.cases__item-image-wrapper{position:relative;width:100%;border-radius:10px;overflow:hidden;transition:0.3s ease-in-out}.cases__item:is(.Default) .cases__item-image:hover{transform:scale(1)}@media(min-width: 993px){.cases__items.cases__items--services .cases__item .cases__item-image-wrapper{height:388px}.cases__item-image-wrapper{height:500px}}@media(min-width: 769px) and (max-width: 992px){.cases__item-image-wrapper{height:325px}}@media(max-width: 768px){.cases__item-image-wrapper{height:267px}}.cases__item:is(.Default) .cases__item-image{transition:0.3s ease-in-out;transform:scale(1.2);width:100%;height:100%;object-fit:cover}.cases__text-wrapper{display:flex;flex-direction:column;gap:10px}.cases__item-name{font-size:18px;color:#07124a;font-weight:bold}.cases__item-category{font-size:18px;color:#97a2b6}.cases__item-tags{display:flex;flex-wrap:wrap;gap:10px}.cases__item-tag{font-size:14px;border-radius:5px;border:1px solid #07124a;color:#07124a;padding:5px 15px}@media(min-width: 993px){.cases__item:is(.FullWidth){width:100%}.cases__item:is(.HalfHeight){max-width:47%;min-height:500px}.cases__item:is(.HalfHeight) .cases__item-image-wrapper{height:250px}.cases__item:is(.FullWidth):hover .cases__item-image-wrapper{width:48%}.cases__item:is(.HalfHeight):hover .cases__item-image-wrapper{height:100%}}@media(min-width: 769px){.cases__item:is(.Default){max-width:48%}}",
  map: null
};
const Hubpage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { clearActive, handleTogleActive, activeTags, section } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="${"cases"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"cases__wrapper"}"><h1 class="${"cases__title h1"}">${escape(data.section.title)}</h1>
      ${section.title == "Blog" ? `<div class="${"cases__tags"}" style="${"justify-content:center"}"><button${add_attribute("class", `cases__tag ${data.activeTags.length === 0 ? "cases__tag--active" : ""}`, 0)}>All topics</button>
          ${each(data.section.tags, (tag) => {
        return `<button${add_attribute(
          "class",
          `cases__tag ${data.activeTags.includes(tag) ? "cases__tag--active" : ""}`,
          0
        )}>${escape(tag)}</button>`;
      })}</div>` : ``}

      ${section.title == "Cases" ? `<div class="${"cases__tags"}"><button type="${"button"}"${add_attribute("class", `cases__tag ${data.activeTags.length === 0 ? "cases__tag--active" : ""}`, 0)}>All projects</button>
          ${each(section.tags, (tag) => {
        return `<button type="${"button"}"${add_attribute(
          "class",
          `cases__tag ${data.activeTags.includes(tag) ? "cases__tag--active" : ""}`,
          0
        )}>${escape(tag)}</button>`;
      })}</div>` : ``}
      ${section.title == "Services" ? `<div class="${"cases__items cases__items--services"}">${each(data.section.cards, (card) => {
        return `${data.activeTags.length === 0 || card.tagList?.some((el) => data.activeTags.includes(el)) ? `<div class="${"cases__item " + escape(card.blogCardVariation, true)}"><div class="${"cases__item-image-wrapper"}"><img${add_attribute("src", card.imageCard.url, 0)} alt="${""}" class="${"cases__item-image"}">
                  <a${add_attribute("href", card.url, 0)}><img src="${"feather-external-link.svg"}" alt="${""}" class="${"card__image-icon"}">
                  </a></div>
                <div class="${"cases__text-wrapper"}"><a${add_attribute("href", card.url, 0)} class="${"cases__item-name"}">${escape(card.titleCard)}</a>
                  ${card.subtitleCard != null ? `<a${add_attribute("href", card.url, 0)} class="${"cases__item-category"}">${escape(card.subtitleCard)}</a>` : ``}
                  <div class="${"cases__item-tags"}">${section.title == "Cases" ? `${card.tagList ? `${each(card.tagList, (tag) => {
          return `<div class="${"cases__item-tag"}">${escape(tag)}</div>`;
        })}` : ``}` : ``}
                  </div></div>
              </div>` : ``}`;
      })}</div>` : ``}
      ${section.title != "Services" ? `<div class="${"cases__items"}">${each(data.section.cards, (card) => {
        return `${data.activeTags.length === 0 || card.tagList?.some((el) => data.activeTags.includes(el)) ? `<div class="${"cases__item " + escape(card.blogCardVariation, true)}">${section.title == "Blog" ? `<div class="${"cases__item-image-wrapper cases__item-image-wrapper--blog"}"><img${add_attribute("src", card.imageCard.url, 0)} alt="${""}" class="${"cases__item-image"}">
                    <a${add_attribute("href", card.url, 0)}><img src="${"feather-external-link.svg"}" alt="${""}" class="${"card__image-icon"}"></a>
                  </div>` : ``}
                ${section.title != "Blog" ? `<div class="${"cases__item-image-wrapper"}"><img${add_attribute("src", card.imageCard.url, 0)} alt="${""}" class="${"cases__item-image"}">
                    <a${add_attribute("href", card.url, 0)}><img src="${"feather-external-link.svg"}" alt="${""}" class="${"card__image-icon"}"></a>
                  </div>` : ``}
                <div class="${"cases__text-wrapper"}"><a${add_attribute("href", card.url, 0)} class="${"cases__item-name"}">${escape(card.titleCard)}</a>
                  ${card.subtitleCard != null ? `<a${add_attribute("href", card.url, 0)} class="${"cases__item-category"}">${escape(card.subtitleCard)}</a>` : ``}
                  <div class="${"cases__item-tags"}">${section.title == "Cases" ? `${card.tagList ? `${each(card.tagList, (tag) => {
          return `<div class="${"cases__item-tag"}">${escape(tag)}</div>`;
        })}` : ``}` : ``}
                  </div></div>
              </div>` : ``}`;
      })}</div>` : ``}</div>`;
    }
  })}
</section>`;
});
const Sections = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Breadcrumps,
  Cards: GridContent,
  Faq: GridContent,
  Footer,
  Form,
  Header,
  Hero,
  HeroImage,
  Hubpage,
  ImageWithText,
  Indicator: GridContent,
  Methods: GridContent,
  Ourmethods,
  RichText,
  Seo: GridContent,
  Stages,
  TextContentImage
}, Symbol.toStringTag, { value: "Module" }));
const style = "";
export {
  Hubpage as H,
  Sections as S
};
