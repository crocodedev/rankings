<script>
  export let data = {}
  console.log(data)

  console.log(data.stagesListCollection.items)
  import Container from '$lib/components/Container.svelte'
</script>

<section class="stages">
  <Container>
    <div class="stages__wrapper">
      <h1 class="stages__title">{data.stagesTitle}</h1>
      <p>{data.stagesSubtitle}</p>
      {#each data.stagesListCollection.items as item}
        <div class="stage">
          <div class="stage__wrapper">
            <div class="stage__text">
              {item.stagesText}
            </div>
            <div class="stage__bar">
              <div class="stage__number">{item.stagesNum}</div>
            </div>
            <div class="stage__name">{item.stageName}</div>
          </div>
        </div>
      {/each}
    </div>
  </Container>
</section>

<style lang="scss">
  .stages {
    &__wrapper {
      height: 250px;
      background-color: red;
    }
  }
</style>
