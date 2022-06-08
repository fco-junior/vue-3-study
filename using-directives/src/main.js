import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.directive('color', (el, binding) => {
    
  if(binding.arg === 'background')
    el.style.backgroundColor = binding.value;
  else
    el.style.color = binding.value;

})

app.mount('#app');