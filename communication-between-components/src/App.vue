<template>
  <div id="#app">
    <User />
  </div>
</template>

<script>
import User from './components/User.vue'
import './assets/scss/_app.scss'
export default {
  name: 'App',
  components: { User }
}
</script>
