<template>
  <div>
    <v-row>
        <h2 class="componentTitle">Dashboard</h2>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto my-2 rounded-xl"
          max-width="300"
          elevation = "4"
          color="blue lighten-2"
        >
        <v-card-title>
          <div>
            <h4 class="cardTitleMain">Total Employees</h4>
          </div>
        </v-card-title>
        <v-card-title>
          <h3 class="cardTitleValue">560</h3>
        </v-card-title>
        <v-card-text>
          <v-progress-linear value="15" color="green" height="8"></v-progress-linear>
        </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto my-2 rounded-xl"
          max-width="300"
          elevation = "4"
          color="purple lighten-1"
        >
        <v-card-title>
          <div>
            <h4 class="cardTitleMain">Projects</h4>
          </div>
        </v-card-title>
        <v-card-title>
          <h3 class="cardTitleValue">230</h3>
        </v-card-title>
        <v-card-text>
          <v-progress-linear value="50" color="blue" height="8"></v-progress-linear>
        </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto my-2 rounded-xl"
          max-width="300"
          elevation = "4"
          color="teal lighten-1"
        >
        <v-card-title>
          <div>
            <h4 class="cardTitleMain">Tasks</h4>
          </div>
        </v-card-title>
        <v-card-title>
            <h3 class="cardTitleValue">780</h3>
        </v-card-title>
        <v-card-text>
          <v-progress-linear value="35" color="orange accent-3" height="8"></v-progress-linear>
        </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=8>
        <div class="projectsTable">
          <projects-table/>
        </div>
      </v-col>
      <v-col cols=4>
        <div class="todoListTable">
          <todo-list/>
        </div>
      </v-col>
      
    </v-row>
  </div>
</template>

<script>
import ProjectsTable from '../components/Projects/ProjectsTable.vue'
import TodoList from '../components/TodoList/TodoList.vue'
  export default {
    components:{
      ProjectsTable,
      TodoList
    }
  }
</script>

<style lang="css" scoped>
.componentTitle{
  padding-left: 20px;
}
.cardTitleMain{
  color:white;
}
.cardTitleValue{
  color:white;
}
.projectsTable{
  padding-left: 20px;
}

</style>