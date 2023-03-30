<template>
  <div>
    <v-app-bar
        color="#212121"

        dark
    >

      <router-link to="/">
        <v-toolbar-title style="color: white; padding: 8px">Go Mail Admin
          <v-icon start :color="'green'" icon="mdi-heart"/>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn to="/" icon>
        <v-icon color="white" icon="mdi-view-dashboard-variant"></v-icon>
      </v-btn>
      <v-btn to="/domains" icon>
        <v-icon color="white" icon="mdi-dns"></v-icon>
      </v-btn>
      <v-btn to="/alias" icon>
        <v-icon color="white" icon="mdi-forwardburger"></v-icon>
      </v-btn>
      <v-btn to="/account" icon>
        <v-icon color="white" icon="mdi-account"/>
      </v-btn>
      <v-btn to="/tls" icon>
        <v-icon color="white" icon="mdi-security"/>
      </v-btn>
      <v-btn to="/logout" icon>
        <v-icon color="white" icon="mdi-logout"></v-icon>
      </v-btn>
      <a href="https://github.com/kekskurse/go-mail-admin" target="_blank">
        <v-btn icon>
          <v-icon color="white" icon="mdi-git"></v-icon>
        </v-btn>
      </a>

      <v-menu
          left
          bottom
      >

      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
import Client from "../service/Client";

export default {
  name: 'Topbar',

  methods: {
    checkStatus: function () {
      Client.getStatus().then((res) => {
        if (res.data == "Ok") {
          this.color = "green";
        } else {
          this.color = "red";
        }
      }).catch(() => {
        this.color = "red";
      })
    }
  },
  mounted: function () {
    this.checkStatus();
  },

  data: () => ({
    color: "gray"
  }),
}
</script>

