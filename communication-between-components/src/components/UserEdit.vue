<template>
  <div class="user-edit">
    <h2>User edit</h2>
    <p> User age is <strong>{{ age }}</strong> </p>
    <Button label="Change age" @click="changeAge"/>
  </div>
</template>

<script>
export default {
  props: {
    age: {
      type: Number,
      default: 0,
    },
  },
  methods: {
      changeAge(){
          this.$emit('change-age', 30)
      }
  }
};
</script>
