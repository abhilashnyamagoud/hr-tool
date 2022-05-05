<template>
    <div>
        <v-card>
            <v-card-title>
                TODO List
            </v-card-title>
                <v-list
                    dense
                >
                    <v-list-item
                        v-for="todo in todos"
                        :key="todo.id"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="todo.todo"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn icon @click="deleteTodos(todo._id)">
                                <v-icon color="grey lighten-1">mdi-close</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
                <v-row>
                    <v-col cols="10" class="pr-0">
                        <v-text-field
                            v-model="newTodo"
                            label="Add Todo"
                            outlined
                            clearable
                            class="mx-2"
                            max-width="30"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2" class="pl-2 mt-2">
                        <v-btn icon @click="addTodos()">
                            <v-icon color="teal">mdi-plus-thick</v-icon>
                        </v-btn>
                    </v-col>
                    
                </v-row>
                
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return {
                todos:[],
                newTodo:""
            }
        },
        methods:{
            getTodos(){
                axios.get("http://localhost:3088/todo/all")
                .then(res=>{
                    const result=res.data
                    this.todos = result
                    console.log(this.todos)
                })
                .catch(err=>{
                    console.log(err.message)
                })
            },
            addTodos(){
                const data = {todo : this.newTodo}
                axios.post("http://localhost:3088/todo/add",data)
                .then(res=>{
                    const response = res.data
                    this.todos.push(response)
                    console.log('Todos',this.todos)
                })
                .catch(err=>{
                    console.log(err.message)
                })
            },
            deleteTodos(id){
                axios.delete(`http://localhost:3088/todo/${id}`)
                .then(res=>{
                    const response = res.data
                    console.log(response)
                    this.todos = this.todos.filter((item) => item._id !== id);
                })
                .catch(err=>{
                    console.log(err.message)
                })
            }

        },
        mounted:function(){
            this.getTodos()
        }
    }
</script>

<style lang="css" scoped>

</style>