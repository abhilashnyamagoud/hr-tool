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
</style>