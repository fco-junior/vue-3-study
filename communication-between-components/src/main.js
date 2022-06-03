import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import './assets/scss/_layout.scss'

const app = createApp(App);

app.use(PrimeVue);

app.mount('#app')
