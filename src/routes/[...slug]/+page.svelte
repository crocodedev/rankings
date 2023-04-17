<script>
  import * as Sections from '$lib/sections'
  import '$lib/css/style.css'
  export let data

  const sections = data.sectionsCollection.items
  console.log(data)
</script>

<svelte:head>
  <title>{data.name}</title>
</svelte:head>

<div>
  {#each sections as section}
    <svelte:component this={Sections[section?.component]} data={section} />
  {/each}
</div>

<style global lang="scss">
  @import 'destyle.css/destyle.css';
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');

  .hero {
    &__title {
      font-weight: bold;
      font-size: 72px;
      color: #07124a;
    }
  }
</style>
