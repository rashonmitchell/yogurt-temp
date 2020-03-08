<template>
  <div id="app">
    <LoadingScreen :isLoading="isLoading" />
    <main v-if="!isLoading">
      <Navigation :user="user" @logout="logout" />
      <router-view 
        class="container" 
        :user="user" 
        :meetings="meetings"
        @logout="logout" 
        @addMeeting="addMeeting"
      />
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
      user: null,
      meetings: [],
      msgs: []
    };
  },
  components: {
    LoadingScreen,
    Navigation
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
    addMeeting: function(payload) {
      db.collection("users")
      .doc(this.user.uid)
      .collection("meetings")
      .add({
        name: payload,
        createAt: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 4000),
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        //console.log(user);

        db.collection("users")
          .doc(this.user.uid)
          .collection("meetings")
         //.orderBy("createAt") //firebase method of sorting
          .onSnapshot(snapshot => {
            const snapData = [];
            snapshot.forEach( doc => {
              snapData.push({
                id: doc.id,
                name: doc.data().name
              });
            });
            //this.meetings = snapData;
            //console.log(typeof snapData);
            this.meetings = snapData.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return 1;
                } else {
                  return -1;
                }
             });
            // this.meetings = snapData.sort((a, b) => {
            //   if (typeof b.name != 'undefined' && typeof a.name != 'undefined') {
            //     console.log(typeof name);
            //     //do stuff here
            //     if (a.name.toLowerCase() < b.name.toLowerCase()) {
            //       return 1;
            //     } else {
            //       return -1;
            //     }
            //   }
            // });
          });
      }
    });
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
  border-bottom: 1px solid #cdcdcd;

  a {
    font-weight: bold;
    color: #2c3e50 !important;

    &.router-link-exact-active {
      color: #42b983 !important;
    }
  }

  a:hover {
    color: #42b983 !important;
  }
} 
</style>
