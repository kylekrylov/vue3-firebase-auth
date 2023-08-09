<script setup>

import Section from "@/components/Organisms/Section.vue";
import Button from "@/components/Atoms/Button.vue";
import { ref } from "vue";

const loadButton = ref(false)

const eventClickButton = (text) => {
  
  console.log(`click ${text}`)
  loadButton.value = true
  
  setTimeout(() => {
    loadButton.value = false
  }, 5000)
}

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
      <Button
        :loading="loadButton"
        @click="eventClickButton('Loading')"
      >
        Click!
      </Button>
      <Button disabled>
        Disabled
      </Button>
    </div>
  </Section>
    <Section>
      <div class="header">
        <h2 class="title2">
          Buttons fill
        </h2>
      </div>
    <div class="buttons">
      <Button color-btn="fill">
        Fill Buttons
      </Button>
      <Button
        color-btn="fill"
        is-round
      >
        Round
      </Button>
      <Button
        color-btn="fill"
        loading
        @click="eventClickButton('Fill loading')"
      >
        Loading
      </Button>
      <Button
        color-btn="fill"
        disabled
      >
        Disabled
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
