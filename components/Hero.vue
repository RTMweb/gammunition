<template>
  <div class="hero">
    <div class="container hero__content">
      <h1 class="hero__title">
        Welcome to<br />
        <span>Gammunition</span>
      </h1>
      <h2 class="hero__subtitle">Knowledge - Skill - Attitude</h2>
      <p class="hero__text">
        However You’ve Arrive Here, You’re Ready. Allow A Certified NRA
        Instructor To Transfer The Knowledge, Skills and Attitude You Need To Be
        A Responsible Firearm Operator.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: grid;
  align-content: center;
  background-color: $color-secondary-dark;
  background-image: url('https://ik.imagekit.io/cpds/HeroIMG_dvHjr-HYP.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;
  min-height: 60vh;

  @include section-padding;
}
.hero__content {
  display: grid;
  color: $color-white;
  text-align: center;

  @media (min-width: 640px) {
    text-align: right;
  }
}

.hero__title {
  font-size: clamp(2rem, 8vw, 12rem);
  font-weight: 500;

  & span {
    margin-top: 1rem;
    font-size: clamp(4rem, 12vw, 18rem);
    font-weight: 400;
    color: $color-primary;
  }
}

.hero__subtitle {
  font-size: 2.5rem;
  color: $color-secondary-light;
  font-weight: 100;
  margin-top: 2rem;

  @media (min-width: 640px) {
    font-size: 4rem;
  }
}

.hero__text {
  font-weight: 100;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 150%;
  letter-spacing: 0.1rem;
  color: $color-white;

  @include text-container;

  @media (min-width: 640px) {
    margin-left: 50%;
  }
}
</style>
