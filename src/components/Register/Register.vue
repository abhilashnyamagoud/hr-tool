<template>
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col
                cols="12"
                md="8"
            >
            <v-card
            class="mx-auto"
            outlined
            color="indigo lighten-4"
            >
            <v-card-title>
                        <div class="cardTitle">
                            Register
                        </div>
                    </v-card-title>
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >
            <v-text-field
            v-model="userName"
            :counter="16"
            :rules="nameRules"
            label="userName"
            outlined
            required
            >

            </v-text-field>

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
            outlined
            >
            </v-text-field>

            <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            :counter="16"
            required
            outlined
            >
            </v-text-field>
            <div class="d-flex justify-center">
            <v-btn 
            color="indigo"
            @click="formSubmit"
            >Submit
            </v-btn>
            </div>
            </v-form>
            </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                valid:true,
                userName:'',
                email:'',
                password:'',
                nameRules: [
        v => !!v || 'Name is required',
        v => (v&& v.length <= 16 && v.length >= 6 ) || 'Name must be less than 16 characters and more than 6',
      ],
       emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules:[
          v=>!!v|| "Password is Required",
          v=>(v && v.length>6) || "Password should be more than 6 chars"
      ]
            }
        },
        methods:{
            formSubmit(){
                const formData={
                    userName:this.userName,
                    email:this.email,
                    password:this.password
                }
                console.log(formData)
                axios.post('localhost:3088/users/register',formData)
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
.v-form{
    padding: 20px;
}
.cardTitle{
    color:#3F51B5 ;
}
</style>