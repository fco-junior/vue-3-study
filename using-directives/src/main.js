import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.directive('color', (el, binding) => {
  
  let delay = 0
  if(binding.modifiers['delay']) delay = 2000
  
  setTimeout( () => {
    if(binding.arg === 'background')
      el.style.backgroundColor = binding.value;
    else
      el.style.color = binding.value;
  }, delay)
  
})

app.mount('#app');