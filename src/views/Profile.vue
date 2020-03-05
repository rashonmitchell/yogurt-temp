<template>
  <div class="profile">
    <h1>This is the profile.</h1>
    
    <b-container class="bv-example-row">
    <b-row>
      <b-col sm="4">
        <router-link class="btn-outline-info" to="/">Back Home</router-link>
        <div class="ui fluid vertical menu">
          <div class="nav-item nav-link">
              <router-link class="text-info" to="/settings/profile">Profile</router-link>
          </div>
          <div class="item">
              <router-link class="text-info" to="/settings/password">Password</router-link>
          </div>
        </div>
      </b-col>
      <b-col sm="8">col-sm-8</b-col>
    </b-row>
    </b-container>
  </div>

  
</template>
