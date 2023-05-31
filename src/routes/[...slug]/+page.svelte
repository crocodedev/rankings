<script>
  import * as Sections from '$lib/sections'
  import '$lib/css/style.css'
  export let data
  $: sections = data.sectionsCollection.items
</script>

<svelte:head>
  <title>{data.name}</title>
  {#if data.seo}
    {#if data.seo.description}
      <meta name="description" content={data.seo.description} />
    {/if}
    {#if data.seo.description}
      <meta property="og:image:url" content={data.seo.image.url} />
    {/if}
    {#if data.seo.description}
      <meta property="og:image:width" content={data.seo.image.width} />
    {/if}
    {#if data.seo.description}
      <meta property="og:image:height" content={data.seo.image.height} />
    {/if}
    {#if data.seo.description}
      <meta property="og:title" content={data.seo.title} />
    {/if}
    {#if data.seo.description}
      <meta property="og:description" content={data.seo.description} />
    {/if}
    {#if data.seo.description}
      <meta property="og:type" content={data.seo.ogype} />
    {/if}
    {#if data.seo.description}
      <meta name="keywords" content={data.seo.keywords} />
    {/if}
  {/if}
</svelte:head>

{#each sections.sort((a, b) => a.position - b.position) as section}
  <svelte:component this={Sections[section?.component]} data={section} />
{/each}

<div><input type="hidden" name="form-name" value="contact-form" /></div>

<style global lang="scss">
  @import 'destyle.css/destyle.css';
</style>
