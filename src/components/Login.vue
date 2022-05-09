<template>
        <v-row>
            <v-col
                cols="8"
                md="8"
                sm="12"
                xs="12"
                class="imgCol"
            >
            <v-img
                alt="homeimage"
                src="../assets/hr-trends.webp"  
                max-height="460"
                min-width="260"
                class="ml-5"  
                        
            >
            </v-img>
            </v-col>
            <v-col
                class="loginCol"
                cols="12"
                sm="12"
                md="4"
                
            >
                <v-card
                    class="mt-14 mx-auto logincard"
                    max-width="430"
                    min-width="260"
                    outlined
                    pt-3
                    color="indigo lighten-4"
                >
                    <v-card-title>
                        <div class="cardTitle">
                            Login
                        </div>
                    </v-card-title>
                    <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    
                    >
                        <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Email"
                        required
                        outlined
                        ></v-text-field>

                        <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[passwordRules.required, passwordRules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="inputpassword"
                        label="Password"
                        hint="At least 8 characters"
                        counter
                        outlined
                        @click:append="show1 = !show1"
                        ></v-text-field>

                        <v-btn
                        :disabled="!valid"
                        color="indigo"
                        class="mr-4"
                        @click="login"
                        >
                        Login
                        </v-btn>
                        <router-link  to="/register">
                            <v-btn
                            color="green"
                            class="mr-4"
                            >
                                Sign Up
                            </v-btn>
                        </router-link>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
</template>

<script>
import axios from 'axios'
    export default {
        data: () => ({
            valid: true,
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            show1: false,
            password: '',
            passwordRules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 6 || 'Min 8 characters',
            }
        }),

        methods: {
            login() {
                const validate= this.$refs.form.validate()

                if(validate){
                    const loginData={
                        email:this.email,
                        password:this.password
                    }
                    console.log(loginData)
                    let response = axios.post('http://localhost:3088/users/login',loginData)
                    .then((res)=>{
                        const result=res.data
                        console.log('token',result)  
                    })
                    .catch((err)=>{
                        alert(err.message)
                    })
                    if(response.status == 200 && response.data) {
                        sessionStorage.setItem('token',JSON.stringify(result.token))
                        this.$router.push("/dashboard");
                    }
                }
            },
        },
        mounted() {
        let user = sessionStorage.getItem("token");
        if (user) {
            this.$router.push("/dashboard");
        }
  },

    }
</script>

<style lang="css" scoped>
.v-form{
    padding: 10px;
}
.cardTitle{
    color:#3F51B5 ;
}
.v-application a{
  text-decoration: none;
}
</style>