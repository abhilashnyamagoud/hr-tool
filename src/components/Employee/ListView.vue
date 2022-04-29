<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1 mt-5"
  >
    <template v-slot:top>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fullName"
                      label="Full Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.employesId"
                      label="Employee ID"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.orgEmail"
                      label="Company Mail"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.designation"
                      label="Designation"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.department"
                      label="Department"
                    ></v-text-field>
                  </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.manager"
                      label="Manager"
                    ></v-text-field>
                  </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.location"
                      label="Location"
                    ></v-text-field>
                  </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.joinedDate"
                      label="Joined Date"
                    ></v-text-field>
                  </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.dob"
                      label="Date of birth"
                    ></v-text-field>
                  </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.education"
                      label="Education"
                    ></v-text-field>
                  </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.mobile"
                      label="Mobile Number"
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
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
          {
            text: 'FullName',
            align: 'start',
            sortable: true,
            value: 'fullName',
          },
          { text: 'Employee ID', value: 'employesId', sortable:true },
          { text: 'Company Email', value: 'orgEmail', sortable:true },
          { text: 'Designation', value: 'designation' , sortable:true},
          { text: 'Department', value: 'department' , sortable:true},
          { text: 'Manager', value: 'manager', sortable:true },
          {text:'Location', value:'location' , sortable:true},
          {text:'JoinedDate', value:'joinedDate' , sortable:true},
          {text:'Birth Date',value:'dob', sortable:true},
          {text:'Education',value:'education', sortable:true},
          {text:'Mobile',value:'mobile', sortable:true},
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
       fullName:'',
                employesId:'',
                orgEmail:'',
                designation:'',
                department:'',
                manager:'',
                location:'',
                joinedDate:'',
                dob:'',
                education:'',
                mobile:''
      },
      defaultItem: {
              fullName:'',
                employesId:'',
                orgEmail:'',
                designation:'',
                department:'',
                manager:'',
                location:'',
                joinedDate:'',
                dob:'',
                education:'',
                mobile:''
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
     mounted(){
            axios.get('http://localhost:3088/api/employes')
            .then((res)=>{
                const result=res.data
                // console.log("data",result)
                this.desserts=result
            })
            .catch((err)=>{
                alert(err.message)
            })
    },

    methods: { 
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
          // console.log(this.editedItem)
        axios.delete(`http://localhost:3088/api/employes/${this.editedItem._id}`)
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err)=>{
          alert(err.message)
        })
        this.desserts.splice(this.editedIndex, 1)
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
          // console.log(this.editedItem._id)
          axios.put(`http://localhost:3088/api/employes/${this.editedItem._id}`,this.editedItem)
          .then((res)=>{
            const result=res.data
            console.log(result)
          })
          .catch((err)=>{
            alert(err.message)
          })
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } 
        this.close()
      },
    },
  }
</script>