<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome</h1>

    <!-- cards -->
    <div class="card p-3" style="text-info">
      <div class="text-center">
        <div class="card-body">
          <h5 class="card-title">title</h5>

          <div>
          {{updateMe}}
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <!-- cards end -->

    <div v-if="user" class="text-secondary text-center">
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";
import "firebase/firestore";
import db from "../db";
export default {
  name: "Home",
  props: ["user"],

  data: () => ({
	  updateMe: null,
  }),
  methods: {
    fetchDataFromServer() {
      db.collection("msg").get().then((querySnapshot) => {
        let returnArr = [];
        querySnapshot.forEach((doc) => {
          returnArr.push(doc.data().msg);
        })
          //console.log(returnArr);
        this.updateMe = returnArr
      });
    }
  },
  created() {
    this.fetchDataFromServer();
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
