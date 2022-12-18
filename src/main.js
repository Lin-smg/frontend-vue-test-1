import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// import './assets/main.css'
import './css/styles.scss'

// import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import router from './router'
const pinia = createPinia()
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import 'vue3-carousel/dist/carousel.css'


AOS.init();

const app = createApp(App)
app.use(bootstrap)
app.use(pinia)
app.use(router)
app.use(Vue3Marquee)

app.mount('#app')
