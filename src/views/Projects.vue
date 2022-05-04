<template>
     <v-container>
        <v-row>
            <v-card class="ma-2" min-width="100%" height="76vh">
                <v-tabs
                left
                slider-color="indigo"
                v-model="tab"
                >
                    <v-tab>
                        All Projects
                    </v-tab>
                     <v-tab>
                        Add Projects
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <v-card flat>
                            <projects-table-main/>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>  
                            <add-project/>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-row>
      </v-container>
</template>

<script>
import ProjectsTableMain from '../components/Projects/ProjectsTableMain.vue'
import AddProject from '../components/Projects/AddProject.vue'
    export default {
        data(){
            return{
                tab:null
            }
        },
        components:{
            ProjectsTableMain,
            AddProject
        }
    }
</script>

<style lang="css" scoped>

</style>