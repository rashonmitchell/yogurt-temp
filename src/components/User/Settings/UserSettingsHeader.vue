<template>
    <b-row class="mb-3 profile-userpic">
      <!-- <h1><font-awesome-icon icon="user-circle"></font-awesome-icon> {{ user.displayName}}</h1> -->
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="text-center profile-userpic">
          <h2 class="text-left">
            <img v-bind:src="user.photoURL" class="avatar img-circle img-thumbnail" alt="avatar" />
            {{ user.displayName}}
          </h2>
          <!-- <div v-if="isProfileEditMode">
            <h6>Upload a different photo...</h6>
            <input type="file" class="text-center center-block well well-sm" @change="fileUploadChange" />
          </div> -->
        </div>
      </div>
    </b-row>
</template>

<script>
export default {
    name: "UserSettingsHeader",
    props: ["user"],
    data:() => ({
        isProfileEditMode: false,
    })
}
</script>

<style lang="scss">
.profile-userpic img {
  float: none;
  margin: 0 auto;
  margin-top: -5px;
  width: 15%;
  height: 50%;
  -webkit-border-radius: 50% !important;
  -moz-border-radius: 50% !important;
  border-radius: 50% !important;
}

.img-thumbnail {
  // padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}
</style>
