<script lang="ts">
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

<h1>Book Contents</h1>

<nav>
	<ul>
		{#each chapters as chapter}
			<li>
				<a href={chapter.path}>{chapter.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		list-style: none;
		padding: 0;
	}
	
	li {
		margin: 1em 0;
	}
	
	a {
		color: #333;
		text-decoration: none;
		font-size: 1.2em;
	}
	
	a:hover {
		text-decoration: underline;
	}
</style>
