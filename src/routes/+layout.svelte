<script lang="ts">
	import NavMenu from '$lib/components/NavMenu.svelte';
	import { onMount } from 'svelte';

	let chapters: { title: string; path: string; number: number }[] = [];

	onMount(async () => {
		try {
			const response = await fetch('/api/chapters');
			chapters = await response.json();
		} catch (e) {
			console.error('Error loading chapters:', e);
		}
	});
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
</style>