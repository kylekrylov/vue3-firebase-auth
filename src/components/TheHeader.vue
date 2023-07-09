<script setup>
import menuList from "@/mocks/menu";
import AtomsIconsAlien from "@/components/Atoms/Icons/Alien.vue";

import { computed, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useRouter } from "vue-router";

const router = useRouter();

import { useAuthStore } from '@/store/auth'
import { storeToRefs } from "pinia";

const authStore = useAuthStore()
const {isLoggedIn, userAuth, userAuthName} = storeToRefs(authStore)
const {onAuthState} = authStore

import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const userBody = ref(null)
onClickOutside(userBody, (event) => closeUserMenu())

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


const altUserImage = computed(() => {
  if (!userAuthName.value) return
  
  const arr = userAuthName.value.replace(/\s/g, "").split("");
  
  console.log(arr)
  return userAuthName.value[0].toUpperCase()
})

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log('Всё, вы не авторизованы')
      router.push('/')
    })
    .catch(() => {
      console.log('что-то пошло не так c signOut()')
    })
    .finally(() => {
      onAuthState()
    })
}


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
          ref="userBody"
          :class="{'--active' : activeUserMenu }"
          class="header-user__body"
          @click="toggleUserMenu"
        >
          <div class="header-user__avatar">
            <template v-if="isLoggedIn">
              <img
                v-if="userAuth.photo"
                class="header-user__image"
                :src="userAuth.photo"
                alt="avatar"
              >
              <span
                v-else
                class="header-user__avatar-text"
              >
                {{ altUserImage }}
              </span>
            </template>
            
            <AtomsIconsAlien v-else/>
          </div>
          <ul class="header-user__drop-list">
            <template v-if="isLoggedIn">
              <li class="header-user__drop-item">
                <RouterLink
                  class="header-user__drop-link link"
                  to="/profile"
                >
                  Profile
                </RouterLink>
              </li>
              <li class="header-user__drop-item">
                <a
                  class="header-user__drop-link link"
                  @click.prevent="handleSignOut"
                >
                  Log out
                </a>
              </li>
            </template>
            <template v-else>
              <li class="header-user__drop-item">
                <RouterLink
                  class="header-user__drop-link link"
                  to="/register"
                >
                  Register
                </RouterLink>
              </li>
              <li class="header-user__drop-item">
                <RouterLink
                  class="header-user__drop-link link"
                  to="/sing-in"
                >
                  Sing In
                </RouterLink>
              </li>
            </template>
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
  
  // .header-user__body
  &__body {
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
      
      // .header-user__body:hover .header-user__drop-list
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
  
  // .header-user__avatar-text
  &__avatar-text {
    font-weight: bold;
  }
  
  // .header-user__drop-list
  &__drop-list {
    position: absolute;;
    top: 100%;
    right: 0;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.46);
    border-radius: 8px;
    opacity: 0;
    transform: translateX(8px);
    transition: opacity .2s ease-out .2s,
    transform .2s ease-out .2s;
    pointer-events: none;
    padding-block: 8px;
  }
  
  // .header-user__drop-link
  &__drop-link {
    display: flex;
    justify-content: flex-end;
    padding: 4px 12px;
    white-space: nowrap;
  }
}

.svg {
  display: flex;
  width: 20px;
  height: 20px;
  fill: white;
}
</style>
