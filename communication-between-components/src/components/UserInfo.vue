<template>
  <div class="user-info">
    <h2>User infos</h2>
    <p>User name is {{ name }}</p>
    <Button label="Restart name" @click="restartName" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "unknown",
    },
    restartName: {
        type: Function
    }
  }
};
</script>
