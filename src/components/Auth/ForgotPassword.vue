<template>
    <div>
      <form class="mt-5" @submit.prevent="forgetPassword">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="card bg-light">
                <div class="card-body card-body-lr">
                  <h3 class="font-weight-light mb-3">Forgot Password</h3>
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
                      v-model="user.email"
                    />
                  </b-form-group>
                  
                  <div class="form-group text-right mb-0">
                    <button class="btn btn-outline-info" type="submit">Reset password</button>
                  </div>
                  <hr class="mt-4">
                  <p class="text-right mt-2">
                    <!-- New User? Sign up for an account -->
                    <router-link to="/login" class="text-info">Remember password?</router-link>
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
import firebase from "firebase";

export default {
  data() {
    return {
      user: {   
        email: ''
      }
    };
  },
  methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
            alert('Check your registered email to reset the password!')
            this.user = {   
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  }
};
</script>