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
            
            <v-text-field 
            v-model="designation"
            :rules="designationRules"
            label="designation"
            required
            >
            </v-text-field>
            </v-col>
        </v-row>
            <v-row>
                <v-col
                cols="6"
                >
            <v-text-field
            v-model="department"
            :rules="departmentRules"
            label="department"
            required
            >
            </v-text-field>
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
                    <v-text-field 
                    v-model="location"
                    :rules="locationRules"
                    label="location"
                    required
                    >
                    </v-text-field>
                </v-col>
                <v-col 
                cols="6"
                >
                <v-text-field
                v-model="joinedDate"
                :rules="joinedDateRules"
                label="joinedDate YYYY-MM-DD"
                required
                > 
                </v-text-field>
                </v-col>

            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-text-field
                    v-model="dob"
                    :rules="dobRules"
                    label="Date Of Birth"
                    required
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field
                    v-model="education"
                    :rules="educationRules"
                    label="Education"
                    required
                    >
                    </v-text-field>
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
                valid:true,
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
                joinedDateRules:[
                    v => !!v || 'joinedDate is required'
                ],
                dobRules:[
                    v => !!v || 'Date of Birth is required'
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