<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="7"
    class="elevation-1 mt-5"
  ></v-data-table>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        headers: [
          {
            text: 'FullName',
            align: 'start',
            sortable: true,
            value: 'fullName',
          },
          { text: 'Employee ID', value: 'employesId', sortable:true },
          { text: 'Company Email', value: 'orgEmail', sortable:true },
          { text: 'Designation', value: 'designation' , sortable:true},
          { text: 'Department', value: 'department' , sortable:true},
          { text: 'Manager', value: 'manager', sortable:true },
          {text:'Location', value:'location' , sortable:true},
          {text:'JoinedDate', value:'joinedDate' , sortable:true},
          {text:'Birth Date',value:'dob', sortable:true},
          {text:'Education',value:'education', sortable:true},
          {text:'Mobile',value:'mobile', sortable:true}
        ],
        desserts: [],
      }
    },
    mounted(){
            axios.get('http://localhost:3088/api/employes')
            .then((res)=>{
                const result=res.data
                // console.log("data",result)
                this.desserts=result
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
  }
</script>