<template>
  <div class="user-info">
    <h2>User infos</h2>
    <p>User name is {{ name }}</p>
    <Button label="Restart name Callback" @click="restartNameCallback" />
    <Button label="Restart name Emit" @click="restartName" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "unknown",
    },
    restartNameCallback: {
        type: Function
    }
  }
  ,methods :{
      restartName(){
          this.$emit('restart-name', "Francisco")
      }
  }
};
</script>
