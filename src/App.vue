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
      <div class="ml-auto mt-4">
            <v-switch
      
        v-model="$vuetify.theme.dark"
        inset
        label="Dark Mode"
        persistent-hint
      ></v-switch>
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
            <router-link to="/">
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
            <router-link to="/projects">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-briefcase-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Projects</v-list-item-title>
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
            <router-link to="/holiday">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-web-clock</v-icon>
                </v-list-item-icon>
                  <v-list-item-title>Holiday</v-list-item-title>
              </v-list-item>
            </router-link>
              <router-link to="/event">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-calendar-clock</v-icon>
                </v-list-item-icon>
                  <v-list-item-title>Event</v-list-item-title>
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
      <!-- <h5>About Us</h5> -->
      <router-link to="/about" class="link">About Tool </router-link>
    </v-footer>
  </v-app>
</template>

<script>
import Home from './views/Home.vue'


export default {
  name: 'App',
  components:{
    Home
  },
  mounted(){
      this.$store.dispatch('addEmp')          
  }
 
};


</script>
<style scoped>
.link{
  color: black;
}
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
