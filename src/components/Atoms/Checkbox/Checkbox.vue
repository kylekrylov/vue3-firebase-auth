<script setup>
const emits = defineEmits(['update:checked', 'updateCheckboxGroup'])
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  group: {
    type: Boolean,
    default: false
  }
})

const handleClick = (event) => {
  if (props.group) {
    emits('updateCheckboxGroup', {optionId: props.id, checked: event.target.checked})
  } else {
    emits('update:checked', event.target.checked)
  }
}
</script>

<template>
  <input
    class="checkbox"
    type="checkbox"
    :id="id"
    :value="value"
    :checked="checked"
    :disabled="disabled"
    @input="handleClick($event)"
  >
  <label
    class="label"
    :for="id"
  >
    {{ label }}
  </label>
</template>

<style lang="scss" scoped>
.checkbox {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  opacity: 0;
  
  & + .label {
    
    --size: 20px;
    
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    
    &:before {
      display: flex;
      flex-grow: 0;
      flex-shrink: 0;
      width: var(--size);
      height: var(--size);
      margin-right: 8px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 50% 50%;
      border: 1px solid var(--color-checkbox-input);
      border-radius: 4px;
      content: '';
    }
  }
  
  &:checked + .label {
    &:before {
      border-color: var(--color-checkbox-input);
      background-color: var(--color-checkbox-input);
      background-image: var(--color-checkbox-checked);
    }
  }
  
  &:not(:disabled):not(:checked) + .label:hover::before {
    border-color: var(--c-active-glow);
  }
  
  &:not(:disabled):active + .label::before {
    background-color: var(--color-checkbox-input);
    border: 1px solid var(--color-checkbox-background);
  }
  
  &:focus + .label {
    &:before {
      box-shadow: 0 8px 20px var(--color-checkbox-focus-shadow);
    }
  }
  
  &:focus:not(:checked) + .label {
    &:before {
      border-color: var(--color-checkbox-input);
    }
  }
  
  &:disabled + .label {
    cursor: not-allowed;
    &:before {
      opacity: .6;
      pointer-events: none;
    }
  }
}
</style>
