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
                height="auto"
                max-height="460"
                min-width="350"          
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
                    min-width="330"
                    outlined
                    pt-3
                    color="indigo lighten-4"
                >
                    <v-card-title>Login</v-card-title>
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
                        color="success"
                        class="mr-4"
                        @click="validate"
                        >
                        Login
                        </v-btn>
                             <router-link   to="/register">
                        <v-btn
                        color="error"
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
                min: v => v.length >= 8 || 'Min 8 characters',
            }
        }),

        methods: {
            validate () {
                this.$refs.form.validate()
            },
        },
    }
</script>

<style lang="css" scoped>
.v-form{
    padding: 20px;
}
.v-application a{
  text-decoration: none;
}
</style>