<template>
  <div class="menu">
    <TabMenu :model="items" />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'Home',
          to: '/'
        },
        {
          label: 'User',
          to: '/user'
        }
      ]
    }
  }
};
</script>
