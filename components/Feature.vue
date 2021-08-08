<template>
  <section class="feature bg-primary grid place-content-center py-20 px-auto">
    <div v-if="table" class="feature__content text-center container">
      <h3 class="feature__subtitle">{{ table.subhead }}</h3>
      <h2 class="feature__title">{{ table.head }}</h2>
      <p class="feature__text">{{ table.Text }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      table: [],
    }
  },
  async fetch() {
    const KEY = process.env.API_KEY
    const HEADERS = {
      headers: { Authorization: `Bearer ${KEY}` },
    }
    this.table = await fetch(
      'https://api.airtable.com/v0/app24nIoWe3Q49B6u/Feature%20Section/receeyP2JaINsow5a',
      HEADERS
    )
      .then((res) => res.json())
      .then((data) => data.fields)
  },
}
</script>

<style scoped lang="scss">
.feature {
  background-color: $color-primary;
  @include section-padding;
}

.feature__content {
  text-align: center;
}

.feature__title {
  font-size: 5rem;
  margin-bottom: 2rem;
  @include margin-auto;

  @include text-container;
}

.feature__subtitle {
  font-size: 3rem;
  margin-bottom: 1rem;
  @include margin-auto;

  @include text-container;
}

.feature__text {
  @include margin-auto;
  @include text-container;
}
</style>
