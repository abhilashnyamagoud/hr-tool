<template>
  <v-app>
    <v-app-bar
      app
      color="indigo darken-3"
    >
      <div class="d-flex align-center">
        <v-btn
          class="ma-2"
          text
          color="indigo lighten-4"
          @click.stop="drawer = !drawer"
        >
         <v-icon
          large
          color="indigo lighten-5"
          class="pa-2"
          >
            mdi-wrench-outline
          </v-icon>
          HR TOOL
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
        <v-container fliud>
          <router-view/>
        </v-container>
    </v-main>
        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          app
          color="indigo lighten-4"
        >
          <v-list
            nav
            dense
          >
            <router-link to="/dashboard">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-view-dashboard-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/emp">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Employees</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list>
        </v-navigation-drawer>
    <v-footer app fixed color="indigo darken-3">
      <h5>About Us</h5>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data (){
    return {
        drawer: null
      }
  },
};
</script>
<style scoped>
.v-application a{
  text-decoration: none;
}
.v-list-item:hover{
  background-color:#3F51B5;
}
</style>
