<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let chapters: { title: string; path: string; number: number }[] = [];

	onMount(async () => {
		const response = await fetch(`${base}/api/chapters`);
		chapters = await response.json();
	});
</script>

<div class="container">
	<h1>Kala Tantra</h1>
	<h2>Contents</h2>
	<nav class="chapters-list">
		<ul>
			{#each chapters as chapter}
				<li>
					<a href={chapter.path}>
						<span class="chapter-number">Chapter {chapter.number}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	.container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem;
	}

	@media (max-width: 600px) {
		.container {
			padding: 2rem 1rem;
		}
	}

	h1 {
		font-size: 2.5em;
		margin-bottom: 1em;
		text-align: center;
	}

	h2 {
		font-size: 1.8em;
		margin-bottom: 1.5em;
		color: var(--text-color);
	}

	.chapters-list {
		margin-top: 2rem;
	}

	ul {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(8, auto);
		grid-auto-flow: column;
		gap: 1rem;
		column-gap: 2rem;
	}
	
	li {
		margin: 0;
		transition: transform 0.2s;
	}

	li:hover {
		transform: translateX(10px);
	}
	
	a {
		display: block;
		color: var(--text-color);
		text-decoration: none;
		font-size: 1.2em;
		padding: 0.7rem 1rem;
		background: var(--chapter-bg);
		border-radius: 8px;
		transition: background 0.2s, transform 0.2s;
	}
	
	a:hover {
		background: var(--chapter-bg-hover);
	}

	.chapter-number {
		font-weight: 500;
	}

	@media (max-width: 768px) {
		ul {
			grid-template-columns: 1fr;
		}
	}
</style>
