<script>
  // Props automatically passed by mdsvex
  export let title = '';
</script>

<article>
  {#if title}
    <h1>{title}</h1>
  {/if}
  <slot />
</article>

<style>
  article {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
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