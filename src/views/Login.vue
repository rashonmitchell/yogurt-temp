<!--<template lang="html">
  <section class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col wrapper-box">
        <img class="mx-auto d-block" src="../assets/logo-new-color-site.png" alt="Yogurt Records" title="Yogurt Records">
        <p class="wrapper-box__title text-center">Sign in</p>
        <div>
          <form class="form form-newaccount" id="loginForm">
            <div class="form-group">
              <label for="inputUser">E-mail</label>
              <input v-model="input.username" @focus="clearError()" id="inputUser" type="text" name="username" class="form-control" placeholder="Username">
            </div>
            <div class="form-group">
              <label for="inputPassword">Password</label>
              <input v-model="input.password" @focus="clearError()" @keyup.enter="login" id="inputPassword" type="password" name="password" class="form-control" placeholder="Password">
            </div>
            <div class="custom-control custom-checkbox pull-right">
              <input type="checkbox" class="custom-control-input" id="customCheck1">
              <label class="custom-control-label" for="customCheck1">Remember password</label>
            </div>
            <input type="button" v-on:click="login()" class="btn btn-default" id="submitLogin" value="Enter">
            <transition name="fade">
              <span class="error-block error-message" v-show="error != null">{{ error }}</span>
             </transition>
             <hr>
             <router-link to="/register" class="text-link d-block text-right">No account yet?</router-link>
          </form>
        </div>
      </div>
    </div>
  </section>
</template> -->

<template>
  <div>
    <form class="mt-3" @submit.prevent="login">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card bg-light">
              <div class="card-body card-body-lr">
                <h3 class="font-weight-light mb-3">Sign In</h3>
                  <div class="col-12 alert alert-danger px-3" v-if="error">
                    {{ error }}
                  </div>
                  <b-form-group
                    label="Email address"
                    label-for="Email"
                    class="text-left"
                  >
                    <input
                      required
                      class="form-control"
                      type="email"
                      id="email"
                      v-model="email"
                    />
                  </b-form-group>
                  <b-form-group
                    label="Password"
                    label-for="password"
                    class="text-left"
                  >
                    <b-form-input 
                      required
                      type="password"
                      v-model="password"
                    ></b-form-input>
                  </b-form-group>
                
                <div class="custom-control custom-checkbox text-left">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-outline-info" type="submit">Sign in</button>
                </div>

                <div class="form-group mb-0"> 
                  <p class="text-primary">
                    Or Sign In Using
                  </p> 
                  <button 
                    class="btn social-btn-google" 
                    @click="socialLogin"
                  >
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google' }"></font-awesome-icon>
                    Google
                  </button>
                
                  <button 
                    class="btn social-btn-facebook" 
                    @click="socialLoginFacebook"
                  >
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"></font-awesome-icon>
                    Facebook
                  </button>
                </div>
                <hr>
                <p class="text-right mt-2">
                  <!-- New User? Sign up for an account -->
                  <router-link to="/register" class="text-info">No account yet?</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// export default {
//   name: "Login",
//   metaInfo: {
//     title: "Sign in",
//     titleTemplate: "%s | Yogurt "
//   },
//   data() {
//     return {
//       input: {
//         username: "",
//         password: "",
//       },
//       error: "",
//     }
//   },
//   methods: {
//     login() {
//       if(this.input.username != "" && this.input.password != "") {
//         if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
//           this.$enter("authenticated", true);
//           this.$router.replace({ name: "about" });
//         } else {
//           this.error = "E-mail or password incorrect"
//           console.log("The username and / or password is incorrect");
//         }
//       } else {
//         this.error = "Enter a valid e-mail and password"
//         console.log("A username and password must be present");
//       }
//     },
//     clearError() {
//       this.error = ""
//     },
//   }
// }

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Firebase from "firebase";
export default {
  data: function() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    login: function() {
      const info = {
        email: this.email,
        password: this.password
      };
      Firebase.auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          () => {
            this.$router.push("home");
          },
          error => {
            this.error = error.message;
          }
        );
    },
    socialLogin: function() {
      const provider = new Firebase.auth.GoogleAuthProvider();

      Firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.$router.push("home");
        },
        error => {
            this.error = error.message;
          }
        );
    },
    socialLoginFacebook: function() {
      const provider = new Firebase.auth.FacebookAuthProvider();

      Firebase.auth()
        //.signInWithPopup(provider)
        //.signInWithRedirect(provider)
        .getRedirectResult()
        .then((result) => {
          console.log(result);
          if (result.credential) {
            const token = result.credential.accessToken;
          }
          const user = result.user;
          this.$router.replace("home");
        },
        error => {
            this.error = error.message;
          }
        );
        console.log(result, "this is the result");

      Firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
      });
    }
  }
};
</script>

<style lang="scss">
.card-body-lr {
  box-shadow: 5px 10px 18px #d3d3d3;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}

.social-btn-google:hover, 
.social-btn-google:active {
  color: #de5246;
}

.social-btn-facebook:hover, 
.social-btn-facebook:active {
  color: #3b5998;
}
</style>
