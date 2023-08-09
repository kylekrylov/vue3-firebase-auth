<script setup>

defineProps({
  is: {
    type: Object,
    required: true
  },
})

</script>

<template>
  <div>
    {{ is }}
  </div>
</template>

<style scoped lang="scss">

</style>
