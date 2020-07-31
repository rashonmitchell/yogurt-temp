<template lang="html">
  <div>
    <form class="mt-5" @submit.prevent="register">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card bg-light">
              <div class="card-body card-body-lr">
                <h3 class="font-weight-light mb-3">Sign Up</h3>
                <div class="form-row">
                  <div v-if="error" class="col-12 alert alert-danger px-3">
                    {{ error }}
                  </div>
                  <section class="col-sm-12 form-group">
                    <label class="form-control-label text-left" for="displayName"
                      >Display Name</label
                    >
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
                  <label class="form-control-label sr-only" for="email"
                    >Email</label
                  >
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
                <div class="form-group">
                  <section class="form-group">
                    <input
                      class="form-control"
                      type="password"
                      placeholder="Password"
                      v-model="passOne"
                    />

                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-newaccount__bullet-steps d-flex flex-row">
                          <div class="bullet-pass-hor"><span class=""></span></div> 
                          <div class="bullet-pass-hor"><span class=""></span></div> 
                          <div class="bullet-pass-hor"><span class=""></span></div>
                        </div>
                      </div> 
                      
                      <div class="col-sm-12">
                        <span class="d-block bullet-pass-rounded text-left">
                          <span aria-hidden="true"><font-awesome-icon class="fa" icon="circle"></font-awesome-icon></span>
                          At least 6 characters
                        </span> 
                        <span class="d-block bullet-pass-rounded text-left">
                          <span aria-hidden="true"><font-awesome-icon class="fa" icon="circle"></font-awesome-icon></span> 
                          At least 1 number
                        </span> 
                        <span class="d-block bullet-pass-rounded text-left">
                          <span aria-hidden="true"><font-awesome-icon class="fa" icon="circle"></font-awesome-icon></span> 
                          At least 1 uppercase letter
                        </span>
                      </div>
                    </div>
                    
                  </section>
                  <section class="form-group">
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
                  <button class="btn btn-outline-info" type="submit">
                    Register
                  </button>
                </div>
                <hr>
                <p class="text-right mt-2">
                  <router-link to="/login" class="text-info">Already have an account?</router-link>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import * as firebase from "firebase";
export default {
  data: function() {
    return {
      displayName: null,
      email: null,
      passTwo: null,
      error: null
    };
  },
  methods: {
    register: function() {
      const info = {
        email: this.email,
        password: this.passOne,
        displayName: this.displayName
      };
      if (!this.error) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(info.email, info.password)
          .then(
            userCredentials => {
              console.log("maybe", userCredentials.user);
              return userCredentials.user
                .updateProfile({
                  displayName: info.displayName
                })
                .then(() => {
                  this.$router.replace("dashboard");
                });
              this.$router.replace("dashboard");
            },
            error => {
              this.error = error.message;
            }
          );
      }
    }
  },
  watch: {
    passTwo: function() {
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
  },
  components: {
    FontAwesomeIcon
  }
};
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
.bullet-pass-rounded .fa {
  color: #ededed;
  font-size: 10px;
  height: 16px;
  vertical-align: middle;
  width: 10px;
  transition: all .4s ease;
}
</style>
