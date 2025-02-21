<script lang="ts">
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import NavMenu from '$lib/components/NavMenu.svelte';
	import '../app.css';
	
	const chapters = [
		{ title: 'Chapter 1', path: `${base}/chapters/chapter_01`, number: 1 },
		{ title: 'Chapter 2', path: `${base}/chapters/chapter_02`, number: 2 },
		{ title: 'Chapter 3', path: `${base}/chapters/chapter_03`, number: 3 },
		{ title: 'Chapter 4', path: `${base}/chapters/chapter_04`, number: 4 },
		{ title: 'Chapter 5', path: `${base}/chapters/chapter_05`, number: 5 },
		{ title: 'Chapter 6', path: `${base}/chapters/chapter_06`, number: 6 },
		{ title: 'Chapter 7', path: `${base}/chapters/chapter_07`, number: 7 },
		{ title: 'Chapter 8', path: `${base}/chapters/chapter_08`, number: 8 },
		{ title: 'Chapter 9', path: `${base}/chapters/chapter_09`, number: 9 },
		{ title: 'Chapter 10', path: `${base}/chapters/chapter_10`, number: 10 },
		{ title: 'Chapter 11', path: `${base}/chapters/chapter_11`, number: 11 },
		{ title: 'Chapter 12', path: `${base}/chapters/chapter_07`, number: 12 },
		{ title: 'Chapter 13', path: `${base}/chapters/chapter_08`, number: 13 },
		{ title: 'Chapter 14', path: `${base}/chapters/chapter_09`, number: 14 },
		{ title: 'Chapter 15', path: `${base}/chapters/chapter_10`, number: 15 },
		{ title: 'Chapter 16', path: `${base}/chapters/chapter_11`, number: 16 }
	];
</script>

<NavMenu {chapters} />
<main>
	<slot />
</main>

<style>
	main {
		padding: 60px 20px 20px 20px;
		max-width: 1200px;
		margin: 0 auto;
	}

	@media (max-width: 600px) {
		main {
			padding: 60px 10px 20px 10px;
		}
	}
</style>