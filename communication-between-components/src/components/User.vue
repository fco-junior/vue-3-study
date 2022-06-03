<template>
  <div class="user">
    <h1>User Component</h1>
    <p>
      User name is <strong>{{ name }}</strong>
    </p>
    <div class="children">
      <UserInfo />
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
};
</script>
