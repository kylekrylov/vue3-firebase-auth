<script setup>
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['update:modelValue'])

defineProps({
  modelValue: {
    type: String,
    default: '',
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  error: {
    type: String,
    default: ''
  }
})
const updateValue = (event) => emit('update:modelValue', event.target.value)

</script>

<template>
  <div class="wrap">
    <label :for="name" v-if="label" class="label text t-500">
      {{ label }}
    </label>
    <input
      class="input"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
    >
    <span class="error t-xs">
      {{ error }}
    </span>
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
}

.input {
  width: 100%;
  padding: 8px 16px;
  background: var(--color-background-input);
  border: none;
  border-radius: 8px;
  color: var(--color-text-input);
}

.error {
  display: flex;
  color: var(--color-danger);
}
</style>
