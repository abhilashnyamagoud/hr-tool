<template>
    
    <v-row>
        <v-col cols="3">
            <v-card class="pa-2" color="blue" min-height="400">
                <v-card-title>
                    <div style="font-weight:bold;">Process</div>
                </v-card-title>
                <draggable v-model="process" group="tasks" tag="div" class="drag">
                    <v-card class="ma-2 pa-2" v-for="item in process" :key="item._id">
                        <v-card-title>{{item.title}}</v-card-title>
                        <v-card-subtitle>{{item.description}}</v-card-subtitle>
                        <v-card-text>{{item.dueDate}}</v-card-text>
                    </v-card>
                </draggable>
            </v-card>
        </v-col>
        <v-col cols="3">
            <v-card class="pa-2" color="blue-grey" min-height="400">
                <v-card-title>
                    <div style="font-weight:bold;">Review</div>
                </v-card-title>
                <draggable v-model="review" group="tasks" tag="div" class="drag">
                    <v-card class="ma-2 pa-2" v-for="item in review" :key="item._id">
                        <v-card-title>{{item.title}}</v-card-title>
                        <v-card-subtitle>{{item.description}}</v-card-subtitle>
                        <v-card-text>{{item.dueDate}}</v-card-text>
                    </v-card>
                </draggable>
            </v-card>
        </v-col>
        <v-col cols="3">
            <v-card class="pa-2" color="yellow" min-height="400">
                <v-card-title>
                    <div style="font-weight:bold;">Test</div>
                </v-card-title>
                <draggable v-model="test" group="tasks" tag="div" class="drag">
                    <v-card class="ma-2 pa-2" v-for="item in test" :key="item._id">
                        <v-card-title>{{item.title}}</v-card-title>
                        <v-card-subtitle>{{item.description}}</v-card-subtitle>
                        <v-card-text>{{item.dueDate}}</v-card-text>
                    </v-card>
                </draggable>
            </v-card>
        </v-col>
        <v-col cols="3">
            <v-card class="pa-2" color="green" min-height="400">
                <v-card-title>
                    <div style="font-weight:bold;">Completed</div>
                </v-card-title>
                <draggable v-model="completed" group="tasks" tag="div" class="drag">
                    <v-card class="ma-2 pa-2" v-for="item in completed" :key="item._id">
                        <v-card-title>{{item.title}}</v-card-title>
                        <v-card-subtitle>{{item.description}}</v-card-subtitle>
                        <v-card-text>{{item.dueDate}}</v-card-text>
                    </v-card>
                </draggable>
            </v-card>  
        </v-col>
    </v-row>
    
</template>

<script>
import axios from 'axios';
import draggable from "vuedraggable";
    export default {
        components:{
            draggable
        },
        data: () => ({
            allTasks : [],
            process: [],
            review: [],
            test: [],
            completed:[]
        }),
        methods:{
            getAllTasks(){
                axios.get("http://localhost:3088/tasks/all")
                .then(res=>{
                    const result=res.data
                    this.allTasks = result
                    console.log(this.allTasks);
                    this.allTasks.forEach(element => {
                        if(element.status === 'Progress'){
                            this.process.push({...element})
                        }
                        else if(element.status === 'Review'){
                            this.review.push({...element})
                        }
                        else if(element.status === 'Test'){
                            this.test.push({...element})
                        }
                        else if(element.status === 'Completed'){
                            this.completed.push({...element})
                        }
                        else{
                            this.process.push({...element})
                        }
                    });
                })
                .catch(err=>{
                    console.log(err.message)
                })
            }
        },
        mounted(){
            this.getAllTasks()
            
        }
    }
</script>

<style lang="css" scoped>
.drag .v-card__title{
    font-size: 16px;
}
</style>