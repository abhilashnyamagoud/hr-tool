<template>
    <v-card>
    <v-card-title>
      Project Details
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="ProjectData"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            search: '',
            headers: [
            {
                text: 'Project',
                align: 'start',
                value: 'projectName',
            },
            { text: 'Client', value: 'clientName' },
            { text: 'Deadline', value: 'deadLine' },
            { text: 'Status', value: 'status' }
            ],
            ProjectData:[],
        }
    },
    methods:{
        getAllProjects(){
            axios.get("http://localhost:3088/projects/all")
            .then(res=>{
                const result=res.data
                this.ProjectData = result
                console.log(this.ProjectData)
                this.$store.dispatch('addProjects',this.ProjectData)
            })
            .catch(err=>{
                console.log(err.message)
            })
        }

    },
    mounted:function(){
        this.getAllProjects()
        
    }
    
}
</script>

<style lang="css" scoped>

</style>