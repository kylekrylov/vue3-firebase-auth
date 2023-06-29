<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

import menuList from "@/Mocks/menu";

const router = useRouter();
const isLoggedIn = ref(false)
let auth

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
    console.log('Всё, вы не авторизованы')
  })
}
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <nav class="header__nav">
        <RouterLink
          v-for="menuItem in menuList"
          :to="menuItem.url"
          class="header__nav-item"
        >
<!--          :class="isLoggedIn ? '' : '&#45;&#45;lock'"-->
          {{ menuItem.title }}
        </RouterLink>
      </nav>
      
      <div class="header__auth header-auth">
        <RouterLink
          class="header-auth__link"
          v-if="!isLoggedIn"
          to="/register"
        >
          Register
        </RouterLink>
        <RouterLink
          class="header-auth__link"
          v-if="!isLoggedIn"
          to="/sing-in"
        >
          Sing In
        </RouterLink>
        <a
          class="header-auth__link link"
          v-if="isLoggedIn"
          @click.prevent="handleSignOut"
        >
          Выйти
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">

.header {
  padding-top: 12px;
  padding-bottom: 12px;
  
  // .header__container
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  // header__nav
  &__nav {
    display: flex;
    flex-wrap: wrap;
  }
  
  // .header__nav-item
  &__nav-item {
    &:not(:first-child) {
      margin-left: 8px;
    }
    
    &.--lock {
      opacity: .5;
      pointer-events: none;
    }
  }
}

// .header-auth
.header-auth {
  // .header-auth__link
  &__link {

    &:not(:first-child) {
      margin-left: 8px;
    }
  }
}
</style>
