<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <TheHeader/>
  
  <main class="main">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </main>
  
  <TheFooter/>
</template>
<style scoped lang="scss">

.page-leave-to,
.page-enter-from{
  opacity: 0;
  transform: translateX(-10%);
}

.page-enter-active,
.page-leave-active {
  transition: transform .2s ease-out, opacity .1s ease-out;
}
</style>
