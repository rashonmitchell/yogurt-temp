<template>
  <div class="home mt-5">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> 
    <h1>Welcome</h1>-->

    <div>
      <!-- cards -->
      <b-card
        header-tag="header"
        footer-tag="footer"
        class="my-4"
        v-for="message in messages" 
        :key="message"
      >
        <template v-slot:header cols="12">
          <b-row >
            <b-col><h4 class="text-left">{{currentDate}}</h4></b-col>
            <b-col class="text-right pt-2"><font-awesome-icon icon="heart" class="red">
              <b-button>
              
              </b-button>
              </font-awesome-icon
              ></b-col>
          </b-row>
        </template>

        <b-card-body>
          <b-card-text>
            {{message}}
          </b-card-text>
        </b-card-body>

        <template v-slot:footer>
          <em>Footer Slot</em>
        </template>
      </b-card>
      <!-- cards end -->
    </div>
  </div>

  
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import * as firebase from "firebase";
import "firebase/firestore";
import db from "../db";
export default {
  name: "Home",
  props: ["user"],

  data: () => ({
    messages: null,
    currentDate: null,
  }),
  methods: {
    fetchDataFromServer() {
      db.collection("msg").get().then((querySnapshot) => {
        let returnArr = [];
        querySnapshot.forEach((doc) => {
          returnArr.push(doc.data().msg);
        })
          //console.log(returnArr);
          this.messages = returnArr;
        // setTimeout(() => {
        //   this.messages = returnArr;
        // }, 1000);
      });
    },
    callFunction: function() {
      let optionsOfDate = { weekday: 'long', month: 'long', day: 'numeric' };
      //let optionsOfDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      let today  = new Date();

      //console.log(today.toLocaleDateString("en-US")); // 3/7/2020
      //console.log(today.toLocaleDateString("en-US", optionsOfDate)); // Saturday, March 7, 2020

      today.toLocaleDateString("en-US");
      this.currentDate = today.toLocaleDateString("en-US", optionsOfDate);
    }
  },
  created() {
    this.fetchDataFromServer();
  },
  mounted () {
    this.callFunction()
  },
  components: {
    FontAwesomeIcon
  }


  // data: function(){
  // },
  // methods: {
  //   fetchMsgs (){
  //     let msgRef = firebase.database().ref('/msg');
  //     // msgRef.once('value', function(snapshot) {
  //     //   console.log(msgRef);
  //     //   // snapshot.forEach(function(childSnapshot) {
  //     //   //   let childData = childSnapshot.val();
  //     //   //   console.log(childData);
  //     //   // });
  //     // });

  //     firebase.database().ref('/msg').once('value').then(function(snapshot) {
  //     console.log(snapshot.val());
  //   });
  //   }
  // },
  // created() {
  //   this.fetchMsgs();
  // }
};
</script>
<style lang="scss">
.red:hover{
  color: #dc3445 !important;
}
</style>
