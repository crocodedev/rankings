export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["arrow-static.svg","Arrow.svg","boxed-water.png","casesimg.png","favicon.png","feather-external-link.svg","fonts/Lexend/Lexend-Black.woff","fonts/Lexend/Lexend-Black.woff2","fonts/Lexend/Lexend-Bold.woff","fonts/Lexend/Lexend-Bold.woff2","fonts/Lexend/Lexend-ExtraBold.woff","fonts/Lexend/Lexend-ExtraBold.woff2","fonts/Lexend/Lexend-ExtraLight.woff","fonts/Lexend/Lexend-ExtraLight.woff2","fonts/Lexend/Lexend-Light.woff","fonts/Lexend/Lexend-Light.woff2","fonts/Lexend/Lexend-Medium.woff","fonts/Lexend/Lexend-Medium.woff2","fonts/Lexend/Lexend-Regular.woff","fonts/Lexend/Lexend-Regular.woff2","fonts/Lexend/Lexend-SemiBold.woff","fonts/Lexend/Lexend-SemiBold.woff2","fonts/Lexend/Lexend-Thin.woff","fonts/Lexend/Lexend-Thin.woff2","Graph 3.svg","Graphs.svg","Group 109.svg","Group 11.svg","Group 150.svg","Group 151.svg","Group 160.svg","Group 161.svg","Group 162.svg","Group 163.svg","Group 242.svg","Icon awesome-facebook w.svg","Icon awesome-facebook.svg","Icon awesome-instagram w.svg","Icon awesome-instagram.svg","Icon awesome-linkedin w.svg","Icon awesome-linkedin.svg","Icon awesome-twitter w.svg","Icon awesome-twitter.svg","logo.svg","mail.svg","map-arrow.svg","map-pin.svg","phone.svg","sarah-dorweiler-Rv2kTIuya_I-unsplash.png","thumbs-up.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.9577d8ee.js","app":"_app/immutable/entry/app.48eaf6e1.js","imports":["_app/immutable/entry/start.9577d8ee.js","_app/immutable/chunks/index.31eebf3d.js","_app/immutable/chunks/singletons.d245c0b4.js","_app/immutable/entry/app.48eaf6e1.js","_app/immutable/chunks/index.31eebf3d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				id: "/netlifyneedsthisformyform",
				pattern: /^\/netlifyneedsthisformyform\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/sitemap.xml/_server.js')
			},
			{
				id: "/[slug=hubpage]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","matcher":"hubpage","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,3], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[slug=hubpage]/[slug]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"slug","matcher":"hubpage","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,,], errors: [1,3,4], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[...slug]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"slug","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,,], errors: [1,2], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: hubpage } = await import ('./entries/matchers/hubpage.js')
			return { hubpage };
		}
	}
};
