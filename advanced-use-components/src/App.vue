<template>
  <div id="#app">
    <div>
      <Button label="Quotes" class="p-button-lg" @click="currentComponent = 'Quotes'" />
      <Button label="About" class="p-button-lg" @click="currentComponent = 'About'" />
    </div>
    <KeepAlive>
      <component :is="currentComponent" />
    </KeepAlive>
  </div>
</template>

<script>
import Quotes from "./components/Quotes";
import About from "./components/About";
import "./assets/scss/_app.scss";

export default {
  name: "App",
  components: { Quotes, About },
  data() {
    return {
      currentComponent: "Quotes",
    };
  },
};
</script>
