<script>
import { base } from '$app/paths';
import { onMount } from 'svelte';

/** @type {import('./$types').PageData} */
export let data;

let chapters = [];

onMount(async () => {
    const response = await fetch(`${base}/api/chapters`);
    chapters = await response.json();
});

$: currentChapterIndex = chapters.findIndex(c => 
    c.path.endsWith(data.slug) || c.path.endsWith(`${data.slug}/`)
);
$: prevChapter = currentChapterIndex > 0 ? chapters[currentChapterIndex - 1] : null;
$: nextChapter = currentChapterIndex < chapters.length - 1 ? chapters[currentChapterIndex + 1] : null;
</script>

<nav class="top-nav">
    <a href="{base}/" class="home-button">Home</a>
</nav>

<article>
    {@html data.html}
</article>

<nav class="chapter-navigation">
    {#if prevChapter}
        <a href={prevChapter.path} class="nav-button prev">← Previous Chapter</a>
    {/if}
    {#if nextChapter}
        <a href={nextChapter.path} class="nav-button next">Next Chapter →</a>
    {/if}
</nav>

<style>
    article {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
    }
    
    .chapter-navigation {
        max-width: 500px;
        margin: 2rem auto;
        display: flex;
        justify-content: space-between;
        padding: 0 2rem;
        gap: 1rem;
    }

    .nav-button {
        background: #333;
        color: white;
        padding: 0.8rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        transition: background 0.2s;
    }

    .nav-button:hover {
        background: #444;
    }

    .top-nav {
        padding: 1rem 2rem;
        max-width: 800px;
        margin: 0 auto;
    }

    .home-button {
        display: inline-block;
        background: #333;
        color: white;
        padding: 0.8rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        transition: background 0.2s;
    }

    .home-button:hover {
        background: #444;
    }

    :global(article h1) {
        font-size: 2.5em;
        margin-bottom: 1em;
    }
    :global(article h2) {
        font-size: 1.8em;
        margin: 1.5em 0 0.8em;
    }
    :global(article h3) {
        font-size: 1.4em;
        margin: 1.2em 0 0.6em;
    }
    :global(article p) {
        line-height: 1.6;
        margin: 1em 0;
    }
</style>