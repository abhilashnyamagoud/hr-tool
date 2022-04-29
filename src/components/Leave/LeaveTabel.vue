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
                      v-model="editedItem.firstName"
                      :rules="firstNameRules"
                      label="Full Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.lastName"
                      label="Employee ID"
                      :rules="lastNameRules"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.employeeId"
                      :rules="employeeIdRules"
                      label="Company Mail"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-select
                  v-model="editedItem.leaveType"
          :items="['sick leave','causual leave','medical leave']"
          label="Leave Type"
          :rules="leaveTypeRules"
          required
        ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                   <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="editedItem.fromDate"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="editedItem.fromDate"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="editedItem.fromDate"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(editedItem.fromDate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
                  </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                   <v-menu
        ref="menu1"
        v-model="menu1"
        :close-on-content-click="false"
        :return-value.sync="editedItem.toDate"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="editedItem.toDate"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="editedItem.toDate"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu1 = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu1.save(editedItem.toDate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
                  </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.remarks"
                      label="Location"
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
      menu:false,
                menu1:false,
      dialog: false,
      dialogDelete: false,
       firstNameRules:[
                     v => !!v || 'FirstName is required'
                ],
                lastNameRules:[
                     v => !!v || 'LastName is required'
                ],
                employeeIdRules:[
                     v => !!v || 'Employee Id is required'
                ],
                leaveTypeRules:[
                     v => !!v || 'Leave type is required'
                ],
      headers: [
         { text: 'FirstName', align: 'start',  sortable: true,value: 'firstName',},
                      { text: 'LastName',sortable: true, value: 'lastName',},
                      { text: 'employee Id',sortable: true,value: 'employeeId',},{ text: 'Leave Type',  sortable: true,value: 'leaveType' },
                     {  text: 'From Date', sortable: true, value: 'fromDate',},
                     { text: 'To Date', sortable: true, value: 'toDate',},
                     {text: 'Remarks',sortable: true,value: 'remarks',},
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
       firstName:'',
                lastName:'',
                employesId:'',
                leaveType:'',
                fromDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                toDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                location:'',
                remarks:'',
      },
      defaultItem: {
              firstName:'',
                lastName:'',
                employesId:'',
                leaveType:'',
                fromDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                toDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                location:'',
                remarks:'',
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
            axios.get('http://localhost:3088/leaveManagement/leaves')
            .then((res)=>{
                const result=res.data
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
        axios.delete(`http://localhost:3088/leaveManagement/${this.editedItem._id}`)
        .then((res)=>{
          console.log('deleted',res.data)
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
          // console.log(this.editedItem)
          axios.put(`http://localhost:3088/leaveManagement/${this.editedItem._id}`,this.editedItem)
          .then((res)=>{
            console.log('fetchedr',res.data)
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