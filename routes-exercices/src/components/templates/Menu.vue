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
          label: 'User 1',
          to: '/user/1'
        },
        {
          label: 'User 2',
          to: '/user/2'
        }
      ]
    }
  }
};
</script>
