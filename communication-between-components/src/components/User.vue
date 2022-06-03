<template>
  <div class="user">
    <h1>User Component</h1>
    <p>User name is <strong>{{ name }}</strong></p>
    <p>User age is <strong>{{ age }}</strong></p>
    <Button label="Change name" @click="changeName" />
    <div class="children">
      <UserInfo
        :name="name"
        :restartName="restartName"
        :age="age"
      />
      <UserEdit :age="age" @change-age="age = $event"/>
    </div>
  </div>
</template>

<script>
import UserInfo from "./UserInfo";
import UserEdit from "./UserEdit";

export default {
  components: { UserInfo, UserEdit },

  data() {
    return {
      name: "Júnior",
      age: 21
    };
  },
  methods: {
    changeName() {
      this.name = "Francisco";
    },
    restartName() {
      this.name = "Júnior";
    },
  },
};
</script>
