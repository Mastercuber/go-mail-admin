<template>
  <v-app>
    <Topbar></Topbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
  import Topbar from "./components/Topbar.vue";

  export default {
    name: 'App',
    components: {
      'Topbar': Topbar
    },

    data: () => ({
      loggedin: false,
      apikey: '',
      apisecret: ''

    }),
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
