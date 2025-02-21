import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/kala-tantra' : ''
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
