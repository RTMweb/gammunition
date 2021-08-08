<template>
  <section id="Testimonials" class="Testimonials">
    <div class="container">
      <Split>
        <template #left>
          <h2 class="Testimonials__Title">WHAT OUR CLIENTS SAY ABOUT US</h2>
          <p class="Testimonials__text">
            We appreciate and value our clients` opinion greatly. We aspire to
            perfection by sharpening our training skills and improving the
            training facilities. Your feedback matters a lot to us and helps
            become better.
          </p>
        </template>
        <template #right>
          <Slider />
        </template>
      </Split>
    </div>
  </section>
</template>

<script>
import Split from './Split.vue'
import Slider from './Slider-Test.vue'

export default {
  components: {
    Split,
    Slider,
  },
}
</script>

<style scoped lang="scss">
.Testimonials {
  @include section-padding;
  text-align: left;

  background: hsl(0, 0%, 13%);

  &__Title {
    color: $color-primary;
    margin-bottom: 2rem;
  }

  &__text {
    color: $color-secondary-light;
    margin-bottom: 5rem;
  }
}
</style>
