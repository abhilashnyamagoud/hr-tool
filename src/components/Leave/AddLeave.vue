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
                >
                </v-text-field>
            </v-col>
             <v-col cols="6">
                  <v-select
                  v-model="leaveType"
          :items="['sick leave','causual leave','medical leave']"
          label="Leave Type"
          :rules="fromDateRules"
          required
        ></v-select>
        <!-- <pre>{{leaveType}} </pre> -->
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                 <v-text-field
                v-model="fromDate"
                :rules='fromDateRules'
                label="fromDate"
                required
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                    <v-text-field
                v-model="toDate"
                :rules='toDateRules'
                label="toDate"
                required
                ></v-text-field>
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
    export default {
        data(){
            return{
                firstName:'',
                latName:'',
                employeeId:'',
                leaveType:'',
                fromDate:'',
                toDate:'',
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
                fromDateRules:[
                     v => !!v || 'Field is required'
                ],
                toDateRules:[
                     v => !!v || 'Field is required'
                ],

            }
        },
        methods:{
            addLeave(){
                const validateForm=this.$refs.form.validate()
                if(validateForm){
                    const leaveData={
                        
                    }
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>