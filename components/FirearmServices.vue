<template>
  <section id="FirearmServices" class="FirearmServices">
    <div class="container">
      <h2 class="FirearmServices__Title">Firearm Services</h2>

      <Split>
        <template #left>
          <h3 class="FirearmServices__SubTitle">Purchase & Selling</h3>
          <div v-for="price in purchaseAndSelling" :key="price.id">
            <PriceCard
              v-if="purchaseAndSelling"
              :price="price.fields.Price"
              :info="price.fields.info"
              :item="price.fields.item"
            />
          </div>
        </template>
        <template #right>
          <h3 class="FirearmServices__SubTitle">Purchase & Selling</h3>
          <div v-for="price in purchaseAndSelling" :key="price.id">
            <PriceCard
              v-if="purchaseAndSelling"
              :price="price.fields.Price"
              :info="price.fields.info"
              :item="price.fields.item"
            />
          </div>
        </template>
      </Split>
    </div>
  </section>
</template>

<script>
// import PriceCard from '../components/PriceCard.vue'
import Split from '../components/Split.vue'

export default {
  components: {
    Split,
    // PriceCard,
  },
  data() {
    return {
      purchaseAndSelling: [],
    }
  },
  async fetch() {
    const KEY = process.env.API_KEY
    const HEADERS = {
      headers: { Authorization: `Bearer ${KEY}` },
    }

    this.purchaseAndSelling = await fetch(
      `https://api.airtable.com/v0/app24nIoWe3Q49B6u/Range%20Fees?&view=Grid%20view`,
      HEADERS
    )
      .then((res) => res.json())
      .then((data) => data.records)
  },
}
</script>

<style scoped lang="scss">
.FirearmServices {
  @include section-padding;
  text-align: center;

  &__Title {
    color: $color-secondary-dark;
    margin-bottom: 2rem;
  }

  &__SubTitle {
    color: $color-secondary-light;
    margin-bottom: 5rem;
  }
}
</style>
