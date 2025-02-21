<script lang="ts">
	import { slide } from 'svelte/transition';
	import { base } from '$app/paths';
	import { theme } from '$lib/stores/theme';
	let isOpen = false;
	export let chapters: { path: string; title: string; number: number }[] = [];

	function toggleTheme() {
		$theme = $theme === 'dark' ? 'light' : 'dark';
	}
</script>

<nav class="nav-menu">
	<button class="hamburger" on:click={() => isOpen = !isOpen} aria-label="Toggle navigation menu">
		<div class:open={isOpen}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</button>

	{#if isOpen}
		<div class="menu-items" transition:slide>
			<a href="{base}/" class="menu-item home">Home</a>
			<button class="menu-item theme-toggle" on:click={toggleTheme}>
				{$theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
			</button>
			{#each chapters as chapter}
				<a href={chapter.path} class="menu-item">
					{chapter.title}
				</a>
			{/each}
		</div>
	{/if}
</nav>

<style>
	.nav-menu {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		padding: 1rem;
	}

	.hamburger {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
	}

	.hamburger div {
		width: 30px;
		height: 25px;
		position: relative;
	}

	.hamburger span {
		display: block;
		position: absolute;
		height: 3px;
		width: 100%;
		background: var(--text-color, #333);
		border-radius: 3px;
		transition: all 0.3s ease;
	}

	.hamburger span:nth-child(1) { top: 0; }
	.hamburger span:nth-child(2) { top: 50%; transform: translateY(-50%); }
	.hamburger span:nth-child(3) { bottom: 0; }

	.hamburger div.open span:nth-child(1) {
		transform: rotate(45deg);
		top: 11px;
	}

	.hamburger div.open span:nth-child(2) {
		opacity: 0;
	}

	.hamburger div.open span:nth-child(3) {
		transform: rotate(-45deg);
		bottom: 11px;
	}

	.menu-items {
		position: fixed;
		top: 60px;
		left: 0;
		background: var(--bg-color, white);
		box-shadow: 0 2px 5px rgba(0,0,0,0.1);
		padding: 1rem;
		min-width: 200px;
	}

	.menu-item {
		display: block;
		padding: 0.5rem 1rem;
		text-decoration: none;
		color: var(--text-color, #333);
	}

	.menu-item:hover {
		background: #f0f0f0;
	}

	.menu-item.home {
		border-bottom: 1px solid #eee;
		margin-bottom: 0.5rem;
		padding-bottom: 1rem;
	}

	.theme-toggle {
		background: none;
		border: none;
		cursor: pointer;
		width: 100%;
		text-align: left;
		font-size: inherit;
		border-bottom: 1px solid var(--border-color, #eee);
		margin-bottom: 0.5rem;
		padding-bottom: 1rem;
	}
</style>