<template>
  <div id="app">
    <LoadingScreen :isLoading="isLoading" />
    <main v-if="!isLoading">
      <Navigation :user="user" @logout="logout" />
      <router-view class="container" :user="user" @logout="logout" />
    </main>
  </div>
</template>

<script>
import LoadingScreen from "./components/LoadingScreen";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Navigation from "@/components/Navigation.vue";
import * as firebase from "firebase";
import "firebase/firestore";
import db from "./db.js";

export default {
  name: "App",
  data: function() {
    return {
      isLoading: true,
      user: null
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("login");
        })
    },
    db
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 4000),
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        }
    });
  },
  components: {
    LoadingScreen,
    Navigation
  }
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
$primary: #fff;
@import "./assets/scss/form.scss";
@import "./assets/scss/main.scss";
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

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
  border-bottom: 1px solid #ddd;
  height: 70px;
  padding: 15px 30px;

  a {
    font-weight: bold;
    color: #2c3e50 !important;

    &.router-link-exact-active {
      color: #42b983 !important;
    }
  }
}
</style>