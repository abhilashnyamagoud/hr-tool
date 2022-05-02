<template>
<v-container>
    <v-card shaped class="pa-4">
        <h4>Add Employees Leaves</h4>
        <v-form ref="form" 
        v-model="valid"
        lazy-validation
        > 
        <v-row> 
            <v-col cols="6">
                <v-text-field
                v-model="firstName"
                :rules='firstNameRules'
                label="FirstName"
                required
                >
                </v-text-field>
            </v-col>
            <v-col cols="6">
               <v-text-field
                v-model="latName"
                :rules='lastNameRules'
                label="LastName"
                required
                >
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                 <v-text-field
                v-model="employeeId"
                :rules='employeeIdRules'
                label="employeeId"
                required
                type="number"
                >
                </v-text-field>
            </v-col>
             <v-col cols="6">
                  <v-select
                  v-model="leaveType"
          :items="['sick leave','causual leave','medical leave']"
          label="Leave Type"
          required
        ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
             
                  <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="fromDate"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="fromDate"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="fromDate"
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
            @click="$refs.menu.save(fromDate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
            </v-col>
            <v-col cols="6">
                      <v-menu
        ref="menu1"
        v-model="menu1"
        :close-on-content-click="false"
        :return-value.sync="toDate"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="toDate"
            label="Picker in menu2"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="toDate"
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
            @click="$refs.menu1.save(toDate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8">
                     <v-text-field
                v-model="remarks"
                outlined
                label="remarks"
                required
                
                ></v-text-field>
            </v-col>
             <v-col cols="4">
                        <v-btn 
                        block
                        elevation="18"
                        class="mt-4"
                       @click="addLeave"
                         color="info">
                            Add Leave
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
                menu:false,
                menu1:false,
                valid:true,
                firstName:'',
                latName:'',
                employeeId:'',
                leaveType:'',
                fromDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                toDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                remarks:'',
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
            }
        },
        methods:{
            addLeave(){
                const validateForm=this.$refs.form.validate()
                if(validateForm){
                    const leaveData={
                        firstName:this.firstName,
                        lastName:this.latName,
                        employeeId:this.employeeId,
                        leaveType:this.leaveType,
                        fromDate:this.fromDate,
                        toDate:this.toDate,
                        remarks:this.remarks
                    }
                    console.log(leaveData)
                    axios.post('http://localhost:3088/leaveManagement/add',leaveData)
                    .then((res)=>{
                        const result=res.data
                        console.log("fetched",result)
                        this.$router.push('/leaveManagement')
                        
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