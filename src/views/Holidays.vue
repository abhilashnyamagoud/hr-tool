<template>
    <v-container>
          <h1 class="head">Holidays</h1>
        
            <v-btn
             color="warning"
             class="mx-2"  
             elevation="10" 
            >
            <router-link to="/holidayForm">Add Holiday </router-link>
            </v-btn>
            <HolidayList/>
    </v-container>
</template>

<script>
import HolidayList from '../components/Holiday/HolidayList.vue'
    export default {
      components:{
        HolidayList
      }
        
    }
</script>

<style lang="css" scoped>
.v-application a{
  text-decoration: none;
}
.head{
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
color: rgb(157, 25, 157);
}
</style>