<script>
  // export let data
  // const {
  //   pageCollection: { items },
  // } = data
  // const { name, url, sectionsCollection } = items[0]

  import Breadcrumps from '../../lib/components/breadcrumps.svelte'
  import Header from '../../lib/components/header.svelte'
  import Indicator from '../../lib/components/indicator.svelte'
</script>

<svelte:head>
  <!-- <title>{name}</title> -->
</svelte:head>

<div>
  <Header />
  <div class="container">
    <Breadcrumps />
    <div style="display:flex;justify-content:space-between">
      <Indicator />
    </div>
  </div>

  <div class="container">
    <h1 class="hero__title">RESULTS-DRIVEN MARKETING</h1>
  </div>
  <!-- <p>{JSON.stringify(sectionsCollection)}</p> -->
</div>

<style global lang="scss">
  @import 'destyle.css/destyle.css';

  .hero {
    &__title {
      font-weight: bold;
      font-size: 72px;
      color: #07124a;
    }
  }
</style>
