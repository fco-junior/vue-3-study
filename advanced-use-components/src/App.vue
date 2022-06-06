<template>
  <div id="#app">
    <Quotes />
    <About />
  </div>
</template>

<script>
import Quotes from "./components/Quotes";
import About from "./components/About";

export default {
  name: 'App',
  components: { Quotes, About }
}
</script>

