<template>
    <v-container>
        <div>
            <h1>Employees</h1>
            <v-btn color="success" @click="getAll()">Getdata</v-btn>
            
        </div>
    </v-container>
</template>

<script>
import axios from 'axios'
    export default {
        methods:{
            getAll(){
                axios.get("http://localhost:3088/users")
                .then((res)=>{
                    const result=res.data
                    console.log(result)
                })
                .catch((err)=>{
                    alert(err.message)
                })
            }
        }
    }
</script>

<style lang="css" scoped>

</style>