<template>
  <nav class="navigation">
    <div class="navigation__bar">
      <div class="navigation__container container">
        <div class="navigation__brand">
          <div class="navigation__logo--container">
            <img
              src="../assets/Logo@2x.png"
              alt="Gammunition Logo"
              class="navigation__logo--img"
            />
          </div>
          <div class="mb-4 sm:mb-0">
            <div class="navigation__logo--title">Gammunition</div>
            <div class="navigation__logo--subtitle">Arms Training</div>
          </div>
          <transition name="fade">
            <div v-if="isActive" class="drawer">
              <a class="drawer__link">Training Services</a>
              <a class="drawer__link">Firearm Services</a>
              <a class="drawer__link">Testimonials</a>
              <a class="drawer__link">Contact and Booking</a>
            </div>
          </transition>
        </div>
        <div class="navigation__phone">PH: 813 785-5468</div>
      </div>
    </div>
    <div class="container">
      <div class="navigation__links--container">
        <button
          class="hamburger hamburger--emphatic navigation__button"
          :class="{ 'is-active': isActive }"
          type="button"
          @click="menuButtonClick"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner ham"></span>
          </span>
        </button>
        <ul class="link-list">
          <li>
            <a class="navigation__link" href="#TrainingServices"
              >Training Services</a
            >
          </li>
          <li>
            <a class="navigation__link" href="#FirearmServices"
              >Firearm Services</a
            >
          </li>
          <li>
            <a class="navigation__link" href="#Testimonials">Testimonials</a>
          </li>
          <li>
            <a class="navigation__link" href="#Booking">Contact-Booking</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Dropdown -->
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    menuButtonClick() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  background-color: $color-secondary-dark;
  padding-bottom: 2rem;
  position: relative;
  border-bottom: 3px solid $color-primary;
}

.navigation__bar {
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 4rem;
  text-align: center;
  z-index: 15;
}

.navigation__container {
  display: flex;
  flex-direction: column-reverse;
  z-index: 15;

  @media (min-width: 640px) {
    flex-direction: row;
  }
}

.navigation__brand {
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  position: relative;
  z-index: 15;

  @media (min-width: 640px) {
    flex-direction: row;
    margin-right: auto;
    text-align: left;
    margin-left: 0px;
  }
}

.navigation__logo {
  &--container {
    display: grid;
    place-content: center;

    @media (min-width: 640px) {
      margin-right: 0.5rem;
    }
  }

  &--img {
    height: 13rem;
    margin-right: 0rem;
    margin-top: 8rem;
    margin-bottom: -18rem;
    box-shadow: 0px 8px 12px -6px rgba(0, 0, 0, 0.42);
    z-index: 15;

    @media (min-width: 640px) {
      height: 9rem;
      margin-right: 1rem;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &--title {
    font-size: 6rem;
    font-weight: 500;
    text-transform: uppercase;
    color: $color-white;
    margin-bottom: 1rem;

    @media (min-width: 640px) {
      font-size: 4rem;
    }
  }

  &--subtitle {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 100;
    color: $color-secondary-light;
    letter-spacing: 0.06em;

    @media (min-width: 640px) {
      font-size: 2rem;
    }
  }
}

.navigation__phone {
  color: $color-primary;
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
}

.navigation__links--container {
  display: flex;
  padding-left: 0;
  justify-content: center;
  position: relative;

  @media (min-width: 640px) {
    justify-content: flex-end;
  }

  @media (min-width: 1020px) {
    justify-content: flex-end;
    li:not(:first-child) {
      padding-left: 4rem;
    }
  }
}

.link-list {
  display: flex;
  padding-left: 0;
  justify-content: center;
  position: relative;

  @media (min-width: 1020px) {
    justify-content: flex-end;
    li:not(:first-child) {
      padding-left: 4rem;
    }
  }
}

.navigation__link {
  display: none;
  font-size: 1.5rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: $color-white;
  text-decoration: none;

  &:hover {
    color: $color-primary;
  }

  &:active {
    color: $color-primary-dark;
  }

  @media (min-width: 1020px) {
    display: block;
  }
}

.navigation__button {
  display: block;
  margin-top: -2.5rem;
  padding-bottom: 5rem;

  @media (min-width: 640px) {
    margin-top: 0;
    padding-bottom: 0;
  }

  @media (min-width: 1020px) {
    display: none;
  }
}

.drawer {
  border-top: 3px solid $color-primary;
  display: flex;
  padding-top: 10rem;
  flex-direction: column;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  background-color: $color-secondary-dark;
  max-width: 30rem;
  left: 0;
  right: 0;
  top: 23rem;
  overflow: hidden;
  box-shadow: 0px 8px 12px -6px rgba(0, 0, 0, 0.42);
  z-index: 10;
  text-align: left;

  @media (min-width: 640px) {
    top: 16.5rem;
    padding-top: 0rem;
  }
  @media (min-width: 768px) {
    top: 15rem;
  }
  @media (min-width: 1024px) {
    display: none;
  }
}

.drawer__link {
  padding: 1.5rem 1rem;
  background-color: $color-secondary;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 1.5rem;
  transition: all 0.2s ease;
  color: $color-secondary-dark;
  border-left: 5px solid $color-primary;
  border-bottom: 1px solid $color-secondary-dark;

  &:hover {
    background-color: $color-primary;
    font-size: large;
    border-left: 15px solid $color-primary-dark;
  }

  &:active {
    background-color: $color-primary-dark;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  transform: translateX(-150%);
}
</style>
