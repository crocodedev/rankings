<div class="card">
  <div class="card__wrapper">
    <div class="card__image-wrapper">
      <img src="sarah-dorweiler-Rv2kTIuya_I-unsplash.png" alt="card" class="card__image" />
      <a href="#"><img src="feather-external-link.svg" alt="" class="card__image-icon" /></a>
    </div>
    <div class="card__text-wrapper">
      <div class="card__generaly-info">
        <div class="card__name-wrapper">
          <span class="card__industry">Industry</span>
          <p class="card__company">Company name</p>
        </div>
        <div class="card__categories-list">
          <a href="#" class="card__category">Branding</a>
          <a href="#" class="card__category">Packaging</a>
          <a href="#" class="card__category">SEO optimisation</a>
          <a href="#" class="card__category">Website development</a>
          <a href="#" class="card__category">Google Ads</a>
        </div>
      </div>
      <p class="card__text">
        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV
        quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick
        jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
        vixens.
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  .card {
    color: white;
    border-radius: 10px;
    display: flex;
    background-color: #46506f;
    &__wrapper {
      background-color: #46506f;
      display: flex;
      flex-direction: column;
    }

    &__image-wrapper {
      width: 100%;
      height: 365px;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
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

    &__text {
      width: 45%;
      font-size: 18px;
    }

    &__generaly-info {
      width: 55%;
      display: flex;
      flex-direction: column;
      gap: 40px;
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

    &__category {
      padding: 10px 30px;
      background-color: white;
      color: #07124a;
      font-size: 14px;
      border-radius: 8px;
    }

    &__industry {
      font-size: 14px;
    }

    &__company {
      text-transform: uppercase;
      font-size: 24px;
      font-weight: 600;
    }
  }
</style>
