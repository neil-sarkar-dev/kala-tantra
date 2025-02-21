<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let chapters: { title: string; path: string; number: number }[] = [];

	onMount(async () => {
		const response = await fetch(`${base}/api/chapters`);
		chapters = await response.json();
	});
</script>

<div class="page-container home-page">
	<div class="content-wrapper">
		<div class="container">
			<h1>Kala Tantra</h1>
			<div class="draft-date">Draft, 20 Feb 2025</div>
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
	</div>
</div>

<footer class="copyright">
    © 2025 Neil Sarkar. All rights reserved.
</footer>

<style>
	.page-container {
		min-height: 100vh;
		width: 100%;
		background-image: url('/images/home_background.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.content-wrapper {
		position: relative;
		min-height: 100vh;
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}

	.container {
		position: relative;
		max-width: 1200px;
		margin: 2rem auto;
		padding: 2rem;
		background-color: rgba(var(--background-color-rgb), 0.9);
		backdrop-filter: blur(5px);
		border-radius: 16px;
	}

	@media (max-width: 600px) {
		.container {
			padding: 2rem 1rem;
		}
	}

	h1 {
		font-size: 2.5em;
		margin-bottom: 0.5em;
		text-align: center;
	}

	.draft-date {
		text-align: center;
		color: #999;
		font-size: 0.9em;
		margin-bottom: 2em;
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

	@media (max-width: 768px) {
		ul {
			grid-template-columns: repeat(2, 1fr);
			gap: 0.5rem;
			column-gap: 1rem;
		}
		a {
			font-size: 1em;
			padding: 0.5rem 0.75rem;
		}
	}
	@media (max-width: 480px) {
		ul {
			gap: 0.4rem;
			column-gap: 0.75rem;
		}
		a {
			font-size: 0.9em;
			padding: 0.4rem 0.6rem;
		}
	}

	.home-page .container {
		max-width: 1200px;
		width: 100%;
	}

	.copyright {
		text-align: center;
		color: #999;
		font-size: 0.9em;
		padding: 2rem;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
