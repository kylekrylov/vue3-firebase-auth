<script setup>
const menuBar = [
  {title: 'Button', url: '/ui/button'},
  {title: 'Checkbox', url: '/ui/checkbox'},
  {title: 'Input', url: '/ui/input'}
]

</script>

<template>
  <ul class="ui-list">
    <li
      v-for="item in menuBar"
      :key="item"
      class="ui-list__item"
    >
      <router-link
        :to="item.url"
        class="ui-list__link"
      >
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped lang="scss">

.ui-list {
  display: flex;
  justify-content: center;
  grid-gap: 8px;
  width: 100%;
  margin-bottom: 32px;
  gap: 8px;
  flex-wrap: wrap;
  
  // .ui-list__item
  &__item {
    display: flex;
  }
  
  // .ui-list__link
  &__link {
    &.--active {
      border-bottom: 1px solid var(--c-active);
    }
    
    &.--disabled,
    &[disabled] {
      opacity: .5;
      pointer-events: none;
    }
  }
}
</style>
