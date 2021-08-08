<template>
  <section id="trainingServices" class="TrainingServices">
    <div class="TrainingServices_container container">
      <h2 class="TrainingServices__Title">Training Services</h2>
      <h3 class="TrainingServices__SubTitle">At the range (Live Fire)</h3>
      <Split>
        <template #left>
          <TrainingCard
            v-if="card1"
            :price="card1.price"
            :time="card1.time"
            :description="card1.description"
            :info="card1.info"
          />
        </template>
        <template #right>
          <TrainingCard
            v-if="card2"
            :price="card2.price"
            :time="card2.time"
            :description="card2.description"
            :info="card2.info"
          />
        </template>
      </Split>
      <h3 class="TrainingServices__SubTitle">Range Fees</h3>
      <div class="TrainingServices__ListHolder center">
        <div v-for="price in list1" :key="price.id">
          <PriceCard
            :price="price.fields.Price"
            :info="price.fields.info"
            :item="price.fields.item"
          />
        </div>
      </div>
      <h3 class="TrainingServices__SubTitle">IN-HOME TRAINING</h3>
      <p class="TrainingServices__SmallTitle">
        Firearm safety & training with unloaded firearms
      </p>
      <div class="center">
        <TrainingCard
          v-if="card2"
          :price="card2.price"
          :time="card2.time"
          :description="card2.description"
          :info="card2.info"
          style="margin: 0 auto"
        />
      </div>
      <div class="TrainingServices__ListHolder center">
        <div v-for="price in list1" :key="price.id">
          <PriceCard
            :price="price.fields.Price"
            :info="price.fields.info"
            :item="price.fields.item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import getTable from '../composables/getTable'
import getList from '../composables/getList'
import TrainingCard from './TrainingCard.vue'
import PriceCard from './PriceCard.vue'

export default {
  components: {
    TrainingCard,
    PriceCard,
  },
  data() {
    return {
      card1: [],
      card2: [],
      list1: [],
    }
  },
  mounted() {
    this.airTable()
  },
  methods: {
    async airTable() {
      this.card1 = await getTable('Trainings', 'recVpHzUOqOqj8wIt')

      this.card2 = await getTable('Trainings', 'rech0koyzU20OXEzk')

      this.list1 = await getList('Range%20Fees?')
    },
  },
}
</script>

<style scoped lang="scss">
.TrainingServices {
  @include section-padding;
  @include margin-auto;
  text-align: center;

  background: url('https://ik.imagekit.io/cpds/Training-BG_iSf6uhUSE.png')
    hsl(0, 0%, 13%);
  background-size: cover;

  &__Title {
    color: $color-primary;
    margin-bottom: 2rem;
  }

  &__SubTitle {
    color: $color-secondary-light;
  }

  &__SmallTitle {
    color: $color-primary-dark;
  }

  &__ListHolder {
    @include text-container;
  }
}
</style>
