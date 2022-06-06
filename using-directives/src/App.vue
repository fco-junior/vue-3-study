<template>
  <div id="#app">
    <h1 v-color="color"> Using Directives </h1>
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