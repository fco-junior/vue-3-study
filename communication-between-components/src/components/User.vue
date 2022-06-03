<template>
  <div class="user">
    <h1>User Component</h1>
    <p>
      User name is <strong>{{ name }}</strong>
    </p>
    <Button label="Change name" @click="changeName"/>
    <div class="children">
      <UserInfo :name="name"/>
      <UserEdit />
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
    };
  },
  methods: {
      changeName(){
        this.name = 'Francisco'
      }
  }
};
</script>
