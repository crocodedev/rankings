import * as server from '../entries/pages/_...slug_/_page.server.js';
import stylesheet_1 from '../stylesheets/1.js';
import stylesheet_3 from '../stylesheets/3.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/_...slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[...slug]/+page.server.js";
export const imports = ["_app/immutable/entry/_...slug_-page.svelte.df6dafe8.js","_app/immutable/chunks/index.31eebf3d.js","_app/immutable/chunks/style.b239638a.js","_app/immutable/chunks/stores.54da5283.js","_app/immutable/chunks/singletons.d245c0b4.js","_app/immutable/chunks/index.ffbaf675.js"];
export const stylesheets = ["_app/immutable/assets/_page.f24990a2.css","_app/immutable/assets/style.5f6a84ed.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/_page.f24990a2.css": stylesheet_1,
	"_app/immutable/assets/style.5f6a84ed.css": stylesheet_3
});
