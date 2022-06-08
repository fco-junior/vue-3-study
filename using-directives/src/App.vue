<template>
  <div id="#app">
    <h1 v-color="color"> Using Directives </h1>
    <h1 v-color:background="'red'"> Using Directives and Args </h1>
    <h1 v-color:background.delay="'green'"> Using Directives and Args and Modifiers </h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      color: 'blue'
    }
  }
}
</script>