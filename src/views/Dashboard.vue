<template>
  <v-container>
      <dashboard-data />
  </v-container>
</template>

<script>
  import DashboardData from '../components/DashboardData.vue'

  export default {
    name: 'Dashboard',

    components: {
      DashboardData,
    },
  }
</script>
