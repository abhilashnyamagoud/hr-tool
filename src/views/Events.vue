<template>
    <v-container>
       <v-row>
           <h2 class="componentTitle">Events</h2>
       </v-row>
       <events-calender/>
    </v-container>
</template>

<script>
import EventsCalender from '../components/Events/EventsCalender.vue'
export default {
  components: { EventsCalender },
}
</script>


<style lang="css" scoped>
.componentTitle{
  padding-left: 20px;
}
</style>