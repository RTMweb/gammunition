<template>
  <div class="columns margins">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.margins {
  margin-top: 4rem;
  margin-bottom: 10rem;
}
</style>
