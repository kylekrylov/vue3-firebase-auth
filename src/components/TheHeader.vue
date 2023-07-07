<script setup>
import { computed, ref } from 'vue'
import { useAuthStore } from '@/store/auth'
import { storeToRefs } from "pinia";
import menuList from "@/mocks/menu";

import { onClickOutside } from '@vueuse/core'

const userBlock = ref(null)

onClickOutside(userBlock, (event) => closeUserMenu())

const authStore = useAuthStore()
const {isLoggedIn, userAuth} = storeToRefs(authStore)
const {handleSignOut} = authStore
const activeUserMenu = ref(false)

const toggleUserMenu = () => {
  activeUserMenu.value = !activeUserMenu.value
}
const closeUserMenu = () => {
  activeUserMenu.value = false
}

const filteredMenu = computed(() => {
  return isLoggedIn.value ? menuList : [menuList[0]]
});


const altUserImage = computed(async () => {
  const name = !userAuth ? userAuth.name[0].toUpperCase() : ''
  return name
})

</script>

<template>
  <header class="header">
    <div class="header__container container">
      <nav class="header__nav">
        <RouterLink
          v-for="menuItem in filteredMenu"
          :to="menuItem.url"
          class="header__nav-item"
        >
          {{ menuItem.title }}
        </RouterLink>
      </nav>
      
      <div class="header__user header-user">
        <div
          v-if="!isLoggedIn"
          class="header-auth"
        >
          <RouterLink
            class="link"
            to="/register"
          >
            Register
          </RouterLink>
          <RouterLink
            class="link"
            to="/sing-in"
          >
            Sing In
          </RouterLink>
        </div>
        <div
          v-if="isLoggedIn"
          ref="userBlock"
          :class="{'--active' : activeUserMenu }"
          class="header-user__block"
          @click="toggleUserMenu"
        >
          <div class="header-user__avatar">
            <img
              v-if="userAuth.photo"
              class="header-user__image"
              :src="userAuth.photo"
              alt="avatar"
            >
            <span v-else>
              {{ altUserImage }}
            </span>
          </div>
          <ul class="header-user__drop-list">
            <li class="header-user__drop-item">
              <RouterLink
                class="header-user__drop-link link"
                to="/profile"
              >
                Профиль
              </RouterLink>
            </li>
            <li class="header-user__drop-item">
              <a
                class="header-user__drop-link link"
                @click.prevent="handleSignOut"
              >
                Выйти
              </a>
            </li>
          </ul>
        </div>
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
    min-height: 60px;
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
    
    &.--active {
      border-bottom: 1px solid var(--c-active);
    }
  }
}

// .header-user
.header-user {
  --size: 40px;
  
  // .header-user__block
  &__block {
    position: relative;
    display: flex;
    align-items: center;
    padding: 4px;
    
    &:before {
      position: absolute;
      border: 2px solid var(--c-active-glow);
      border-radius: 50%;
      opacity: 0;
      transition: opacity .2s ease-out;
      content: '';
      pointer-events: none;
      inset: 0;
    }
    
    &:hover,
    &.--active {
      &:before {
        opacity: 1;
      }
      
      // .header-user__block:hover .header-user__drop-list
      .header-user {
        &__drop-list {
          opacity: 1;
          transform: translateX(0px);
          pointer-events: visible;
        }
      }
    }
  }
  
  // .header-user__avatar
  &__avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    background: var(--c-active);
    border-radius: 50%;
    cursor: pointer;
    color: var(--color-const-white);
    overflow: hidden;
  }
  
  // .header-user__drop-list
  &__drop-list {
    position: absolute;;
    top: 100%;
    right: -12px;
    opacity: 0;
    transform: translateX(8px);
    transition: opacity .2s ease-out,
    transform .2s ease-out;
    pointer-events: none;
    
    //.header-user__block
  }
  
  // .header-user__drop-link
  &__drop-link {
    display: flex;
    justify-content: flex-end;
    padding: 4px 12px;
    
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
