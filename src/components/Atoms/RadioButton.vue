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
  <div class="switch-container">
    <input
      class="radio"
      type="radio"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @input="handleClick($event)"
    >
    
    <label :for="id" class="label">
      {{ label }}
    </label>
  </div>
</template>

<style scoped lang="scss">

.radio {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  opacity: 0;
  
  & + .label {
    --size: 20px;
    
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    
    &:before {
      position: relative;
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
      border-radius: 50%;
      transition: background .2s ease-in, transform .2s ease-out;
      content: '';
    }
  }
  
  &:checked {
    & + .label {
      &:before {
        border-color: var(--color-checkbox-input);
        background-color: var(--color-checkbox-input);
        background-image: var(--color-checkbox-checked);
      }
    }
  }
  
  &:not(:disabled):not(:checked) + .label:hover::before {
    border-color: var(--c-active-glow);
  }
  
  &:focus {
    & + .label {
      &:before {
        box-shadow: 0 8px 20px var(--color-checkbox-focus-shadow);
      }
    }
    
    &:not(:checked) + .label {
      &:before {
        border-color: var(--color-checkbox-input);
      }
    }
  }
  
  &:disabled + .label {
    cursor: not-allowed;
    
    &:after,
    &:before {
      opacity: .6;
      pointer-events: none;
    }
  }
}
</style>
