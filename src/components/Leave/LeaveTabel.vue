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
        data(){
            return{
                headers:[
                    {
                        text: 'FirstName',
            align: 'start',
            sortable: true,
            value: 'firstName',
                    },
                      {
                        text: 'LastName',
            sortable: true,
            value: 'lastName',
                    },
                      {
                        text: 'employee Id',
            sortable: true,
            value: 'employeeId',
                    },
                    {
                        text: 'Leave Type',
            sortable: true,
            value: 'leaveType',
                    },
                     {
                        text: 'From Date',
            sortable: true,
            value: 'fromDate',
                    },
                     {
                        text: 'To Date',
            sortable: true,
            value: 'toDate',
                    },
                     {
                        text: 'Remarks',
            sortable: true,
            value: 'remarks',
                    }

                ],
                desserts: [],
            }
        },
        mounted(){
            axios.get('http://localhost:3088/leaveManagement/leaves')
            .then((res)=>{
                const result=res.data
                // console.log('data',result)
                this.desserts=result
            })
            .catch((err)=>{
                alert(err.message)
            })
        }

    }
</script>

<style lang="scss" scoped>

</style>