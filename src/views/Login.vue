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
    <form class="mt-5" @submit.prevent="login">
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
                      style="position:relative;"
                    >
                    </b-form-input>
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
                    class="btn social-btn-google follow-google" 
                    @click="socialLogin"
                  >
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google' }"></font-awesome-icon>
                     <span class="ml-3">Google</span>
                  </button>
                
                  <button 
                    class="btn social-btn-facebook follow-facebook" 
                    @click="socialLoginFacebook"
                  >
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"></font-awesome-icon>
                      <span class="ml-3 span-social">Facebook</span>
                  </button>
                </div>
                <hr>
                <p class="text-right mt-2">
                  <!-- New User? Sign up for an account -->
                  <router-link to="/register" class="text-info">No account yet?</router-link>
                </p>
                <p class="text-right mt-2">
                  <router-link to="/forgot-password" class="text-info">Forgot password?</router-link>
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
import firebase from "firebase";
export default {
  data: function() {
    return {
      email: "",
      password: "",
      error: "",
      visibility: 'password'
    };
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    showPassword() {
        this.visibility = 'text';
    },
    hidePassword() {
        this.visibility = 'password';
    },
    login: function() {
      const info = {
        email: this.email,
        password: this.password
      };
      firebase.auth()
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
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth()
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
      const provider = new firebase.auth.FacebookAuthProvider();

      firebase.auth()
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

      firebase.auth().signOut().then(function() {
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

.span-social {
  text-align: center;
}

.social-btn-google:hover, 
.social-btn-google:active {
  background-color: white;
  color: #de5246;
}

.social-btn-facebook:hover, 
.social-btn-facebook:active {
  background-color: white;
  color: #3b5998;
}

.follow-google { 
  width: 42px;
  height: 42px;
  border-radius: 50px;
  background: #de5246;
  display: inline-block;
  margin-right: 10px;
  //margin: 50px calc(50% - 21px);
  white-space: nowrap;
  padding: 10px;
  box-sizing: border-box;
  color: white;
  transition: all 0.2s ease;
  font-family: Roboto, sans-serif;
  text-decoration: none;
  box-shadow: 0 5px 6px 0 rgba(0,0,0,0.2);
  i {
    margin-right: 20px;
    transition: margin-right 0.2s ease;
  }
  &:hover {
    width: 134px;
    //transform: translateX(-50px);
    i {
      margin-right: 10px;
    }
  }
}

.follow-facebook {
  width: 42px;
  height: 42px;
  border-radius: 50px;
  background: #3b5998;
  display: inline-block;
  //margin: 50px calc(50% - 21px);
  white-space: nowrap;
  padding: 10px;
  box-sizing: border-box;
  color: white;
  transition: all 0.2s ease;
  font-family: Roboto, sans-serif;
  text-decoration: none;
  box-shadow: 0 5px 6px 0 rgba(0,0,0,0.2);
  i {
    margin-right: 20px;
    transition: margin-left 0.2s ease;
  }
  &:hover {
    width: 134px;
    //transform: translateX(50px);
    i {
      margin-left: 10px;
    }
  }
}
.svg-inline--fa {
  display: inline-block;
  font-size: 21px;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
</style>
