<template>
   <v-container>
       <h1>Leave Management </h1>
        <v-btn color="yellow"  elevation="10" class="ma-2">
           
            <router-link to="/addLeave"> Add Leave </router-link>
        </v-btn>
        <LeaveTable/>
   </v-container>
</template>

<script>
import LeaveTable from '../components/Leave/LeaveTabel.vue'
    export default {
        components:{
            LeaveTable
        }
    }
</script>

<style lang="css" scoped>
.v-application a{
  text-decoration: none;
}
h1{
    color: rgb(34, 92, 192);
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
</style>