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
    <b-col cols="4" class="list-type text-left">
        <!-- <ul> -->
          <li class="nav-item">
            <a class="text-info nav-link" 
            href="#/settings" >
              <font-awesome-icon icon="user-edit"></font-awesome-icon>
              My Info</a>
          </li>

          <li class="nav-item">
            <a class="text-info text-left nav-link" 
            href="#/settings/password" >
              <font-awesome-icon icon="lock"></font-awesome-icon>
              Password & Security</a>
          </li>

          <li class="nav-item">
            <a class="text-info text-left nav-link" 
            href="#/settings/email">
              <font-awesome-icon icon="envelope"></font-awesome-icon>
              Change Email
            </a>
          </li>

          <li class="nav-item">
            <a class="text-info text-left nav-link" 
            href="#/settings/notfication">
              <font-awesome-icon icon="bell"></font-awesome-icon>
              Notfication
            </a>
          </li>

          <li class="nav-item">
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
  components: {
    FontAwesomeIcon
  },
  props: ["user"]
}
</script>
