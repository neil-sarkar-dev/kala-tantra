<script lang="ts">
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import NavMenu from '$lib/components/NavMenu.svelte';
	import '../app.css';
	
	const chapters = [
		{ title: 'Chapter 1', path: `${base}/chapters/chapter_01`, number: 1 },
		{ title: 'Chapter 2', path: `${base}/chapters/chapter_02`, number: 2 }
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