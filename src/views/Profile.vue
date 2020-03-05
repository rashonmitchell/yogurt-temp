<template>
  <div class="profile mt-5">
    <b-container class="bv-example-row">
    <b-row>
      <b-col cols="4">
        <h1><font-awesome-icon icon="user-circle"></font-awesome-icon> {{ user.displayName }}</h1>

        <router-link class="btn-outline-info" to="/">Back Home</router-link>
        <div class="nav-item nav-link">
          <router-link class="text-info" to="#nav-profile" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="true">Profile</router-link>
        </div>

        <div class="item">
          <router-link class="text-info" to="#nav-password" id="nav-password-tab" >Password</router-link>
        </div>
      </b-col>

      <!-- <div>
        <b-card no-body>
          <b-tabs pills card vertical>
            <b-tab title="Tab 1" active>
              <b-card-text>Tab contents 1</b-card-text>
            </b-tab>
            <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
            <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
          </b-tabs>
        </b-card>
      </div> -->

      
      <b-col cols="8">
        <b-card id="nav-profile" title="Edit Profile" align="left" icon="user-edit" aria-labelledby="nav-profile-tab" role="tabpanel">
          <b-form-group
            label="Name"
            label-for="name"
          >
            <b-form-input id="name"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Email address"
            label-for="email"
          >
            <b-form-input id="email"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Bio"
            label-for="textarea"
          >
            <b-form-textarea
              id="textarea"
              placeholder="Enter something..."
              rows="2"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            label="Location"
            label-for="location"
          >
            <b-form-input id="location" ></b-form-input>
          </b-form-group>
          
          <b-link href="#" class="card-link btn btn-outline-success">Update Profile</b-link>
        </b-card>

        <b-card id="nav-password" class="my-5" title="Edit Password" align="left" icon="user-edit" aria-labelledby="nav-password-tab" aria-selected="false">
          <b-form-group
            label="Current Password"
            label-for="current-password"
          >
            <b-form-input id="current-password"></b-form-input>
          </b-form-group>

          <b-form-group
            label="New Password"
            label-for="new-password"
          >
            <b-form-input id="new-password"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Confirm Password"
            label-for="confirm-password"
          >
            <b-form-input id="confirm-password" ></b-form-input>
          </b-form-group>
          
          <b-link href="#" class="card-link btn btn-outline-success">Update Password</b-link>
        </b-card>
      </b-col>
</b-row>
    </b-container>
  </div>

  
</template>
<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
export default {
  name: "profile",

  components: {
    FontAwesomeIcon
  },
props: ["user"]
}
</script>

<style lang="scss">
.form-control {
	height: 27px;
  background-color: transparent;
	border: none;
	border-bottom: 2px solid #e6e6e6;
	width: 100%;
	color: #666;
	&:focus {
		border-color: #e9e0cf;
	}
	&::-webkit-input-placeholder { 
		color: #999;
	}
	&::-moz-placeholder { 
		color: #999;
	}
	&:-ms-input-placeholder { 
		color: #999;
	}
	&:-moz-placeholder { 
		color: #999;
	}
}
select.form-control {
	-moz-appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    color: #999;
    option[value=""][disabled] {
 		display: none;
 	}
}
textarea.form-control {
	padding: 8px 0;
	//background: url('../images/textarea-bg.png') no-repeat right bottom 3px;
}

</style>
