import { c as create_ssr_component } from "../../chunks/index3.js";
const font = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
