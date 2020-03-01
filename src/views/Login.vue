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
                <section class="form-group">
                  <div class="col-12 alert alert-danger px-3" v-if="error">
                    {{ error }}
                  </div>
                  <label class="form-control-label sr-only" for="Email"
                    >Email</label
                  >
                  <input
                    required
                    class="form-control"
                    type="email"
                    id="email"
                    placeholder="Email"
                    v-model="email"
                  />
                </section>
                <section class="form-group">
                  <input
                    required
                    class="form-control"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  />
                </section>
                <div class="custom-control custom-checkbox text-left">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-outline-info" type="submit">Log in</button>
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

import Firebase from "firebase";
export default {
  data: function() {
    return {
      email: "",
      password: "",
      error: ""
    };
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
</style>
