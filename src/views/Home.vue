<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome</h1>
    <div v-if="user" class="text-secondary text-center">
      <!-- Welcome back <span class="font-weight-bold text-info">{{ user }}</span>
      <a href="#" class="text-danger" role="button" @click="$emit('logout')">, logout</a> -->
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";
export default {
  name: "Home",
  props: ["user"]

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
