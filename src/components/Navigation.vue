<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="">
      <b-container>
      <router-link class="navbar-brand" to="/">Yogurt</router-link>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <router-link class="nav-item nav-link text-right" to="/about"
              ><font-awesome-icon icon="info-circle"></font-awesome-icon> About</router-link
            >


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
            <!-- <router-link class="nav-item nav-link text-right" to="/dashboard" v-if="user"
              ><font-awesome-icon icon="user-circle"></font-awesome-icon>
              {{ user.displayName }}</router-link
            > -->

            <router-link class="nav-item nav-link text-right" to="/settings" v-if="user"
              ><font-awesome-icon icon="cog"></font-awesome-icon> Settings
            </router-link>

            <!-- <router-link class="nav-item nav-link text-right" to="/bookmarks" v-if="user"
              ><font-awesome-icon icon="bookmark"></font-awesome-icon>
              Bookmarks</router-link
            > -->

            <b-nav-item-dropdown 
              class="text-right"
              v-if="user" 
              right
            >
              <template v-slot:button-content right>
                <font-awesome-icon icon="user-circle"></font-awesome-icon>
                {{ user.displayName }}
              </template>

              <b-dropdown-header id="dropdown-header-label" class="text-right">
                <!-- <img v-bind:src="user.photoURL" class="avatar img-circle img-thumbnail" alt="avatar" /> -->
                <!-- <font-awesome-icon icon="user-circle"></font-awesome-icon> -->
                <b>Hello,</b> {{ user.displayName }}
              </b-dropdown-header>

              <b-dropdown-item 
                class="text-right"
                to="/dashboard"
                v-if="user"
              ><font-awesome-icon icon="address-card"></font-awesome-icon>
                Dashboard
              </b-dropdown-item>
              
              <b-dropdown-item
                class="text-right" 
                to="/bookmarks"
                v-if="user"
              ><font-awesome-icon icon="bookmark"></font-awesome-icon>
                Bookmarks
              </b-dropdown-item>
              
              <b-dropdown-item 
                class="text-right"
                href="#"
              ><font-awesome-icon icon="star"></font-awesome-icon>
                Saved
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>

              <b-dropdown-item
                href="#"
                class="text-right"
                role="button"
                v-if="user"
                @click="$emit('logout')"
              ><font-awesome-icon icon="sign-out-alt"></font-awesome-icon>
                Logout
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- <hr> -->
            <div></div>
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
  .avatar {
    border-radius: 50%;
    width: 20%;
  }
  .dropdown-menu {
    margin: .5rem 0 0 !important;

    .dropdown-divider {
      border-top: 1px solid #42b983;
    }

    a.dropdown-item:active {
      color: white !important;
    }
  }
</style>
