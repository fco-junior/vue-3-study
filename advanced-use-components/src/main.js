import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import Card from "primevue/card";

import 'primevue/resources/themes/saga-blue/theme.css';
import './assets/scss/_layout.scss';

const app = createApp(App);

app.use(PrimeVue);

app.component('Button', Button);
app.component('Card', Card);

app.mount('#app');