<template>
  <div>
    <v-row>
        <h2 class="componentTitle">Dashboard</h2>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto my-2 rounded-lg"
          max-width="300"
          max-height="150"
          elevation = "18"
          id="employeesCard"
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
          class="mx-auto my-2 rounded-lg"
          max-width="300"
          max-height="150"
          elevation = "18"
          id="projectsCard"
        >
        <v-card-title>
          <div>
            <h4 class="cardTitleMain">Projects</h4>
          </div>
        </v-card-title>
        <v-card-title>
          <h3 class="cardTitleValue">{{this.$store.state.projects.length}}</h3>
        </v-card-title>
        <v-card-text>
          <v-progress-linear v-model="projectLength" color="blue" height="8"></v-progress-linear>
        </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto my-2 rounded-lg"
          max-width="300"
          max-height="150"
          elevation = "18"
          id="tasksCard"
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
import { mapGetters } from 'vuex'
  export default {
    data(){
      return{
        projectLength : null,
      }
    },
    components:{
      ProjectsTable,
      TodoList
    },
    computed:{
      ...mapGetters(['projects']),
      // getData(){
      //   this.projectLength = this.projects.length
      // },
      projectL:function(){
        return this.projects.length;
      }
    },
    // watch:{
    //   projectLength : function(newValue,oldValue){
    //     this.projectLength = this.$store.state.projects.length
    //   }
    // },
    mounted:function(){
      this.projectLength = this.projectL
    }
  }
</script>

<style lang="css" scoped>
.componentTitle{
  padding-left: 20px;
}
.v-card__title{
  padding-top:8px;
  padding-bottom: 8px;
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
#employeesCard{
  background: rgb(9,187,215);
  background: linear-gradient(66deg, rgba(9,187,215,1) 0%, rgba(4,147,160,1) 100%);
}
#projectsCard{
  background: rgb(126,5,163);
  background: linear-gradient(66deg, rgba(126,5,163,1) 0%, rgba(221,0,241,1) 100%);
}
#tasksCard{
  background: rgb(9,215,101);
  background: linear-gradient(66deg, rgba(9,215,101,1) 0%, rgba(4,122,55,1) 100%);
}


</style>