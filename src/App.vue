<template>
  <v-app>
    <Header msg="Welcome to Your Vue.js App  test"/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
</style>
