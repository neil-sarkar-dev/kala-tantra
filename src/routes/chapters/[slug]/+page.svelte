<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let currentChapter;
    let prevChapter;
    let nextChapter;

    async function loadChapters() {
        const response = await fetch('/api/chapters');
        const chapters = await response.json();
        const currentIndex = chapters.findIndex(c => c.path === `/chapters/${data.slug}`);
        currentChapter = chapters[currentIndex];
        prevChapter = chapters[currentIndex - 1];
        nextChapter = chapters[currentIndex + 1];
    }

    $: if (data.slug) {
        loadChapters();
    }
</script>

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
        position: fixed;
        bottom: 2rem;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        padding: 0 2rem;
        max-width: 800px;
        margin: 0 auto;
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