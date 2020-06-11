<template>
  <!-- <div class="four wide column"> -->
    <!-- <router-link class="ui button mini primary" to="/">Back Home</router-link>
    <div class="ui fluid vertical pointing menu">
      <div class="item">
        <router-link to="/settings/profile">Profile</router-link>
      </div>
      <div class="item">
        <router-link to="/settings/password">Password</router-link>
      </div>
    </div> 
  <b-row> -->
    <b-col cols="4" class="list-type text-left sidebar-menu">
        <!-- <ul> -->
          <li class="nav-item" :class="{' active ' : link === 1}">
            <a class="text-info nav-link"
            href="#/settings" >
              <font-awesome-icon icon="user-edit"></font-awesome-icon>
              My Info</a>
          </li>

          <li class="nav-item" :class="{' active ' : link === 2}">
            <a class="text-info text-left nav-link"
            href="#/settings/password" >
              <font-awesome-icon icon="lock"></font-awesome-icon>
              Password & Security</a>
          </li>

          <li class="nav-item" :class="{' active ' : link === 3}">
            <a class="text-info text-left nav-link"
            href="#/settings/email">
              <font-awesome-icon icon="envelope"></font-awesome-icon>
              Change Email
            </a>
          </li>

          <li class="nav-item" :class="{active : link === 4}">
            <a class="text-info text-left nav-link"
            href="#/settings/notfication">
              <font-awesome-icon icon="bell"></font-awesome-icon>
              Notfication
            </a>
          </li>

          <li class="nav-item" :class="{active : link === 5}">
            <a class="text-info text-left nav-link"
            href="#/settings/daily-yogurt">
              <font-awesome-icon icon="calendar-day"></font-awesome-icon>
              Daily Yogurt
            </a>
          </li>
        <!-- </ul> -->
      </b-col>
  <!--</b-row>
   </div> -->
</template>
<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
export default {
  data: function() {
    return {
      link: 1
    };
  },
  components: {
    FontAwesomeIcon
  },
  props: ["user"]
}
</script>

<style lang="scss">
  .text-color{
    color: red;
  }
  .active {
    color: #42b983;
  }
  // .b-link .text-info:active {
  //   color: #42b983 !important;
    
  //   &.active {
  //     color: #42b983;
  //   }
  //}
</style>
