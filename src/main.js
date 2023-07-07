import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import firebaseConfig from './firebase'
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')


