<template>
    <v-container>
        <v-card class="pa-5" shaped >
            <h4>Add Holiday </h4>
        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >
        <v-row>
        <v-col
            cols="12"

        >
        <v-text-field
        v-model="title"
        :rules="titleRules"
        label="Title"
        required
        >
        </v-text-field>

        </v-col>
        </v-row>
        <v-row>
        <v-col
            cols="6"

        >

         <v-select
                  v-model="holidayType"
          :items="['public holiday','company holiday','govt holiday']"
          label="Holiday Type"
          :rules="typeRules"
          required
        ></v-select>
        </v-col>
        <v-col cols="6">
            <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
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
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
        </v-col>
        </v-row>
        
        <v-row>
            <v-col
            cols="6"
            >
            <v-text-field
             v-model="details" 
             :rules="detailsRules"
             label="Details"
             required  
            >
            </v-text-field>
            </v-col>
            <v-col
            cols="6"
            >
            <v-btn @click="addHoliday" block class="mt-4" color="primary">
              Add Holiday  
            </v-btn>
            
            </v-col>
        </v-row>
            

        </v-form>
        </v-card>
    </v-container>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                valid:true,
                menu:false,
                title:'',
                holidayType:'',
                details:'',
                date:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
               
                titleRules:[
                     v => !!v || 'Name is required'
                ],
                 typeRules:[
                     v => !!v || 'Type of holiday is required'
                ],
                  detailsRules:[
                     v => !!v || 'details is required'
                ],
                typeRules:[
                   v => !!v || 'Field is required'
                ]
                
                
              

            }
        },
        methods:{
            addHoliday(){
                const validateForm=this.$refs.form.validate()
                if(validateForm){
                    const holidayData={
                      title:this.title,
                      type:this.holidayType,
                      details:this.details,
                      date:this.date
                    }
                    console.log(holidayData)
                    axios.post('http://localhost:3088/holidays/add',holidayData)
                    .then((res)=>{
                        const result=res.data
                        console.log('fetched',result)
                        this.$router.push('/holiday')
            
                    })
                    .catch((err)=>{
                        alert(err.message)
                    })
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>