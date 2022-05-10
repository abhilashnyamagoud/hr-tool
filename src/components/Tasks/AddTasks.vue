<template>
    <v-container>
        <v-card class="pa-5" shaped >
            <h4>Add Tasks</h4>
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
            v-model="title"
            :rules="titleRules"
            label="Title"
            required
            >
            </v-text-field>

            </v-col>
            <v-col
                cols="6x"

            >

            <v-text-field
                v-model="description"
                label="Description"
                :rules="descriptionRules"
                required
            >
            </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-select
                    :items="items"
                    label="Status"
                    v-model="status"
                ></v-select>
            </v-col>
            <v-col 
            cols="6"
            >
                <v-text-field
                v-model="dueDate"
                label="DueDate YYYY-MM-DD"
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
                    @click="addTask"
                        color="info">
                        Add Task
                    </v-btn>
                </v-col>
                 <v-col cols="4">
                    <v-btn 
                    block
                    elevation="18"
                    class="mt-4"
                    @click="cancel()"
                        color="red">
                        Cancel
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
                items:[true,false],
                title:'',
                description:'',
                status:false,
                dueDate:'',
                titleRules:[
                     v => !!v || 'Project Name is required'
                ],
                statusRules:[
                     v => !!v || 'Status is required'
                ],
                descriptionRules:[
                    v => !!v || 'Description is required'
                ],  
            }
        },
        methods:{
            addTask(){
                const validateForm=this.$refs.form.validate()
                if(validateForm){
                    const taskData={
                        title: this.title,
                        description: this.description,
                        status: this.status,
                        dueDate: this.dueDate
                    }
                    axios.post('http://localhost:3088/tasks/add',taskData)
                    .then((res)=>{
                        const result=res.data
                        console.log(result)
                        this.$router.push('/tasks')
                    })
                    .catch((err)=>{
                        alert(err.message)
                    })
                }
            },
            cancel(){
                this.$router.push('/tasks')
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>