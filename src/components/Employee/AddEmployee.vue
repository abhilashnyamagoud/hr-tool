<template>
    <div>
        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >
        <v-text-field
        v-model="fullName"
        :rules="fullNameRules"
        label="fullName"
        required
        >
        </v-text-field>

        <v-text-field
            v-model="employesId"
            :rules="idRules"
            label="Employee Id"
            required
        >
        </v-text-field>

            <v-text-field
             v-model="orgEmail" 
             :rules="orgEmailRules"
             label="Company Email"
             required  
            >
            </v-text-field>
            
            <v-text-field 
            v-model="designation"
            :rules="designationRules"
            label="designation"
            required
            >
            </v-text-field>

            <v-text-field
            v-model="department"
            :rules="departmentRules"
            label="department"
            required
            >
            </v-text-field>

            <v-text-field 
            v-model="manager"
            
            >
            </v-text-field>

        </v-form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>