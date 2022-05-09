<template>
    <v-container>
        <div>
            <h1 class="head">Employees</h1>
        
            <v-btn
             color="warning"
             class="mx-2"  
             elevation="10" 
            >
            <router-link  to="/employeeForm">Add Employee </router-link>
            </v-btn>
            <v-btn color="indigo" elevation="10" class="mx-2" @click="view='listView' " >
                List View 
            </v-btn>
            <v-btn elevation="10" color="amber" class="mx-2" @click="view='cardView' " >
                card view
            </v-btn>

            <CardView v-if="view=='cardView' "/>
            <ListView v-if="view=='listView' "/>
        </div>
    </v-container>
</template>

<script>
// import axios from 'axios'
import ListView from '../components/Employee/ListView.vue'
import CardView from '../components/Employee/CardView.vue'
    export default {
        data(){
            return{
                view:'listView'
            }
        },
        components:{
            ListView,
            CardView
        },
        methods:{
      
        }
    }
</script>

<style lang="css" scoped>
.head{
    color: rgba(66, 2, 94, 0.941);
    font-family: serif;
    margin: 10px 0;
}

.v-application a{
  text-decoration: none;
}

</style>