<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

import AtomIconsGoogle from "@/components/Atoms/Icons/Google.vue"
import AtomIconsTelegram from "@/components/Atoms/Icons/Telegram.vue"
import AtomInput from "@/components/Atoms/Input.vue";
import Section from "@/components/Organisms/Section.vue";

const router = useRouter()
const email = ref('')
const password = ref('')

const signIn = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      router.push('/')
    })
    .catch((error) => {
      console.log(`
error: "${error.code}"
code: "${error.code}"
message:"${error.message}"
			`)
    })
}

const signInWithGoogle = () => {
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
        Войти
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
        <div>
          <button
            class="register__button button"
            @click="signIn"
          >
            Войти
          </button>
        </div>
        <div class="register__buttons">
          <button
            class="register__button button button-google"
            @click="signInWithGoogle"
          >
            <AtomIconsGoogle/>
          </button>
          <button
            class="register__button button button-google"
            disabled
            @click=""
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
  min-width: 280px;
  
  &__buttons {
    display: flex;
    grid-gap: 8px;
    gap: 8px;
  }
  
  // .register__input
  &__input {
    width: 100%;
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

.button-google {
  width: 40px;
  height: 40px;
  padding: 12px;
}
</style>
