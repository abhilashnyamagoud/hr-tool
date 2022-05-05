<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="ProjectData"
      sort-by="Status"
      class="elevation-1"
      dense
    >
      <template v-slot:top>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.projectName"
                      label="Project Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.clientName"
                      label="Client"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                    v-model="editedItem.deadLine"
                    label="Deadline"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                    v-model="editedItem.status"
                    label="Status"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                  <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                  <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                  </v-card-actions>
              </v-card>
          </v-dialog>
      </template>
      <template v-slot:item.actions="{ item }">
          <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
          >
              mdi-pencil
          </v-icon>
          <v-icon
              small
              @click="deleteItem(item)"
          >
              mdi-delete
          </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import axios from 'axios';
export default {
    name:'ProjectTableMain',
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
            text: 'Project',
            align: 'start',
            value: 'projectName',
        },
        { text: 'Client', value: 'clientName' },
        { text: 'Deadline', value: 'deadLine' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      ProjectData:[],
      editedIndex: -1,
      editedItem: {
        projectName: '',
        clientName: '',
        deadLine: '',
        status: '',
      },
      defaultItem: {
        projectName: '',
        clientName: '',
        deadLine: '',
        status: '',
      },
    }),
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    mounted:function(){
      this.getAllProjects()
        
    },
    

    methods: {
      
      getAllProjects(){
        axios.get("http://localhost:3088/projects/all")
        .then(res=>{
            const result=res.data
            this.ProjectData = result
            console.log(this.ProjectData)
        })
        .catch(err=>{
            console.log(err.message)
        })
      },

      editItem (item) {
        this.editedIndex = this.ProjectData.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.ProjectData.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        axios.delete(`http://localhost:3088/projects/${this.editedItem._id}`)
        .then(res=>{
          const result=res.data
          console.log(result)
        })
        .catch(err=>{
          console.log(err.message)
        })
        this.ProjectData.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          axios.put(`http://localhost:3088/projects/${this.editedItem._id}`,this.editedItem)
          .then(res=>{
            const result=res.data
            console.log(result)
          })
          .catch(err=>{
            console.log(err.message)
          })
          Object.assign(this.ProjectData[this.editedIndex], this.editedItem)
        }
        //else {
        //   this.ProjectData.push(this.editedItem)
        // }
        this.close()
      },
    },
  }
</script>