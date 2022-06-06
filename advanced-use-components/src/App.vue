<template>
  <div id="#app">
    <Quotes />
    <About />
  </div>
</template>

<script>
import Quotes from "./components/Quotes";
import About from "./components/About";
import './assets/scss/_app.scss'

export default {
  name: 'App',
  components: { Quotes, About }
}
</script>

