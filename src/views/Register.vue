<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'

import Section from "@/components/Organisms/Section.vue";

import AtomIconsGoogle from "@/components/Atoms/Icons/Google.vue"
import AtomIconsTelegram from "@/components/Atoms/Icons/Telegram.vue"
import AtomInput from "@/components/Atoms/Input.vue";

const router = useRouter()

const email = ref('')
const password = ref('')
const nameUser = ref('')

const register = () => {
  const auth = getAuth()
  const emailValue = email.value
  const passwordValue = password.value
  const nameUserValue = nameUser.value
  
  createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((userCredential) => {
      const user = userCredential.user;
      
      if (nameUserValue) {
        updateProfile(user, {
          displayName: nameUserValue
        })
          .then(() => {
            alert(`${nameUserValue}! Вы зарегистрированы`);
          })
          .catch((error) => {
            console.log('Ошибка при обновлении профиля:', error);
          });
      } else {
        alert('Вы зарегистрированы')
      }
    })
    .catch((error) => {
      console.log(`
error: ${error.code}
code: ${error.code}
message: ${error.message}
			`)
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
  <Section center>
    <h1 class="title1">
      Регистрация
    </h1>
    <div class="register">
      <AtomInput
        input-type="text"
        placeholder="Email"
        v-model="email"
      />
      <AtomInput
        input-type="password"
        placeholder="Password"
        v-model="password"
      />
      <AtomInput
        input-type="text"
        placeholder="Name"
        v-model="nameUser"
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
  </Section>
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
