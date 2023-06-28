<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import AtomIconsGoogle from "@/components/Atoms/Icons/Google.vue"
import AtomIconsTelegram from "@/components/Atoms/Icons/Telegram.vue"
import AtomInput from "@/components/Atoms/Input.vue";

const email = ref('')
const password = ref('')

const test = ref('test')

const register = () => {
	const auth = getAuth()
	createUserWithEmailAndPassword(auth, email.value, password.value)
		.then((data) => {
			console.log(auth.currentUser)
			alert('Вы зарегистрированы')
		})
		.catch((error) => {
			console.log(`
error: ${error.code}
code: ${error.code}
message: ${error.message}
			`)
			// alert(error.message)
		})
}

const singInWithGoogle = () => {

}

</script>

<template>
	<section class="section section--center">
		<div class="section__container container">
      <h1 class="title1">
        Регистрация
			</h1>
			<div class="register">
				<AtomInput
					type="text"
					placeholder="Email"
					v-model="email"
				/>
				<AtomInput
					type="password"
					placeholder="Password"
					v-model="password"
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
            disabled
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
		</div>
	</section>
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
