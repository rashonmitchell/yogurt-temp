<template>
  <div id="app">
    <LoadingScreen :isLoading="isLoading" />
    <!-- <Navigation /> -->
    <main v-if="!isLoading">
      <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
        <div id="nav" class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <!-- <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/">Home</router-link>
        </div> -->
        <router-link class="navbar-brand" to="/">Home</router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <div class="navbar-nav ml-auto">
              <router-link class="nav-item nav-link" to="/about">About</router-link>
              <router-link class="nav-item nav-link" to="/settings"><font-awesome-icon icon="cog"></font-awesome-icon> Settings </router-link>
              <router-link class="nav-item nav-link" to="/login">Login</router-link>
              <router-link class="nav-item nav-link" to="/register">Register</router-link> 
            </div>
          </b-collapse>
        </div>
      </nav>
      
      <router-view class="container" :user="user" />
    </main>
  </div>
</template>

<script>
import LoadingScreen from "./components/LoadingScreen";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import * as firebase from "firebase";
import 'firebase/firestore';
import db from "./db.js"

export default {
  name: "App",
  data: function() {
    return {
      isLoading: true ,
      user: null
    }
  },
  mounted() {
    db.collection("users")
      .doc("qFPmNSC47hpsVzkfgr9S")
      .get()
      .then(snapshot => {
        this.user = snapshot.data().name;
      }),
      setTimeout(() => {
      this.isLoading = false;
    }, 4000);
  },
  components: {
    LoadingScreen,
    FontAwesomeIcon
  },
  // data() {
  //   return { isLoading: true };
  // },
  // mounted() {
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 4000);
  // }
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
