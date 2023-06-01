import adapter from '@sveltejs/adapter-netlify'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: sveltePreprocess({
    preserve: ['ld+json'],
  }),
  kit: {
    prerender: {
      concurrency: 2,
      crawl: true,
      entries: ['/', '/cases', '/blog', '/services'],
    },
    inlineStyleThreshold: Infinity,
    adapter: adapter(),
  },
}
