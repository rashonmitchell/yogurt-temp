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
            <b-col class="">
              <p class="text-left">
                  {{currentDate}}
                <span class="text-left">Today's Yogurt</span> 
              </p>
            </b-col>
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
          <!-- <em>Footer Slot</em> -->
          <b-row>
            <b-col class="text-right">
              <b-button 
              @click="toggleStar(item.id)" 
              variant="link">
                <font-awesome-icon icon="star"></font-awesome-icon>
                Save
              </b-button>
              <b-button :pressed.sync="myToggle" variant="link">
                <font-awesome-icon icon="share-alt"></font-awesome-icon>
                Share
              </b-button>
            </b-col>
          </b-row>
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
    myToggle: false,
  }),
  methods: {
    toggleStar: function(){
      if (this.user && this.user.uid == this.userID) {
        const ref = db
        .collection("users")
        .doc(this.user.uid)
        .collection("meetings")
        .doc(this.meetingID)
        .collection("")
      }
    },
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
};
</script>
<style lang="scss">
.red:hover{
  color: #dc3445 !important;
}
.button-link-active {
  color: yellow;
}
</style>
