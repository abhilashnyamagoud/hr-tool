<template>
<NavigationBar/>
  <!-- <hello-world /> -->
</template>

<script>
  import HelloWorld from '../components/HelloWorld';
  import NavigationBar from '../components/NavigationBar/NavigationBar.vue'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      NavigationBar
    },
  }
</script>
