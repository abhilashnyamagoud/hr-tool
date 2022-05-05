<template>
    <v-container>
        <v-card class="pa-5" shaped >
            <h4>Add Project</h4>
        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >
        <v-row>
            <v-col
                cols="6"

            >
            <v-text-field
            v-model="projectName"
            :rules="projectNameRules"
            label="projectName"
            required
            >
            </v-text-field>

            </v-col>
            <v-col
                cols="6x"

            >

            <v-text-field
                v-model="clientName"
                :rules="clientNameRules"
                label="clientName"
                required
            >
            </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field 
                v-model="status"
                :rules="statusRules"
                label="status"
                required
                >
                </v-text-field>
            </v-col>
            <v-col 
            cols="6"
            >
                <v-text-field
                v-model="deadLine"
                :rules="deadLineRules"
                label="DeadLine YYYY-MM-DD"
                required
                > 
                </v-text-field>
            </v-col>
        </v-row>
            <v-row>
                <v-col cols="4">
                    <v-btn 
                    block
                    elevation="18"
                    class="mt-4"
                    @click="addProject"
                        color="info">
                        Add Project
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
        </v-card>
    </v-container>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                valid:true,
                projectName:'',
                clientName:'',
                status:'',
                deadLine:'',
                projectNameRules:[
                     v => !!v || 'Project Name is required'
                ],
                clientNameRules:[
                     v => !!v || 'Client Name is required'
                ],
                statusRules:[
                     v => !!v || 'Status is required'
                ],
                deadLineRules:[
                    v => !!v || 'DeadLine date is required'
                ],  
            }
        },
        methods:{
            addProject(){
                const validateForm=this.$refs.form.validate()
                if(validateForm){
                    const projectData={
                        projectName: this.projectName,
                        clientName: this.clientName,
                        status: this.status,
                        deadLine: this.deadLine
                    }
                    axios.post('http://localhost:3088/projects/create',projectData)
                    .then((res)=>{
                        const result=res.data
                        console.log(result)
                        window.location.reload()
                    })
                    .catch((err)=>{
                        alert(err.message)
                    })
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>