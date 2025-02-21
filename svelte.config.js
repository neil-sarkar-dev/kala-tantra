import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: false
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/kala-tantra' : ''
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Skip 404 errors when prerendering
				if (message.includes('404')) {
					return;
				}
				// Throw other errors
				throw new Error(message);
			}
		}
	},
	
	extensions: ['.svelte', '.md'],
	
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				_: './src/routes/chapters/_chapter.svelte'
			}
		})
	]
};

export default config;
