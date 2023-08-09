<script setup>

import Section from "@/components/Organisms/Section.vue";
import AtomInput from "@/components/Atoms/Input.vue";
import { ref } from "vue";
import Textarea from "@/components/Atoms/Textarea.vue";

const modelInput = ref('')
const modelTextarea = ref('')

</script>

<template>
  <Section>
    <div class="header">
      <h2 class="title2">
        Input
      </h2>
    </div>
    <div class="inputs">
      
      <div class="input">
        <AtomInput
          placeholder="placeholder"
          label="label text"
          error="error text"
          v-model="modelInput"
        />
        {{ modelInput }}
      </div>
    
    </div>
    <div class="inputs">
      <div class="input">
        <Textarea
          placeholder="placeholder"
          label="label textarea"
          error="error text"
          v-model="modelTextarea"
        />
        {{ modelTextarea }}
      </div>
    </div>
  </Section>
</template>

<style scoped lang="scss">
.header {
  margin-bottom: 32px;
  color: var(--color-heading);
}

.inputs {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  width: 100%;
  margin-bottom: 16px;
}

</style>
