<script>
  export let data
  const {
    pageCollection: { items },
  } = data
  const { name, url, sectionsCollection } = items[0]
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<div>
  <p>{JSON.stringify(sectionsCollection)}</p>
</div>

<style global>
  @import 'destyle.css/destyle.css';
</style>
