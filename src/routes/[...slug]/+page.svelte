<script>
  // export let data
  // const {
  //   pageCollection: { items },
  // } = data
  // const { name, url, sectionsCollection } = items[0]

  import Breadcrumps from '$lib/components/breadcrumps.svelte'
  import Header from '$lib/sections/header.svelte'
  import Container from '../../lib/components/container.svelte'
  import Stage from '$lib/components/stage.svelte'
  import Indicator from '$lib/components/indicator.svelte'
</script>

<svelte:head>
  <!-- <title>{name}</title> -->
</svelte:head>

<div>
  <Header />
  <Container>
    <Breadcrumps />
  </Container>
  <div style="display:flex;justify-content:space-between"><Indicator /></div>
  <div style="display:flex;gap:50px;padding-top:100px;justify-content:space-evenly">
    <Stage />
  </div>

  <div class="container">
    <h1 class="hero__title">RESULTS-DRIVEN MARKETING</h1>
    <img src="Graphs.svg" alt="" /> <img src="Graphs.svg" alt="" /> <img src="Graphs.svg" alt="" />
  </div>
  <!-- <p>{JSON.stringify(sectionsCollection)}</p> -->
</div>

<!-- <script>
	import RedThing from './RedThing.svelte';
	import GreenThing from './GreenThing.svelte';
	import BlueThing from './BlueThing.svelte';
	
	const obj = { RedThing, GreenThing, BlueThing }

	const options = ["BlueThing", "GreenThing", "RedThing"].map(el => {
		console.log(obj)
		return { color: el, component: obj[el] }
	}) 
	let selected = options[0];
	
</script>

<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.color}</option>
	{/each}
</select>

<svelte:component this={selected.component}/> -->
<style global lang="scss">
  @import 'destyle.css/destyle.css';
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');

  * {
    font-family: 'Lexend', sans-serif;
  }

  .hero {
    &__title {
      font-weight: bold;
      font-size: 72px;
      color: #07124a;
    }
  }
</style>
