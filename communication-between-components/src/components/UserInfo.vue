<template>
  <div class="user-info">
    <h2>User infos</h2>
    <p>User name is {{name}}</p>
  </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: "unknown"
        }
    }
};
</script>
