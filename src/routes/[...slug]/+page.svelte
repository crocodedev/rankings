<script>
  // export let data
  // const {
  //   pageCollection: { items },
  // } = data
  // const { name, url, sectionsCollection } = items[0]

  import Breadcrumps from '$lib/components/Breadcrumps.svelte'
  import Header from '$lib/sections/header.svelte'
  import Container from '$lib/components/Container.svelte'
  import Stage from '$lib/components/Stage.svelte'
  import Indicator from '$lib/components/Indicator.svelte'
  import Card from '$lib/components/Card.svelte'
  import Seoitem from '$lib/components/Seoitem.svelte'
  import Imagewithtext from '$lib/sections/imagewithtext.svelte'
  import Ourmethods from '../../lib/sections/ourmethods.svelte'
  import Faq from '../../lib/sections/faq.svelte'
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

  <Container>
    <div style="flex-wrap:wrap;display:flex;gap:50px">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </Container>

  <Container>
    <Seoitem />
  </Container>

  <Container>
    <Imagewithtext />
  </Container>

  <Container>
    <Ourmethods />
  </Container>

  <Container><Faq /></Container>
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
