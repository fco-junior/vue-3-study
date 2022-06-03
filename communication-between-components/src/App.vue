<template>
  <img id="#app">
  <User />
</template>

<script>
import User from './components/User.vue'
import './assets/scss/_app.scss'
export default {
  name: 'App',
  components: { User }
}
</script>
