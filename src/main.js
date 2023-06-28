import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebaseConfig from './firebase'
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)
app.mount('#app')


