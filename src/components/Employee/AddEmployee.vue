<template>
    <v-container>
        <v-card class="pa-5" shaped >
            <h4>Add Employees </h4>
        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >
        <v-row>
        <v-col
            cols="6"

        >
        <v-text-field
        v-model="fullName"
        :rules="fullNameRules"
        label="fullName"
        required
        >
        </v-text-field>

        </v-col>
        <v-col
            cols="6x"

        >

        <v-text-field
            v-model="employesId"
            :rules="idRules"
            label="Employee Id"
            required
            type="number"
        >
        </v-text-field>
        </v-col>
        </v-row>

        <v-row>
            <v-col
            cols="6"
            >
            <v-text-field
             v-model="orgEmail" 
             :rules="orgEmailRules"
             label="Company Email"
             required  
            >
            </v-text-field>
            </v-col>
            <v-col
            cols="6"
            >
             <v-select
                  v-model="designation"
          :items="['Trainee Engineer','Software Engineer','Senior-Software Engineer','Manager','Architect']"
          label="Designation"
          :rules="designationRules"
          required
        ></v-select>
           <!-- <pre>{{designation}} </pre> -->
            </v-col>
        </v-row>
            <v-row>
                <v-col
                cols="6"
                >
                 <v-select
                  v-model="department"
          :items="['Micro-services(COE)','HR','Azure','AWS','Cyber-Security','ITIS','Sales-force']"
          label="department"
          :rules="departmentRules"
          required
        ></v-select>
           <!-- <pre>{{department}} </pre> -->
                </v-col>
                <v-col 
                cols="6"
                >
            <v-text-field 
            v-model="manager"
            :rules="managerRules"
            label="manager"
            required
            >
            </v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="6">
                      <v-select
                  v-model="location"
          :items="['Bangalore','Hydrabad']"
          label="Location"
          :rules="locationRules"
          required
        ></v-select>
                 <!-- <pre>{{location}} </pre> -->
                </v-col>
                <v-col 
                cols="6"
                >
                 <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="joinedDate"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="joinedDate"
            label="joined Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="joinedDate"
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
            @click="$refs.menu.save(joinedDate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>

                </v-col>

            </v-row>
            <v-row>
                <v-col cols="6">
                     <v-menu
        ref="menu1"
        v-model="menu1"
        :close-on-content-click="false"
        :return-value.sync="dob"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dob"
            label="Date of birth"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="dob"
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
            @click="$refs.menu1.save(dob)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
                  <!-- <pre>{{dob}} </pre> -->
                </v-col>
                <v-col cols="6">
                     <v-select
                  v-model="education"
          :items="['BE','B-tech','MBA','BBA','M-tech','B-com','M-com','Other']"
          label="Education"
          :rules="educationRules"
          required
        ></v-select>
                   <!-- <pre>{{education}} </pre> -->
                </v-col>
            </v-row>

            <v-row>
                    <v-col cols="8">
                        <v-text-field
                        v-model="mobile"
                        :rules="mobileRules"
                        label="Mobile Number"
                        required
                        :counter="10"
                        type="number"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-btn 
                        block
                        elevation="18"
                        class="mt-4"
                        @click="addEmp"
                         color="info">
                            Add Employee
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
                fullName:'',
                employesId:'',
                orgEmail:'',
                designation:'',
                department:'',
                manager:'',
                location:'',
                joinedDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                dob:'',
                education:'',
                mobile:'',
                fullNameRules:[
                     v => !!v || 'Name is required'
                ],
                orgEmailRules:[
                     v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                  idRules:[
                      v => !!v || 'ID is required',
                ],
                designationRules:[
                    v => !!v || 'Designation is required'
                ],
                departmentRules:[
                    v => !!v || 'Department is required'
                ],
                managerRules:[
                     v => !!v || 'Manager is required'
                ],
                locationRules:[
                     v => !!v || 'Location is required'
                ],            
                educationRules:[
                    v => !!v || 'Education field is required'
                ],
                mobileRules:[
                     v => !!v || 'Mobile Number is required',
                      v => (v && v.length <= 10 && v.length>=10) || 'Number must be less than 10 digits'
                ],
              

            }
        },
        methods:{
            addEmp(){
                const validateForm=this.$refs.form.validate()
                if(validateForm){
                    const empData={
                        fullName:this.fullName,
                        employesId:this.employesId,
                        orgEmail:this.orgEmail,
                        designation:this.designation,
                        department:this.department,
                        manager:this.manager,
                        location:this.location,
                        joinedDate:this.joinedDate,
                        dob:this.dob,
                        education:this.education,
                        mobile:this.mobile,
                    }
                    console.log(empData)
                    axios.post('http://localhost:3088/api/employes',empData)
                    .then((res)=>{
                        const result=res.data
                        // console.log('fetched',result)
                        this.fullName=''
                        this.employesId=''
                        this.orgEmail=''
                        this.departmentRules=''
                        this.department=''
                        this.manager=''
                        this.location=''
                        this.joinedDate=''
                        this.dob=''
                        this.education=''
                        this.mobile=''
                         this.$router.push('/emp')
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