<script setup>

import { computed, defineProps } from 'vue'

const props = defineProps({
  center: {
    type: Boolean,
    default: false,
  }
})

const sectionClass = computed(() => {
  const mainClass = 'section';
  const modifierCenterClass = {[`${mainClass}--center`]: props.center}
  
  return [mainClass, modifierCenterClass]
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
  width: 100%;
  
  // .section--center
  &--center {
    align-self: center;
    justify-self: center;
  }
  
  // .section__container
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
