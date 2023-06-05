<script>
  export let data = {}
  import Container from '$lib/components/Container.svelte'

  let activeQuestions = []

  function toggleActive(index) {
    if (activeQuestions.includes(index)) {
      activeQuestions = activeQuestions.filter((item) => item !== index)
    } else {
      activeQuestions = [...activeQuestions, index]
    }
  }
</script>

{#if data.component == 'Cards'}
  <section class="grid-content">
    <Container>
      <div class="grid-content__wrapper">
        <div class="grid-content__title-wrapper">
          <h2 class="h2">{data.title}</h2>
          <p class="grid-content__subtitle">{data.subtitle}</p>
        </div>
        <div class="grid-content__items">
          {#each data.contentListCollection.items.slice(0, 4) as item}
            <div class="card">
              <div class="card__image-wrapper">
                <img src={item.imageCard.url} alt="card" class="card__image" />
                <a href={item.url}>
                  <img src="../feather-external-link.svg" alt="" class="card__image-icon" />
                </a>
              </div>
              <div class="card__text-wrapper">
                <div class="card__generaly-info">
                  <span class="card__industry">{item.subtitleCard}</span>
                  <p class="card__company">{item.titleCard}</p>
                  <div class="card__categories-list">
                    {#if item.tagList}
                      {#each item.tagList as tag}
                        <p class="card__category">
                          {tag}
                        </p>
                      {/each}
                    {/if}
                  </div>
                </div>
                <p class="card__text">
                  {item.textCard}
                </p>
              </div>
            </div>
          {/each}
        </div>
        {#if data.linkMore}
          <a href={data.linkMore.link} class="grid-content__show-wrapper">
            <span class="grid-content__texts">
              {#each data.linkMore.title.replace('<br/>', '<br/>').split('<br/>') as line}
                <p class="grid-content__show-text">{line}</p>
              {/each}
            </span>
            <span class="grid-content__show-icon"
              ><img src="../Group 109.svg" alt="arrow" class="" /></span
            >
          </a>
        {/if}
      </div>
    </Container>
  </section>
{/if}

{#if data.component == 'Seo'}
  <section class="seotext">
    <Container>
      <div class="seotext__wrapper">
        <div class="grid-content__title-wrapper">
          <h2 class="h2">{data.title}</h2>
          {#if data.subtitle !== null}
            <p class="grid-content__subtitle">{data.subtitle}</p>
          {:else if typeof data.subtitle === 'undefined'}
            <p class="grid-content__subtitle">&nbsp;</p>
          {/if}
        </div>
        <div class="seotext__items">
          {#each data.contentListCollection.items as item}
            <div class="seotext__item">
              <div class="seotext__name-wrapper">
                {#if item.title !== null}
                  <p class="seotext__name">
                    {item.title}
                  </p>
                  <span class="seotext__bar " />
                {/if}
                {#if item.title === null}
                  <p class="seotext__name">
                    {' '}
                  </p>
                  <span class="seotext__bar seotext__bar--null" />
                {/if}
              </div>
              <p class="seotext__text">
                {item.text}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </Container>
  </section>
{/if}

{#if data.component == 'Methods'}
  <section class="methods">
    <Container>
      <div class="methods__wrapper">
        <div class="methods__title-wrapper">
          <h2 class="h2 h2--white">{data.title}</h2>
          <p class="methods__subtitle">{data.subtitle}</p>
        </div>
        <div class="methods__items">
          {#each data.contentListCollection.items as item, index}
            <div class="methods__item" style={`--item-align: ${index}`}>
              <span class="methods__icon">
                <img src={item.icon.url} alt="" class="methods__icon-img" />
              </span>
              <p class="methods__text">{item.text}</p>
            </div>
          {/each}
        </div>
      </div>
    </Container>
  </section>
{/if}

{#if data.component == 'Indicator'}
  <section class="indicators">
    <Container>
      <div class="indicators__wrapper">
        {#each data.contentListCollection.items as item}
          <div class="indicator">
            <div class="indicator__wrapper">
              <span class="indicator__fact">{item.title}</span>
              <span class="indicator__value">{item.text}</span>
            </div>
          </div>
        {/each}
      </div>
    </Container>
  </section>
{/if}

{#if data.component == 'Faq'}
  <section class="faq">
    <Container>
      <div class="faq__wrapper">
        <h2 class="h2 faq__title">{data.title}</h2>
        <div class="faq__items">
          {#each data.contentListCollection.items as item, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="faq__item">
              <div
                class={activeQuestions.includes(index)
                  ? 'faq__question-wrapper active'
                  : 'faq__question-wrapper'}
                on:click={() => toggleActive(index)}
              >
                <span class="faq__num">0{index + 1}.</span>
                <p class="faq__question">{item.title}</p>
                <span
                  class={activeQuestions.includes(index) ? 'faq__icon active' : 'faq__icon'}
                  on:click={(event) => {
                    event.stopPropagation()
                    toggleActive(index)
                  }}
                >
                  <img src="../Group 109.svg" alt="" class="faq__icon-img" />
                </span>
              </div>
              <p class={activeQuestions.includes(index) ? 'faq__answer active' : 'faq__answer'}>
                {item.text}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </Container>
  </section>
{/if}

<style lang="scss">
  .grid-content {
    &__wrapper {
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 993px) {
      & {
        padding-bottom: 75px;
      }
    }

    @media (max-width: 992px) {
      &__wrapper {
        gap: 20px;
      }
    }

    @media (min-width: 993px) {
      &__wrapper {
        gap: 53px;
      }
    }

    &__items {
      display: grid;
    }

    @media (max-width: 992px) {
      &__items {
        gap: 25px;
        padding-bottom: 20px;
      }
    }

    @media (min-width: 768px) {
      &__items {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 993px) {
      &__items {
        gap: 50px;
      }
    }

    &__title-wrapper {
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 993px) {
      &__title-wrapper {
        width: 48%;
        gap: 20px;
      }
    }

    @media (max-width: 992px) {
      &__title-wrapper {
        gap: 10px;
      }
    }

    &__title {
      font-size: 32px;
      font-weight: bold;
      color: #07124a;
    }

    &__subtitle {
      color: #07124a;
    }

    @media (min-width: 993px) {
      &__subtitle {
        font-size: 18px;
      }
    }

    @media (max-width: 992px) {
      &__subtitle {
        font-size: 14px;
      }
    }

    &__show-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;

      @media (min-width: 769px) {
        & {
          align-self: flex-end;
        }
      }

      @media (max-width: 768px) {
        & {
          align-self: center;
        }
      }
    }

    &__show-text {
      display: flex;
      flex-direction: column;
      color: #97a2b6;

      @media (min-width: 769px) {
        & {
          font-size: 14px;
        }
      }

      @media (max-width: 768px) {
        & {
          font-size: 12px;
        }
      }
    }

    &__show-icon {
      width: 35px;
      height: 35px;
      filter: opacity(25%);
    }
  }
  .card {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    color: white;
    border-radius: 10px;
    height: 100%;
    background-color: #46506f;

    &__image-wrapper {
      width: 100%;
      height: 365px;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }

    @media (max-width: 768px) {
      &__image-wrapper {
        height: 200px;
      }
    }

    &__image-icon {
      position: absolute;
      top: 20px;
      right: 20px;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__text-wrapper {
      display: flex;
      gap: 40px;
      padding: 50px 20px 20px;
    }

    @media (max-width: 992px) {
      &__text-wrapper {
        padding: 20px;
        flex-direction: column;
        gap: 20px;
      }
    }

    @media (min-width: 993px) {
      &__text {
        font-size: 18px;
        padding-top: 26px;
        width: 45%;
      }
    }

    @media (max-width: 993px) {
      &__text {
        font-size: 14px;
      }
    }

    &__generaly-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    @media (min-width: 993px) {
      &__generaly-info {
        width: 55%;
      }
    }

    &__name-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__categories-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    @media (min-width: 993px) {
      &__categories-list {
        padding-top: 30px;
      }
    }

    @media (max-width: 992px) {
      &__categories-list {
        padding-top: 10px;
      }
    }

    &__category {
      padding: 10px 30px;
      background-color: white;
      color: #07124a;
      font-size: 14px;
      border-radius: 8px;
    }

    @media (max-width: 992px) {
      &__category {
        padding: 5px 15px;
        font-size: 12px;
      }
    }

    &__industry {
      font-size: 14px;
    }

    &__company {
      text-transform: uppercase;
      font-size: 24px;
      font-weight: 600;
    }

    @media (max-width: 992px) {
      &__company {
        text-transform: uppercase;
        font-size: 18px;
      }
    }
  }
  .seotext {
    @media (min-width: 993px) {
      & {
        padding-top: 75px;
        padding-bottom: 75px;
      }
    }

    @media (max-width: 992px) {
      & {
        padding-top: 50px;
        padding-bottom: 50px;
      }
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    &__items {
      display: flex;
      flex-direction: column;
      gap: 70px;
    }

    &__item {
      display: flex;
      flex-direction: column;
      position: relative;
      gap: 32px;
    }

    @media (min-width: 768px) {
      &__item {
        width: 49%;
      }
    }

    @media (min-width: 768px) {
      &__item:not(:last-of-type):nth-child(odd):before {
        content: '';
        position: absolute;
        background-repeat: no-repeat;
        width: 50px;
        height: 50px;
        left: -100px;
        bottom: 0;
        opacity: 0.2;
        transform: rotate(90deg);
        background-image: url('Group 109.svg');
      }

      &__item:not(:last-of-type):nth-child(even):before {
        content: '';
        position: absolute;
        background-repeat: no-repeat;
        width: 50px;
        height: 50px;
        left: calc(100% + 50px);
        bottom: 0;
        opacity: 0.2;
        transform: rotate(90deg);
        background-image: url('Group 109.svg');
      }
    }

    @media (max-width: 768px) {
      &__item:not(:last-of-type):nth-child(odd):before {
        content: '';
        position: absolute;
        background-repeat: no-repeat;
        width: 50px;
        height: 50px;
        align-self: center;
        justify-self: center;
        bottom: 0;
        opacity: 0.2;
        top: calc(100% + 46px);
        transform: rotate(90deg);
        background-image: url('Group 109.svg');
      }

      &__item:not(:last-of-type):nth-child(even):before {
        content: '';
        position: absolute;
        background-repeat: no-repeat;
        width: 50px;
        height: 50px;
        align-self: center;
        justify-self: center;
        top: calc(100% + 46px);
        bottom: 0;
        opacity: 0.2;
        transform: rotate(90deg);
        background-image: url('Group 109.svg');
      }
    }

    &__item:nth-child(odd) {
      align-self: flex-end;
    }

    &__name-wrapper {
      display: flex;
      align-items: center;
      position: relative;
      color: #46506f;
      font-size: 24px;
      text-transform: uppercase;
    }

    &__name {
      position: absolute;
      background-color: white;
      left: 0;
      padding-right: 30px;
    }

    &__bar {
      width: 100%;
      height: 1px;
      background-color: #0077ff;

      @media (max-width: 768px) {
        &--null {
          margin-left: auto;
          margin-right: auto;
          width: 50%;
        }
      }
    }

    &__text {
      color: var(--dark-blue);
      font-size: 18px;
    }

    @media (max-width: 786px) {
      &__items {
        gap: 139px;
      }
      &__name-wrapper {
        font-size: 18px;
      }

      &__text {
        font-size: 14px;
      }
    }
  }

  .methods {
    background-color: #46506f;
    border-radius: 20px;

    @media (min-width: 993px) {
      & {
        padding-top: 75px;
        padding-bottom: 80px;
        margin-top: 75px;
        margin-bottom: 75px;
      }
    }

    @media (max-width: 992px) {
      & {
        padding-top: 30px;
        padding-bottom: 30px;
        margin-top: 50px;
        margin-bottom: 50px;
      }
    }

    &__wrapper {
      display: flex;
      flex-direction: column;

      @media (min-width: 993px) {
        & {
          gap: 135px;
        }
      }

      @media (max-width: 992px) {
        & {
          gap: 40px;
        }
      }
    }

    &__title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    @media (min-width: 992px) {
      &__title-wrapper {
        width: 48%;
      }
    }

    &__subtitle {
      color: white;

      @media (max-width: 992px) {
        & {
          text-indent: 50px;
        }
      }
    }

    &__items {
      display: grid;

      @media (min-width: 993px) {
        & {
          grid-template-columns: repeat(2, 1fr);
          column-gap: 50px;
          row-gap: 75px;
        }
      }

      @media (max-width: 992px) {
        & {
          grid-template-columns: 1fr;
          gap: 40px;
        }
      }
    }

    &__icon {
      display: flex;
      width: 55px;
      height: 55px;
    }

    &__icon-img {
      width: 55px;
      height: 55px;
    }

    &__item {
      display: flex;

      color: white;

      @media (min-width: 993px) {
        & {
          text-indent: 50px;
          gap: 100px;
        }
      }

      @media (max-width: 992px) {
        & {
          gap: 35px;
        }

        &:nth-child(6n + 5),
        &:nth-child(6n + 6),
        &:nth-child(6n + 4) {
          flex-direction: row-reverse;
        }
      }
    }
  }

  .indicators {
    padding-top: 20px;
    &__wrapper {
      display: flex;
      column-gap: 20px;
      justify-content: space-between;
      flex-wrap: wrap;
      row-gap: 50px;
      border-bottom: 2px solid #0077ff;
      @media (min-width: 993px) {
        & {
          padding-bottom: 155px;
        }
      }

      @media (max-width: 992px) {
        & {
          padding-bottom: 70px;
        }
      }
    }
  }

  .indicator {
    width: 280px;
    position: relative;

    @media (max-width: 992px) {
      & {
        width: 150px;
      }
    }

    &::before {
      position: absolute;
      content: '';
      background-repeat: no-repeat;
      background-image: url('../Graph 3.svg');
      width: 60px;
      height: 100%;
      left: calc(100% - 60px);
      top: 0;
    }

    &__fact {
      font-size: 14px;
      color: #46506f;
    }
    &__wrapper {
      padding-left: 20px;
      padding-top: 70px;
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (max-width: 769px) {
      & {
        padding-top: 50px;
      }
    }

    @media (max-width: 992px) {
      &__wrapper {
        height: 217px;
      }
    }

    @media (min-width: 993px) {
      &__wrapper {
        height: 270px;
      }
    }

    &__value {
      color: #07124a;

      letter-spacing: -4.32px;
      line-height: 48px;
    }

    @media (min-width: 993px) {
      &__value {
        font-size: 72px;
      }
    }

    @media (max-width: 992px) {
      &__value {
        font-size: 32px;
      }
    }
  }

  .faq {
    z-index: 0;
    position: relative;
    &__title {
      font-size: 32px;
      font-weight: bold;
      color: #07124a;
      width: 341px;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 75px;
    }

    &__question {
      @media (min-width: 769px) {
        & {
          font-size: 24px;
        }
      }

      @media (max-width: 768px) {
        & {
          font-size: 18px;
        }
      }
    }

    &__items {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &__question-wrapper {
      position: relative;
      display: flex;
      align-items: flex-end;
      gap: 20px;
      cursor: pointer;
      color: #07124a;
      background-color: white;
      border: 1px solid #46506f;
      border-radius: 10px;
      transition: 0.5s ease;

      @media (min-width: 769px) {
        & {
          padding: 30px 35px;
          padding-right: 100px;
        }
      }

      @media (max-width: 768px) {
        & {
          padding: 14px 10px;
          padding-right: 65px;
        }
      }
    }

    &__question-wrapper.active {
      background-color: #414c6d;
      color: white;
    }

    &__num {
      font-size: 14px;
      color: #97a2b6;

      @media (max-width: 768px) {
        & {
          align-self: flex-start;
        }
      }
    }

    &__answer {
      opacity: 0;
      height: 0;
      transform: translateY(-100px);
      text-indent: 40px;
      color: #46506f;
      position: relative;
      z-index: -10;
      transition: 0.5s ease;
      @media (min-width: 769px) {
        & {
          width: 608px;
          font-size: 16px;
        }
      }

      @media (max-width: 768px) {
        & {
          width: 100%;
          font-size: 14px;
        }
      }
    }

    &__icon {
      align-self: center;
      position: absolute;
      right: 30px;
      transition: 0.5s ease;
      @media (max-width: 768px) {
        & {
          right: 10px;
        }
        &-img {
          width: 30px;
        }
      }
    }

    &__icon.active {
      filter: invert(1);
      mix-blend-mode: color-dodge;
      transform: rotate(90deg);
    }

    &__answer.active {
      padding-top: 15px;
      opacity: 1;
      transform: translateY(0);
      height: fit-content;
      z-index: 1;
    }
  }
</style>
