<template>
    <v-card>
    <v-card-title>
      Project Details
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="ProjectData"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
    export default {
        data () {
        return {
            search: '',
            headers: [
            {
                text: 'Project',
                align: 'start',
                sortable: false,
                value: 'ProjectName',
            },
            { text: 'Deadline', value: 'deadLine' },
            { text: 'Client', value: 'clientName' },
            { text: 'Status', value: 'status' }
            ],
            ProjectData: [
                {
                    ProjectName: 'Project A',
                    deadline: '15/01/2022',
                    clientName: 'Client A',
                    status: "Completed",
                },
                {
                    ProjectName: 'Project B',
                    deadline: '15/02/2022',
                    clientName: 'Client B',
                    status: "Progress",
                },
                {
                    ProjectName: 'Project C',
                    deadline: '15/01/2022',
                    clientName: 'Client C',
                    status: "Completed",
                },
                {
                    ProjectName: 'Project D',
                    deadline: '15/01/2022',
                    clientName: 'Client D',
                    status: "Completed",
                },
                {
                    ProjectName: 'Project E',
                    deadline: '15/01/2022',
                    clientName: 'Client E',
                    status: "Failed",
                },
                {
                    ProjectName: 'Project F',
                    deadline: '15/01/2022',
                    clientName: 'Client F',
                    status: "Completed",
                },
                {
                    ProjectName: 'Project G',
                    deadline: '15/01/2022',
                    clientName: 'Client G',
                    status: "Completed",
                },
           
            ],
        }
    },
    }
</script>

<style lang="css" scoped>

</style>