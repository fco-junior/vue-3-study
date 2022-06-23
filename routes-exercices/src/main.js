import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router';
import TabMenu from 'primevue/tabmenu';
import Button from 'primevue/button';

import './assets/sass/_layout.scss';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';               
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.component('TabMenu', TabMenu);
app.component('Button', Button);

app.mount('#app');