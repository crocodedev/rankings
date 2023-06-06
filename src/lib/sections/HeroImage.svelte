<script>
  import Container from '$lib/components/Container.svelte'
  import { onMount, beforeUpdate, afterUpdate } from 'svelte'

  export let data = {}
  $: diagramElements = []
  let pageName = ''

  beforeUpdate(() => {
    let pathname = window.location.pathname
    let startIndex = pathname.indexOf('/') + 1
    let endIndex = pathname.indexOf('/', startIndex)
    pageName = pathname.substring(startIndex, endIndex)
  })

  let values = []
  let highestValue = 0
  let heightsEl = []

  $: {
    values = data.diagramListCollection.items.map((el) => parseFloat(el.title))
    highestValue = Math.max(...values)
    heightsEl = values.map((value) => (value * 100) / highestValue)
  }

  onMount(() => {
    diagramElements.forEach((el, idx) => {
      el.style.height = `${heightsEl[idx]}%`
    })
  })
</script>

{#if pageName != 'services'}
  <section class="hero-image hero-image--case">
    <Container>
      <div class="hero-image__wrapper">
        <div class="hero-image__text-wrapper">
          <h1 class="h1">{data.title}</h1>
          <p class="hero-image__text">{data.text}</p>
          {#if data.linkData}
            <a href={data.linkData.link} class="hero-image__link">{data.linkData.title}</a>
          {/if}
          <div class="hero-image__categories">
            {#each data.tagListCollection.items as tag}
              <p class="hero-image__category">{tag.title}</p>
            {/each}
          </div>
        </div>
        <div class="hero-image__image-wrapper hero-image__image-wrapper--hover">
          <img src={data.image.url} alt="" class="hero-image__image" />
        </div>
      </div>
    </Container>
  </section>
{/if}

{#if pageName == 'services'}
  <section class="hero-image">
    <Container>
      <div class="hero-image__wrapper hero-image__bottom">
        <div class="hero-image__text-wrapper">
          <h1 class="h1">{data.title}</h1>
          <p class="hero-image__text">{data.text}</p>

          <div class="hero-image__categories hero-image__categories--service">
            {#each data.buttonListCollection.items as button}
              <a href={button.link} class="hero-image__button">{button.title}</a>
            {/each}
          </div>
        </div>

        <div class="hero-image__image-wrapper hero-image__image-wrapper--service">
          <img src={data.image.url} alt="" class="hero-image__image hero-image__image--service" />
          <div class="hero-image__images">
            <div class="hero-image__diagramm-wrapper">
              {#each data.diagramListCollection.items as value, index}
                {#if value.diagramColor != 'Blue'}
                  <span bind:this={diagramElements[index]} class="hero-image__diagramm">
                    {value.title}%
                  </span>
                {/if}
                {#if value.diagramColor == 'Blue'}
                  <span
                    bind:this={diagramElements[index]}
                    class="hero-image__diagramm hero-image__diagramm--blue"
                  >
                    {value.title}%
                  </span>
                {/if}
              {/each}
            </div>
            <img src="../Group 242.svg" alt="" class="hero-image__images-item" />
          </div>

          {#if data.percent != null}
            <span class="hero-image__circle" style="--percent: {data.percent}%;">
              <div class="hero-image__circle-num">{data.percent}%</div>
            </span>
          {/if}
        </div>
      </div>
    </Container>
  </section>
{/if}

<style lang="scss">
  .hero-image {
    &--case {
      @media (min-width: 769px) {
        padding-bottom: 2px;
      }

      @media (max-width: 768px) {
        padding-bottom: 0;
      }
    }

    &__diagramm-wrapper {
      display: flex;
      width: max-content;
      align-items: flex-end;

      gap: 5px;

      @media (min-width: 993px) {
        min-height: 150px;
        max-height: 150px;
        transform: translateY(-40%);
      }

      @media (max-width: 993px) {
        min-height: 110px;
        max-height: 110px;
        transform: translateY(-46%);
      }
    }

    &__diagramm {
      background-color: #bfc8d6;
      display: flex;
      width: 100%;
      color: #07124a;
      justify-content: center;
      align-items: flex-end;
      border-radius: 12px;

      @media (min-width: 769px) {
        padding: 10px 12px;
        font-size: 14px;
      }

      @media (max-width: 768px) {
        padding: 5px 7px;
        font-size: 10px;
      }
    }

    &__diagramm:is(.hero-image__diagramm--blue) {
      background-color: #0077ff;
      color: white;
    }

    &__images {
      display: flex;
      right: 50px;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      position: absolute;

      @media (max-width: 768px) {
        & {
          top: 0;
          right: 25px;
        }
      }

      @media (min-width: 769px) {
        & {
          right: 50px;
        }
      }
    }

    &__images-item {
      align-self: center;

      @media (min-width: 993px) {
        & {
          width: 88px;
          height: 182px;
          transform: translateY(30%);
        }
      }

      @media (max-width: 992px) {
        & {
          width: 38px;
          height: 153px;
          transform: translateY(44%);
        }
      }
    }

    @media (min-width: 769px) and (max-width: 992px) {
      &__images-item {
        width: 70px;
        height: 172px;
        transform: translateY(36%);
      }
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
    }

    &__button {
      border: 1px solid #0077ff;
      border-radius: 5px;
      text-transform: uppercase;
      padding: 10px;
      text-align: center;

      &:first-of-type {
        background-color: #0077ff;
        color: white;

        @media (max-width: 480px) {
          & {
            width: 178px;
          }
        }
      }

      &:last-of-type {
        background-color: white;
        color: #0077ff;

        @media (max-width: 480px) {
          & {
            width: 134px;
          }
        }
      }
      @media (min-width: 481px) {
        & {
          padding: 10px 20px;
        }
      }
    }

    &__bottom {
      border-bottom: 2px solid #0077ff;
      @media (min-width: 993px) {
        & {
          padding-bottom: 170px;
        }
      }
    }

    @media (max-width: 768px) {
      &__wrapper {
        flex-direction: column;
        gap: 20px;
      }
    }

    &__text-wrapper {
      display: flex;
      flex-direction: column;
      height: fit-content;

      gap: 20px;
    }

    @media (min-width: 769px) {
      &__text-wrapper {
        width: 48%;
      }
    }

    @media (min-width: 993px) {
      &__text-wrapper {
        transform: translateY(-18px);
      }
    }

    @media (min-width: 769px) and (max-width: 992px) {
      &__text-wrapper {
        transform: translateY(-9px);
      }
    }

    &__text {
      display: flex;
      font-size: 18px;
      color: #97a2b6;
    }

    @media (min-width: 993px) {
      &__text {
        width: 65%;
      }
    }

    @media (max-width: 769px) {
      &__text {
        font-size: 14px;
      }
    }

    &__link {
      position: relative;
      color: #97a2b6;
      font-size: 14px;
      width: max-content;

      &::after {
        position: absolute;
        content: '';
        right: -30px;
        width: 18px;
        height: 15px;
        object-fit: cover;
        background-size: cover;
        opacity: 0.3;
        background-image: url('../Group 109.svg');
      }
    }

    @media (max-width: 768px) {
      &__link {
        order: 4;
      }
    }

    &__categories:not(.hero-image__categories:is(.hero-image__categories--service)) {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    &__categories--service {
      display: flex;

      @media (max-width: 360px) {
        & {
          flex-wrap: wrap;
        }
      }
      @media (max-width: 768px) {
        & {
          gap: 13px;
          padding-top: 20px;
        }
      }

      @media (min-width: 769px) {
        & {
          gap: 10px;
          padding-top: 55px;
        }
      }
    }

    &__category {
      font-size: 14px;
      padding: 5px 15px;
      background-color: #07124a;
      border-radius: 5px;
      color: white;
      width: max-content;
    }

    &__image-wrapper {
      border-radius: 10px;
      position: relative;
    }

    &__circle {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      content: ' ';
      border-radius: 100%;
      z-index: 1;

      background: conic-gradient(
        #0077ff 0% calc(var(--percent) + 0.2%),
        #07124a calc(var(--percent) + 0.3%) 100%
      );
    }

    &__circle-num {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 34px;
      color: #07124a;
      width: 114px;
      z-index: 3;
      height: 114px;
      background-color: white;
      border-radius: 100%;
    }

    @media (min-width: 993px) {
      &__circle {
        width: 195px;
        height: 195px;
        left: calc(-195px / 2);

        bottom: -53.5px;
      }
    }

    @media (min-width: 769px) and (max-width: 992px) {
      &__circle {
        width: 145px;
        height: 145px;
        left: calc(-145px / 2);
        bottom: calc(-145px / 3);
      }

      &__circle-num {
        width: 90px;
        height: 90px;
      }
    }

    @media (min-width: 992px) {
      &__image-wrapper {
        width: 48%;
      }

      &__image-wrapper--service {
        width: 52%;
      }
    }

    @media (min-width: 769px) and (max-width: 992px) {
      &__image-wrapper {
        width: 50%;
      }
    }

    @media (min-width: 769px) {
      &__image-wrapper--service {
        height: 355px;
        position: relative;
        left: 50px;
      }
    }

    @media (max-width: 768px) {
      &__circle {
        width: 100px;
        height: 100px;
        left: -25.5px;
        bottom: -33px;
      }

      &__circle-num {
        font-size: 16px;
        width: 60px;
        height: 60px;
      }
      &__image-wrapper {
        width: 100%;
        height: 267px;
      }

      &__image-wrapper--service {
        height: 219px;
        position: relative;
        left: 25px;
      }
    }

    @media (min-width: 769px) {
      &__image-wrapper--hover:hover &__image {
        height: 100%;
      }
    }

    &__image {
      transition: 0.3s ease-in-out;
      border-radius: 10px;
      object-fit: cover;
      width: 100%;
    }

    @media (min-width: 769px) {
      &__image {
        height: 75.4%;
      }

      &__image--service {
        position: absolute;
        height: 100%;
      }
    }

    @media (max-width: 768px) {
      &__image {
        height: 100%;
      }

      &__image--service {
        height: 219px;
      }
    }

    @media (min-width: 769px) and (max-width: 992px) {
      .hero-image__bottom {
        padding-bottom: 75px;
      }
    }

    @media (max-width: 768px) {
      .hero-image__image-wrapper--service {
        padding-top: 0;
      }
      .hero-image__bottom {
        padding-bottom: 105px;
        gap: 108px;
      }
    }
  }
</style>
