<script setup>

import Section from "@/components/Organisms/Section.vue";
import Button from "@/components/Atoms/Button.vue";

</script>

<template>
  <Section>
    <div class="header">
      <h2 class="title2">
        Buttons
      </h2>
    </div>
    <div class="buttons">
      <Button>
        Button
      </Button>
      <Button is-round>
        Round
      </Button>
      <Button loading>
        Loading
      </Button>
      <Button disabled>
        Disabled
      </Button>
    </div>
    <div class="buttons">
      <Button
        color-btn="secondary"
      >
        Secondary
      </Button>
      <Button
        color-btn="secondary"
        is-round
      >
        Secondary
      </Button>
      <Button
        color-btn="secondary"
        loading
      >
        Secondary
      </Button>
      <Button
        color-btn="secondary"
        disabled
      >
        Secondary
      </Button>
    </div>
  </Section>
</template>

<style scoped lang="scss">
.header {
  margin-bottom: 32px;
  color: var(--color-heading);
}

.buttons {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  width: 100%;
  
  margin-bottom: 16px;
  justify-items: center;
}
</style>
