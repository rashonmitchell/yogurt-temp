<template>
  <div class="home">
    <Navigation />
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>Welcome</h1>
    <font-awesome-icon icon="cog"> </font-awesome-icon>
  </div>
</template>

<script>
// @ is an alias to /src
//import Navigation from "@/components/Navigation.vue";

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "Home",
  components: {
  //   Navigation
    FontAwesomeIcon
  }
};
</script>
