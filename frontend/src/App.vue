<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './views/NavbarView.vue';

export default {
  name: 'nav',
  components: {
    Navbar,
  },
};
</script>

<style>

</style>
