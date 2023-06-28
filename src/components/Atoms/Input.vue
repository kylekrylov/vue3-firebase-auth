<script setup>
import { defineProps, defineEmits } from 'vue'

defineEmits(['update:modelValue'])

defineProps({
	modelValue: {
		type: String,
		default: '',
		required: true
	},
	placeholder: {
		type: String,
		default: 'placeholder',
		required: true
	},
	type: {
		type: String,
		default: 'text',
		required: false
	}
})
</script>

<template>
	<div>
		<input
			class="input"
			:type="type"
			:placeholder="placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		>
	</div>
</template>

<style scoped>

.input {
  width: 100%;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  color: var(--color-text-input);
  background: var(--color-background-input);
}
</style>
