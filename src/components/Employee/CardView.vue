<template>
    <div>
        <v-row class="mt-4">
            <v-col  cols="4" v-for="(data,i) in empData"  :key="i" >
                
                <v-card color="indigo lighten-4" shaped class="pa-3">
                    <p><b> FullName:</b>{{data.fullName}} <p>
                    <p><b> Email:</b>{{data.orgEmail}} </p>
                    <p><b> Department:</b>{{data.department}} </p>
                    <p><b> Manager:</b>{{data.manager}} </p>
                </v-card>
            </v-col>

        </v-row>
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        data(){
            return{
                empData:[]
            }
        },
        
        mounted(){
             axios.get('http://localhost:3088/api/employes')
            .then((res)=>{
                const result=res.data
                // console.log("data",result)
                this.empData=result

            })
            .catch((err)=>{
                alert(err.message)
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>