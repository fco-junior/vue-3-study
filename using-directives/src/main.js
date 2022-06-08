import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.directive('color', (el, binding) => {
  
  let delay = 0
  if(binding.modifiers['delay']) delay = 2000
  
  const applyColor = color => {
    if(binding.arg === 'background')
      el.style.backgroundColor = color;
    else
      el.style.color = color;
  }

  let currentColor = binding.value;

  setTimeout(() => {
    if(binding.modifiers['toggle'])
      setInterval(()=>{
        currentColor = currentColor === binding.value.color ? binding.value.colorToggle : binding.value.color
        applyColor(currentColor)
      }, 1000)
    else
      applyColor(currentColor)
  }, delay)
})

app.mount('#app');