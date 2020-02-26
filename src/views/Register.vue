<template lang="html">
  <div>
    <form
      class="mt-3"
      @submit.prevent="register"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card bg-light">
              <div class="card-body">
                <h3 class="font-weight-light mb-3">Sign Up</h3>
                <div class="form-row">
                  <div
                    v-if="error"
                    class="col-12 alert alert-danger px-3"
                  >
                    {{ error }}
                  </div>
                  <section class="col-sm-12 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="displayName"
                    >Display Name</label>
                    <input
                      class="form-control"
                      type="text"
                      id="displayName"
                      placeholder="Display Name"
                      name="displayName"
                      required
                      v-model="displayName"
                    />
                  </section>
                </div>
                <section class="form-group">
                  <label
                    class="form-control-label sr-only"
                    for="email"
                  >Email</label>
                  <input
                    class="form-control"
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    required
                    name="email"
                    v-model="email"
                  />
                </section>
                <div class="form-row">
                  <section class="col-sm-6 form-group">
                    <input
                      class="form-control"
                      type="password"
                      placeholder="Password"
                      v-model="passOne"
                    />
                  </section>
                  <section class="col-sm-6 form-group">
                    <input
                      class="form-control"
                      type="password"
                      required
                      placeholder="Repeat Password"
                      v-model="passTwo"
                    />
                  </section>
                </div>
                <div class="form-group text-right mb-0">
                  <button
                    class="btn btn-primary"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-2">
      or
      <router-link to="/login">login</router-link>
    </p>
  </div>
</template>

<script>
import * as firebase from "firebase";
export default {
  data: function() {
    return {
      displayName: null,
      email: null,
      passTwo: null,
      error: null
    }
  },
  methods: {
    register: function() {
      const info = {
        email: this.email,
        password: this.passOne,
        displayName: this.displayName
      }
      if(!this.error){
        firebase.auth()
          .createUserWithEmailAndPassword(info.email, info.password)
          .then(
            userCredentials => {
              return userCredentials.user.updateProfile({
                displayName: info.displayName
              }).then(() => {
                this.$router.replace('dashboard');
              })
              this.$router.replace('dashboard');
            },
            error => {
              this.error = error.message;
            }
          );
      }
    }
  },
  watch: {
    passTwo : function() {
      if (
        this.passOne !== "" &&
        this.passTwo !== "" &&
        this.passTwo !== this.passOne
      ) {
        this.error = "passwords must match";
      } else {
        this.error = null;
      }
    }
  }
}
  // export default {
  //   name: "Login",
  //   metaInfo: {
  //     title: "Welcome",
  //     titleTemplate: ""
  //   },
  //   data() {
  //     return {
  //       input: {
  //         username: "",
  //         password: "",
  //         match_password: "",
  //       },
  //       error: {
  //         password: "",
  //         passwordMatch: "",
  //         username: "",
  //       },
  //     }
  //   },
  //   methods: {
  //     match_check() {
  //       this.error.passwordMatch = ""
  //       if (this.input.password !== this.input.match_password) this.error.passwordMatch = "Passwords do not match"
  //       return this.error.passwordMatch !== ""
  //     },

  //     clearError(field) {
  //       this.error[field] = ""
  //     },
  //     password_check() {
  //       this.error.password = ""
  //       if (!this.hasNumber) this.error.password = "Password does not contain a number"
  //       // if (!this.hasLowerCase) this.error.password = 'Senha não contém letra minuscula'
  //       if (!this.hasUpperCase) this.error.password = "Password does not contain uppercase letter"
  //       if (!this.minLength) this.error.password = "Password does not contain 6 characters"

  //       return this.error.password !== ""
  //     },
  //     username_check() {
  //       this.error.username = ""
  //       if (!this.validEmail(this.input.username)) this.error.username = "Enter a valid e-mail address"
  //       if (this.input.username === '') this.error.username = "Enter an e-mail"
  //       return this.error.username !== ''
  //     },
  //     newUser() {
  //       if (this.username_check()) return
  //       if (this.password_check()) return
  //       if (this.match_check()) return
  //       // TODO: cadastrar e redirecionar
  //       this.$router.replace({ name: "login" });
  //       return this.error === ''
  //     },
  //     validEmail(email) {
  //       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //       return re.test(email);
  //     },
  //   },
  //   computed: {
  //     hasNumber() {
  //       return /\d/.test(this.input.password)
  //     },
  //     hasLowerCase() {
  //       return /[a-z]/.test(this.input.password)
  //     },
  //     hasUpperCase() {
  //       return /[A-Z]/.test(this.input.password)
  //     },
  //     minLength() {
  //       return this.input.password.length > 5
  //     },
  //     passValid() {
  //       let value = 0
  //       if (this.hasNumber) value += 1
  //       // if (this.hasLowerCase) value += 1
  //       if (this.hasUpperCase) value += 1
  //       if (this.minLength) value += 1
  //       return value
  //     },
  //   },
  // }
</script>

<style lang="scss">
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 300ms;
  }
</style>
