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
                      v-model="editedItem.title"
                      :rules="titleRules"
                      label="Title"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                 <v-select
                  v-model="editedItem.type"
          :items="['public holiday','company holiday','govt holiday']"
          label="Holiday Type"
          :rules="typeRules"
          required
        ></v-select>
                  </v-col>
            </v-row>         
              <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                   <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="editedItem.date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="editedItem.date"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="editedItem.date"
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
            @click="$refs.menu.save(editedItem.date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
                  </v-col>
                  <v-col>
                         <v-text-field
                      v-model="editedItem.details"
                      :rules="detailsRules"
                      label="Details"
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
      dialog: false,
      dialogDelete: false,
       titleRules:[
                     v => !!v || 'Title is required'
                ],
                typeRules:[
                     v => !!v || 'Type is required'
                ],
                detailsRules:[
                     v => !!v || 'Deails is required'
                ],
      headers: [
         { text: 'Title', align: 'start',  sortable: true,value: 'title',},
                      { text: 'Type',sortable: true, value: 'type',},
                     {  text: 'Date', sortable: true, value: 'date',},
                   {  text: 'Details', sortable: true, value: 'details',},
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
       title:'',
                type:'',
                date:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                details:'',
      },
      defaultItem: {
              title:'',
                details:'',
                type:'',
                date:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
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
            axios.get('http://localhost:3088/holidays/all')
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
        axios.delete(`http://localhost:3088/holidays/${this.editedItem._id}`)
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
          console.log(this.editedItem)
          axios.put(`http://localhost:3088/holidays/${this.editedItem._id}`,this.editedItem)
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