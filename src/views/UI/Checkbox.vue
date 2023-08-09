<script setup>

import Section from "@/components/Organisms/Section.vue";
import AtomCheckbox from "@/components/Atoms/Checkbox/Checkbox.vue";
import AtomSwitch from "@/components/Atoms/Checkbox/Switch.vue";
import AtomRadioButton from "@/components/Atoms/RadioButton.vue";
</script>

<template>
  <Section>
    <div class="header">
      <h2 class="title2">
        Checkbox
      </h2>
    </div>
    <div class="checkbox">
      <AtomCheckbox
        name="checkbox"
        label="Checkbox"
        id="checkbox"
      />
      <AtomCheckbox
        name="checkbox"
        label="checked"
        id="checked1"
        checked
      />
      <AtomCheckbox
        name="checkbox"
        label="checked"
        id="disabled2"
        disabled
      />
    </div>
  </Section>
  <Section>
    <div class="header">
      <h2 class="title2">
        Switch
      </h2>
    </div>
    <div class="checkbox">
      <AtomSwitch
        id="switch"
        label="switch"
      />
      <AtomSwitch
        id="switch-checked"
        label="checked"
        checked
      />
      <AtomSwitch
        id="switch-disabled"
        label="checked"
        disabled
      
      />
    </div>
  </Section>
  <Section>
    <div class="header">
      <h2 class="title2">
        Radio
      </h2>
    </div>
    <div class="checkbox">
      <AtomRadioButton
        id="radio"
        name="radio"
        label="Radio"
      
      />
      <AtomRadioButton
        id="radio1"
        name="radio"
        label="checked"
        checked
      />
      <AtomRadioButton
        id="radio1"
        name="radio"
        label="disabled"
        disabled
      />
    </div>
  </Section>
</template>

<style scoped lang="scss">

.header {
  margin-bottom: 32px;
  color: var(--color-heading);
}

.checkbox {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  width: 100%;
  margin-bottom: 16px;
  justify-items: center;
}
</style>
