<template>
  <div class="container" style="padding-top: 80px;">
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-card style="margin-right: 10px; height: 100%;">
          <v-card-text>
            Mail Server Admin GUI (Version: {{ version }}, <span v-if="newestVersion == 'unknown'"
                                                                 style="cursor: pointer;" @click="checkNewerVersion">Check for updates</span><span
              v-if="newestVersion != 'unknown'">the newest Version on github is {{ newestVersion }}</span>)<br><br>
            <b>Fast Access</b><br>
            <v-list-group title="test" color="primary">
              <v-list-item to="/account/new" :title="'New Account'" />
              <v-list-item to="/alias/new" :title="'New Aliases'" />
              <v-list-item href="https://github.com/kekskurse/go-mail-admin/issues" target="_blank" :title="'Report an Issue'"/>
            </v-list-group>

          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="2">
        <v-card style="margin-right: 10px;">
          <v-card-title>Domains</v-card-title>
          <v-card-text>
            <DomainChart></DomainChart>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="2">
        <v-card style="margin-right: 10px;">
          <v-card-title>Aliases</v-card-title>
          <v-card-text>
            <AliasChart></AliasChart>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="2">
        <v-card style="margin-right: 10px;">
          <v-card-title>Accounts</v-card-title>
          <v-card-text>
            <AccountChart></AccountChart>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-card style="margin-top: 10px;">
      <v-card-title>Icons</v-card-title>
      <v-card-text>
        <v-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>Icon</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <v-icon icon="mdi-plus-circle"></v-icon>
                </td>
                <td>Add a new entry to the current list (e.g. on the Account Page)</td>
              </tr>
              <tr>
                <td>
                  <v-icon>mdi-circle-edit-outline</v-icon>
                </td>
                <td>Edit the current selected entry</td>
              </tr>
              <tr>
                <td>
                  <v-icon>mdi-close-circle-outline</v-icon>
                </td>
                <td>Remove the current selected entry</td>
              </tr>
              <tr>
                <td>
                  <v-icon>mdi-dns</v-icon>
                </td>
                <td>Domain List</td>
              </tr>
              <tr>
                <td>
                  <v-icon>mdi-forwardburger</v-icon>
                </td>
                <td>Aliases</td>
              </tr>
              <tr>
                <td>
                  <v-icon>mdi-account</v-icon>
                </td>
                <td>Accounts</td>
              </tr>
              <tr>
                <td>
                  <v-icon>mdi-security</v-icon>
                </td>
                <td>TLS Policys</td>
              </tr>
              <tr>
                <td>
                  <v-icon>mdi-view-dashboard-variant</v-icon>
                </td>
                <td>Dashboard</td>
              </tr>
            </tbody>
          </template>
        </v-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import DomainChart from "../components/DomainChart.vue";
import AliasChart from "../components/AliasChart.vue";
import AccountChart from "../components/AccountChart.vue";
import Client from "../service/Client";
import axios from "axios";

export default {
  name: 'Home',
  components: {
    DomainChart,
    AliasChart,
    AccountChart
  },
  methods: {
    getVersion: function () {
      Client.getVersion().then((res) => {
        if (res.response.status === 200)
          this.version = res.data.version
      })
    },
    checkNewerVersion: function () {
      axios.get("https://api.github.com/repos/kekskurse/go-mail-admin/releases").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          console.log(res.data[i])
          if (res.data[i].prerelease == false && res.data[i].draft == false && this.newestVersion == "unknown") {
            console.log("FOUND NEWEST VERSION", res.data[i].tag_name)
            this.newestVersion = res.data[i].tag_name
          }
        }
        console.log(res)
      })
    }
  },
  mounted: function () {
    this.getVersion()
  },
  data: () => ({
    version: "unknown",
    newestVersion: "unknown",
  })
}
</script>

<style>
.v-list-group__items {
  display: block !important;
  padding-left: 12px;
}
</style>