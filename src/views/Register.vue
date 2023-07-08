<script setup>
import { reactive } from 'vue'
import { useRouter } from "vue-router";
import {
  getAuth,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { useAuthStore } from '@/store/auth'
import { storeToRefs } from "pinia";

/* components */
import OrganismsSection from "@/components/Organisms/Section.vue";
import AtomIconsGoogle from "@/components/Atoms/Icons/Google.vue"
import AtomIconsTelegram from "@/components/Atoms/Icons/Telegram.vue"
import AtomInput from "@/components/Atoms/Input.vue";

const authStore = useAuthStore()
const {userAuth} = storeToRefs(authStore)
const {onAuthState} = authStore

const router = useRouter()

const user = reactive({
  email: '',
  password: '',
  name: '',
})

const register = () => {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      const createUser = userCredential.user;
      userAuth.name = user.name
      
      if (userAuth.name) {
        updateProfile(createUser, {
          displayName: userAuth.name
        })
          .then(() => {
            console.log(`Ваш ник ${userAuth.name}!`);
          })
          .catch((error) => {
            console.log('Ошибка при обновлении профиля:', error);
          });
      }
      alert(`${userAuth.name} Вы зарегистрированы!`)
      onAuthState()
      router.push('/')
    })
    .catch((error) => {
      console.log(`error: ${error.code}`)
    })
}

const singInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      router.push('/')
    })
    .catch((error) => {
      console.log(error)
    })
}

</script>

<template>
  <OrganismsSection center>
    <h1 class="title1">
      Регистрация
    </h1>
    <div class="register">
      <AtomInput
        input-type="text"
        placeholder="Email"
        v-model="user.email"
      />
      <AtomInput
        input-type="password"
        placeholder="Password"
        v-model="user.password"
      />
      <AtomInput
        input-type="text"
        placeholder="Name"
        v-model="user.name"
      />
      <div>
        <button
          class="register__button button"
          @click="register"
        >
          Register
        </button>
      </div>
      <div class="register__buttons">
        <button
          class="register__button button button-google"
          @click="singInWithGoogle"
        >
          <AtomIconsGoogle/>
        </button>
        <button
          class="register__button button button-google"
          disabled
          @click="singInWithGoogle"
        >
          <AtomIconsTelegram/>
        </button>
      </div>
    </div>
  </OrganismsSection>
</template>

<style scoped lang="scss">

.register {
  display: grid;
  grid-gap: 20px;
  
  &__buttons {
    display: flex;
    grid-gap: 8px;
    gap: 8px;
  }
  
  // .register__button
  &__button {
    width: 100%;
    
    .svg {
      width: 20px;
      height: 20px;
    }
  }
}

.register {
  min-width: 280px;
}

.button-google {
  width: 40px;
  height: 40px;
  padding: 12px;
}
</style>
