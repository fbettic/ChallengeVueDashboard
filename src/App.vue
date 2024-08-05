<template>
  <div id="app">
    <side-menu v-if="showSideMenu" />
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SideMenu from "./components/SideMenu.vue";

export default {
  name: "App",
  components: {
    SideMenu,
  },
  computed: {
    ...mapState(["isLoggedIn"]),
    showSideMenu() {
      return this.isLoggedIn && this.$route.name !== "Login";
    },
  },
};
</script>

<style>
#app {
  background-color: #f2f5fa;
  font-family: "Rethink Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
body {
  background-color: #f2f5fa;
  margin: 0px;
}
</style>
