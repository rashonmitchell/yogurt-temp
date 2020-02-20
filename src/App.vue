<template>
  <div id="app">
    <LoadingScreen :isLoading="isLoading" />
    <!-- <Navigation /> -->
    <main v-if="!isLoading">
      <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
        <div id="nav" class="container-fluid">
        <router-link class="navbar-brand" to="/">Home</router-link>
          <div class="navbar-nav ml-auto">
            <router-link class="nav-item nav-link" to="/about">About</router-link>
            <router-link class="nav-item nav-link" to="/settings"><font-awesome-icon icon="cog"></font-awesome-icon> Settings </router-link>
            <router-link class="nav-item nav-link" to="/login">Login</router-link>
            <router-link class="nav-item nav-link" to="/register">Register</router-link> 
          </div>
        </div>
      </nav>
      
      <router-view class="container"/>
    </main>
  </div>
</template>

<script>
import LoadingScreen from "./components/LoadingScreen";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "App",
  components: {
    LoadingScreen,
    FontAwesomeIcon
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 4000);
  }
};
</script>

<style lang="scss">
//@import './assets/scss/variables.scss';
//@import './node_modules/bootstrap/scss/bootstrap.scss';
$primary: #707070;
@import './assets/scss/form.scss';
@import './assets/scss/main.scss';
@import "node_modules/bootstrap/scss/bootstrap";

body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background: #cdcdcd;
  border-bottom: 1px solid #2c3e50;
  padding: 15px 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
