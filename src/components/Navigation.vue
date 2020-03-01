<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div id="nav" class="container-fluid">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <div class="navbar-nav ml-auto">
            <router-link class="nav-item nav-link" to="/about"
              >About</router-link
            >
            <router-link class="nav-item nav-link" to="/settings"
              ><font-awesome-icon icon="cog"></font-awesome-icon> Settings
            </router-link>
            <router-link
              class="nav-item nav-link yo-button"
              to="/login"
              v-if="!user"
              >Sign In</router-link
            >
            <router-link
              class="nav-item nav-link yo-button"
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
          </div>
        </b-collapse>
      </div>
    </nav>
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
nav {
  background: #cdcdcd;
  border-bottom: 1px solid #ddd;
  height: 70px;
  padding: 15px 30px;

  a {
    font-weight: bold;
    color: #2c3e50 !important;

    &.router-link-exact-active {
      color: #42b983;
    }
    :hover,
    router-link:hover {
      color: #42b983;
    }
  }
}

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
