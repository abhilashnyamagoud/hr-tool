<template>
    <v-data-table
        :headers="headers"
        :items="alltasks"
    >
    </v-data-table>
</template>

<script>
    export default {
        props:{
            alltasks : []
        },
        data () {
            return {
                headers: [
                {text: 'Title',align: 'start',value: 'title'},
                { text: 'Description', value: 'description' },
                { text: 'DueDate', value: 'dueDate' },
                { text: 'Status', value: 'status' }
                ],
            }
        
        }
    }
</script>

<style lang="css" scoped>

</style>