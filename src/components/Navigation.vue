<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="primary">
      <b-container>
      <router-link class="navbar-brand" to="/">Home</router-link>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <router-link class="nav-item nav-link" to="/about"
              >About</router-link
            >
            <router-link class="nav-item nav-link" to="/settings"
              ><font-awesome-icon icon="cog"></font-awesome-icon> Settings
            </router-link>
            <router-link
              class="nav-item nav-link"
              to="/login"
              v-if="!user"
              >Sign In</router-link
            >
            <router-link
              class="nav-item nav-link"
              to="/register"
              v-if="!user"
              >Sign Up</router-link
            >
            <router-link class="nav-item nav-link" to="/dashboard" v-if="user"
              ><font-awesome-icon icon="user-circle"></font-awesome-icon>
              {{ user.displayName }}</router-link
            >
            <b-link 
              href="#"
              class="nav-item nav-link"
              role="button"
              v-if="user"
              @click="$emit('logout')"
              > <font-awesome-icon icon="sign-out-alt"></font-awesome-icon> Logout</b-link
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "navigation",
  props: ["user"],
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss">
$primary: #fff;

.yo-button {
  display: inline-block;
  background-color: #fff;
  padding: 6px 12px;
  color: #888;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-size: 12px;
  text-align: center;
  margin-right: 7.5px;
  margin-left: 7.5px;
}
</style>
