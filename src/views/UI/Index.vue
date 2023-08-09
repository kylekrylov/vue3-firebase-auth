<script setup>

import Section from "@/components/Organisms/Section.vue";
import UiNavigation from "@/components/Molecules/UiNavigation.vue";
</script>

<template>
  <Section>
    <UiNavigation/>
    <router-view/>
  </Section>
</template>

<style scoped lang="scss">

</style>
