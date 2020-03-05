<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="">
      <b-container>
      <router-link class="navbar-brand" to="/">Home</router-link>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <router-link class="nav-item nav-link text-right" to="/about"
              >About</router-link
            >
            <router-link class="nav-item nav-link text-right" to="/settings"
              ><font-awesome-icon icon="cog"></font-awesome-icon> Settings
            </router-link>

            <router-link
              class="nav-item nav-link text-right"
              to="/login"
              v-if="!user"
              >Sign In</router-link
            >
            <router-link
              class="nav-item nav-link text-right"
              to="/register"
              v-if="!user"
              >Sign Up</router-link
            >
            <router-link class="nav-item nav-link text-right" to="/dashboard" v-if="user"
              ><font-awesome-icon icon="user-circle"></font-awesome-icon>
              {{ user.displayName }}</router-link
            >
            <b-link 
              href="#"
              class="nav-item nav-link text-right"
              role="button"
              v-if="user"
              @click="$emit('logout')"
              > <font-awesome-icon icon="sign-out-alt"></font-awesome-icon> Logout</b-link
            >
            <router-link class="nav-item nav-link text-right" to="/profile" v-if="user"
              ><font-awesome-icon icon="user-edit"></font-awesome-icon>
              Profile</router-link
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
</style>
