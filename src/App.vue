<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      color="indigo darken-3"
    >
      <div class="d-flex align-center">
        <v-btn
          class="ma-2"
          text
          color="indigo lighten-4"
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
    <v-main class="pr-0">
      <v-container fluid>
        <v-navigation-drawer
          clipped-left
          fixed
          expand-on-hover
          permanent
          color="indigo lighten-4"
          absolute
        >
          <v-list
          nav
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
             <router-link to="/leaveManagement">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-assistant</v-icon>
                </v-list-item-icon>
                  <v-list-item-title>Leave Management</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/projects">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-briefcase-variant</v-icon>
                </v-list-item-icon>
                  <v-list-item-title>Projects</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/events">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-calendar</v-icon>
                </v-list-item-icon>
                  <v-list-item-title>Events</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list>
        </v-navigation-drawer>
          <v-layout>
            <v-flex>
              <div class="routerMain">
                <router-view/>
              </div>
            </v-flex>
          </v-layout>
      </v-container>
    </v-main>  
    <v-footer app fixed color="indigo darken-3">
      <h5>About Us</h5>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App'
};
</script>
<style scoped>
.v-application a{
  text-decoration: none;
}
.v-list-item:hover{
  background-color:#3F51B5;
}
.routerMain{
  padding-left: 40px;
}
</style>
