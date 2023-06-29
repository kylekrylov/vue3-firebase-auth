<script setup>

import { computed, defineProps } from 'vue'

const props = defineProps({
  center: {
    type: Boolean,
    default: false,
  }
})

const sectionClass = computed(() => {
  const main = 'section';
  const center = {[`${main}--center`]: props.center}
  return [main, center]
})
</script>

<template>
  <section :class="sectionClass">
    <div class="section__container container">
      <slot/>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.section {
  display: flex;
  
  // .section--center
  &--center {
    align-self: center;
    justify-self: center;
  }
  
  // .section__container
  &__container {
  
  }
}
</style>
