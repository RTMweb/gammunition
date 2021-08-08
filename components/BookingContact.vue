<template>
  <section
    id="Booking"
    class="Booking bg-secondary-dark text-center px-6 pb-32"
  >
    <h2 class="text-primary font-oswald">Booking</h2>
    <!-- Calendly inline widget begin -->
    <div
      class="calendly-inline-widget border-0"
      data-url="https://calendly.com/bookinggammunition?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=212121&text_color=ffffff&primary_color=ffeb3b"
      style="min-width: 320px; height: 650px"
    ></div>
    <script
      type="text/javascript"
      src="https://assets.calendly.com/assets/external/widget.js"
      async
    ></script>
    <!-- Calendly inline widget end -->
    <h2 class="my-10">Contacts</h2>

    <div class="max-w-2xl mx-auto text-left">
      <form class="w-full space-y-4" @submit.prevent="onClick">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex flex-col flex-grow">
            <BaseInput />
          </div>
          <div class="flex flex-col text-left flex-grow">
            <label for="email">Email</label>
            <input
              v-model="email"
              class="w-full form_input text-dark-600"
              name="email"
              type="email"
            />
          </div>
        </div>
        <div class="flex flex-col text-left flex-grow">
          <label for="message">Message</label>
          <textarea
            v-model="message"
            class=""
            rows="5"
            type="textarea"
          ></textarea>
        </div>
        <div class="">
          <button class="text-white" type>send</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import BaseInput from './form/BaseInput.vue'

export default {
  components: { BaseInput },
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    onClick() {
      const mydata = {
        fields: { name: this.name, email: this.email, message: this.message },
      }
      fetch('https://api.airtable.com/v0/app24nIoWe3Q49B6u/Contact%20Form', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mydata),
      }).catch((error) => {
        console.error(error)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.Booking {
  background-color: $color-secondary-dark;
  // @include section-padding;
  text-align: center;

  &__title {
    color: $color-primary;
  }

  &__form {
    width: 100%;
  }
}

.form_info_container {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  width: 100%;
}

.form_input {
  width: 100%;
  font-size: large;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  &--tall {
    height: 4rem;
  }
}

.form_input_container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  margin-top: 2rem;
}

.form_label {
  color: $color-primary;
  text-align: left;
  font-size: x-large;
  text-transform: uppercase;
}
</style>
