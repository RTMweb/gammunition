<template>
  <div class="price-card">
    <div class="price-card__description">
      <h1 class="price-card__item">{{ item }}</h1>
      <h3 class="price-card__info">
        {{ info }}
      </h3>
    </div>
    <h1 class="price-card__price">${{ price }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    price: { type: Number, required: true, default: 45 },
    info: { type: String, required: true, default: '' },
    item: { type: String, required: true, default: '' },
  },
}
</script>

<style scoped lang="scss">
.price-card {
  display: flex;
  padding: 1.3rem;
  background: white;
  border-radius: 0.8rem;
  margin-bottom: 3rem;

  @include margin-auto;
  gap: 2rem;
  box-shadow: 5px 6px 15px -1px rgba(0, 0, 0, 0.59);
}

.price-card__description {
  display: flex;
  margin-right: auto;
  flex: 0 1 auto;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 640px) {
    gap: 2rem;
    flex-direction: row;
  }
}

.price-card__item {
  text-transform: uppercase;
  font-size: 3rem;
  flex: 0 1 auto;
  text-align: left;
}

.price-card__info {
  text-transform: uppercase;
  color: $color-primary-dark;
  font-weight: 300;
  font-size: 1.5rem;
  margin-bottom: 0.1rem;
  text-align: left;
  align-self: flex-start;

  @media (min-width: 640px) {
    align-self: flex-end;
  }
}

.price-card__price {
  font-size: 6rem;
  margin-left: 1rem;
  align-self: center;
  @media (min-width: 640px) {
    font-size: 3rem;
  }
}
</style>
