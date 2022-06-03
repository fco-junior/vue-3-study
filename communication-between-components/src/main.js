import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

import './assets/scss/_layout.scss'

const app = createApp(App);

app.use(PrimeVue);

app.component('Button', Button)

app.mount('#app')
