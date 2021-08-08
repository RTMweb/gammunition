<template>
  <div>
    <Navigation />
    <Hero />
    <Feature />
    <TrainingServices />
    <FirearmServices />
    <Testimonials />
    <BookingContact />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Hero from '../components/Hero.vue'
import Feature from '../components/Feature.vue'
import TrainingServices from '../components/TrainingServices.vue'
import FirearmServices from '../components/FirearmServices.vue'
import Testimonials from '../components/Testimonials.vue'
import BookingContact from '../components/BookingContact.vue'

export default {
  components: {
    Navigation,
    Hero,
    Feature,
    TrainingServices,
    FirearmServices,
    Testimonials,
    BookingContact,
  },
}
</script>
