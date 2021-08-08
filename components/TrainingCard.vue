<template>
  <div class="trainingCard">
    <div class="trainingCard__priceContainer">
      <h1 class="trainingCard__price">${{ price }}</h1>
      <h3 class="trainingCard__priceSubtext">per person</h3>
    </div>
    <div class="trainingCard__Info sm:text-left text-center mt-2 space-y-1">
      <p class="trainingCard__time">{{ time }}</p>
      <p class="trainingCard__description">{{ description }}</p>
      <h4 class="trainingCard__info">{{ info }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: { type: Number, required: true, default: 45 },
    time: { type: String, required: true, default: '' },
    description: { type: String, required: true, default: '' },
    info: { type: String, required: true, default: '' },
  },
}
</script>

<style scoped lang="scss">
.trainingCard {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  &__price {
    color: $color-white;
    margin-bottom: 1rem;
    font-size: 12rem;

    @media (min-width: 640px) {
      fontsize: 10rem;
    }
  }

  &__priceSubtext {
    color: $color-primary-dark;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.3rem;

    @media (min-width: 640px) {
      text-align: center;
    }
  }

  &__time {
    text-align: center;
    text-transform: uppercase;
    color: $color-white;
    font-weight: 400;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;

    @media (min-width: 640px) {
      text-align: left;
    }
  }

  &__description {
    text-align: center;
    color: $color-secondary-light;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;

    @media (min-width: 640px) {
      text-align: left;
    }
  }

  &__info {
    color: $color-primary-dark;
    font-size: 2rem;
    text-align: center;
    @media (min-width: 640px) {
      text-align: left;
    }
  }
}

.center {
  @include margin-auto;
  @include text-container;
}
</style>
