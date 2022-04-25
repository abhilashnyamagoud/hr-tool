<template>
  <div>
    <v-row>
        <h1>Dashboard</h1>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto my-12"
          max-width="300"
        >
        <v-card-title>Total Employees</v-card-title>
        <v-card-text>
          <v-progress-linear value="15" color="green"></v-progress-linear>
        </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto my-12"
          max-width="300"
        >
        <v-card-title>Projects</v-card-title>
        <v-card-text>
          <v-progress-linear value="50" color="orange"></v-progress-linear>
        </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto my-12"
          max-width="300"
        >
        <v-card-title>Tasks</v-card-title>
        <v-card-text>
          <v-progress-linear value="35" color="purple"></v-progress-linear>
        </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="css" scoped>

</style>