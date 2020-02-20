<template lang="html">
  <section class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col wrapper-box">
        <!-- <img class="mx-auto d-block" src="../assets/logo-new-color-site.png" alt="Compacto Records" title="Compacto Records"> -->
        <p class="wrapper-box__title text-center">Welcome</p>
        <div>
          <form class="form form-newaccount" id="passwordForm">
            <div class="form-group">
              <label for="">E-mail</label>
              <input type="text" v-model="input.username" @focus="clearError('username')" @blur="username_check" :class="{'orange': error.username !== ''}" name="username" class="form-control" id="username">
              <!-- <span class="invalid-email d-block" v-show="error.username">{{ error.username }}</span> -->
              <!-- <input type="text" v-model="input.username" v-validate data-vv-rules="required|email" name="email" class="form-control" id="email" placeholder=""> -->
              <!-- <span class="invalid-email d-block" v-show="errors.has('email')">{{ errors.first('email') }}</span> -->
              <!-- <span class="invalid-email d-block"></span> -->
            </div>
            <div class="form-group">
              <label for="">Password</label>
              <input type="password" v-model="input.password" class="input-lg form-control" :class="{'green' : passValid === 3, 'yellow' : passValid === 2, 'orange' : passValid === 1}" name="password1" id="password1" autocomplete="off">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-newaccount__bullet-steps d-flex flex-row">
                    <div class="bullet-pass-hor" :class="{'active' : passValid > 0}"><span :class="{'green' : passValid === 3, 'yellow' : passValid === 2, 'orange' : passValid === 1}"></span></div>
                    <div class="bullet-pass-hor" :class="{'active' : passValid > 1}"><span :class="{'green' : passValid === 3, 'yellow' : passValid === 2, 'orange' : passValid === 1}"></span></div>
                    <div class="bullet-pass-hor" :class="{'active' : passValid > 2}"><span :class="{'green' : passValid === 3, 'yellow' : passValid === 2, 'orange' : passValid === 1}"></span></div>
                    {{ passValid.length }}
                  </div>
                </div>
                <div class="col-sm-12">
                  <span class="d-block bullet-pass-rounded"><span class="fa fa-circle" :class="{'active': minLength, 'orange': !minLength && input.password.length > 0}" aria-hidden="true"></span> At least 6 characters</span>
                  <span class="d-block bullet-pass-rounded"><span class="fa fa-circle" :class="{'active': hasNumber, 'orange': !hasNumber && input.password.length > 0}" aria-hidden="true"></span> At least 1 number</span>
                  <span class="d-block bullet-pass-rounded"><span class="fa fa-circle" :class="{'active': hasUpperCase, 'orange': !hasUpperCase && input.password.length > 0}" aria-hidden="true"></span> At least 1 uppercase letter</span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">Confirm your password</label>
              <input type="password" v-model="input.match_password" @focus="clearError('passwordMatch')" @blur="match_check" @keyup.enter="newUser" class="input-lg form-control" name="password2" id="password2" autocomplete="off">
              <!-- <span class="invalid-pass d-block" v-show="error.passwordMatch">{{ error.passwordMatch }}</span> -->
              <!-- <input type="password" v-model="input.match_password" @blur="match_check" @keyup.enter="newUser" class="input-lg form-control" name="password2" id="password2" autocomplete="off"> -->
              <!-- <span class="invalid-pass"></span> -->
            </div>
            <input type="button" v-on:click="newUser()" class="btn btn-default" id="submit" data-loading-text="Cadastrando..." value="Cadastrar">
            <transition-group name="fade" class="error-block d-block">
              <span class="error-message" :key="index + 'error'" v-for="(errorName, index) in error" v-show="errorName !== ''">{{ errorName }}</span>
            </transition-group>
            <hr>
            <router-link to="/login" class="text-link d-block text-right">Already have an account?</router-link>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

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
