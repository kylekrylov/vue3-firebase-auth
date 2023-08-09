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
      class="switch"
      type="checkbox"
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


.switch-container {
  display: flex;
  align-items: center;
}

.switch {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  opacity: 0;
  
  & + .label {
    --size-boll: 20px;
    --size-border: calc(var(--size-boll) / 4);
    --width-checkbox: calc(var(--size-boll) * 2 + var(--size-border));
    --height-checkbox: calc(var(--size-boll) + var(--size-border) * 1.5);
    
    --translate-x: calc(var(--size-boll) - var(--size-border));
    
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    
    &:before,
    &:after {
      display: flex;
      border-radius: 100px;
      transition: background .2s ease-in, transform .2s ease-out;
      flex-grow: 0;
      flex-shrink: 0;
    }
    
    &:before {
      position: relative;
      width: var(--width-checkbox);
      height: var(--height-checkbox);
      margin-right: var(--size-border);
      border: 1px solid var(--color-checkbox-input);
      content: "";
    }
    
    &:after {
      position: absolute;
      left: var(--size-border);
      width: var(--size-boll);
      height: var(--size-boll);
      background: var(--color-checkbox-input);
      content: "";
    }
  }
  
  &:checked {
    & + .label {
      &:after {
        
        background: var(--color-checkbox-background);
        transform: translateX(var(--translate-x));
      }
      
      &:before {
        background: var(--color-checkbox-input);
      }
    }
  }
  
  &:not(:disabled):not(:checked) + .label:hover::before {
    border-color: var(--c-active-glow);
  }
  
  &:not(:disabled):active + .label::before {
    background-color: var(--color-checkbox-input);
    border: 1px solid var(--color-checkbox-background);
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
