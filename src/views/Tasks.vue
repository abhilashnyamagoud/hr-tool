<template>
    <v-container>
        <v-btn elevation="10" class="mb-4" color="indigo" @click="addTask">Add Task</v-btn>
        <all-tasks/>
    </v-container>
</template>

<script>
import AllTasks from '../components/Tasks/AllTasks.vue'
    export default {
        components:{
            AllTasks
        },
        methods:{
            addTask(){
                this.$router.push('/addtasks')
            }
        }
    }
</script>

<style lang="css" scoped>

</style>