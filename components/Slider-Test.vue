<template>
  <div id="slider">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div
        v-if="testimonials"
        :key="current"
        class="slide"
        :class="testimonials[current].className"
      >
        <div class="slide__content">
          <div
            class="picture"
            :style="{
              'background-image': 'url(' + testimonials[current].img + ')',
            }"
          ></div>
          <p class="slide__content__text">
            {{ testimonials[current].comment }}!
          </p>
          <p class="slide__content__name">{{ testimonials[current].name }}!</p>
        </div>
      </div>
    </transition-group>
    <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
      <div class="btn-img">&#10094;</div>
    </div>
    <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
      <div class="btn-img">&#10095;</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      direction: 1,
      transitionName: 'fade',
      show: false,
      testimonials: [],
    }
  },
  async fetch() {
    const KEY = process.env.API_KEY
    const HEADERS = {
      headers: { Authorization: `Bearer ${KEY}` },
    }

    this.testimonials = await fetch(
      'https://api.airtable.com/v0/app24nIoWe3Q49B6u/Testimonials?maxRecords=3&view=Grid%20view',
      HEADERS
    )
      .then((res) => res.json())
      .then((data) => {
        const slides = []
        data.records.forEach((record) => {
          slides.push({ ...record.fields })
        })
        return slides
      })
  },

  methods: {
    slide(dir) {
      this.direction = dir
      dir === 1
        ? (this.transitionName = 'slide-next')
        : (this.transitionName = 'slide-prev')
      const len = this.testimonials.length
      this.current = (this.current + (dir % len) + len) % len
    },
  },
}
</script>

<style scoped lang="scss">
/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDES CLASSES */

.blue {
  background: #4a69bd;
}

.red {
  background: #e55039;
}

.yellow {
  background: #f6b93b;
}
.Orange {
  background: #f6863b;
}

.picture {
  height: 9rem;
  width: 9rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 1.5rem;
}

.slide__content {
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  max-width: 80%;

  &__text {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
    color: $color-white;
    letter-spacing: 0.2px;
  }
  &__name {
    font-weight: 500;
    text-transform: uppercase;
    color: $color-primary;
  }
}

/* SLIDER STYLES */

#slider {
  width: 100%;
  height: 35rem;
  position: relative;
  border: 1px solid $color-primary;
  overflow: hidden;
}

.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: $color-secondary-light;
}

.btn {
  z-index: 10;
  cursor: pointer;
  background-color: $color-primary;
  display: grid;
  place-content: center;
  color: $color-secondary-dark;
  // justify-content: center;
  // align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 5rem;
  width: 5rem;
  transition: all 0.3s ease-in-out;
  user-select: none;
  font-size: 4rem;

  &-img {
    margin-top: -1rem;
  }
}

.btn-next {
  bottom: 5rem;
  right: 0;
}

.btn:hover {
  background-color: $color-primary-dark;
}
</style>
