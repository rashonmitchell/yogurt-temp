<template>
  <div class="container mt-4">
    <div class="row justify-content-center mb-4">
      <div class="col-12 col-md-9 col-lg-7">
        <h1 class="font-weight-light text-center">Add to Yogurt</h1>

        <div class="card bg-light">
          <div class="card-body text-center">
            <form class="formgroup">
              <div class="input-group input-group-lg">
                <b-form-input
                  type="text"
                  class="form-control"
                  name="meetingName"
                  placeholder="Yogurt name"
                  aria-describedby="buttonAdd"
                  v-model="meetingName"
                  ref="meetingName"
                  required ></b-form-input>

                <div class="input-group-append">
                  <button
                    type="submit"
                    class="btn btn-sm btn-info"
                    id="buttonAdd"
                    @click.prevent="handleAdd"
                  >
                    +
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="justify-content-center">
      <h4 class="card-title m-0 text-center">Your Yogurts</h4>
      <!-- cards -->
      <b-card
        footer-class="text-right"
        footer-tag="footer"
        class="my-4"
        v-for="item in meetings"
        :key="item.id"
      >
        <!-- <template v-slot:header cols="12">
          <b-row >
            <b-col><h4 class="text-left">{{currentDate}}</h4></b-col>
            <b-col class="text-right pt-2"><font-awesome-icon icon="heart">
              <b-button>
              
              </b-button>
              </font-awesome-icon
              ></b-col>
          </b-row>
        </template> -->

        <b-card-body>
          <b-card-text>
            {{item.name}}
          </b-card-text>
        </b-card-body>

        <template v-slot:footer>
          <!-- <b-button-group> -->
            <button
              class="btn btn-sm btn-outline-secondary "
              title="Delete Meeting"
              @click="$emit('deleteMeeting', item.id)"
            >
              <font-awesome-icon icon="trash"></font-awesome-icon>
            </button>
            <router-link
              class="btn btn-sm btn-outline-secondary"
              title="Check In"
              :to="'/checkin/'+ user.uid + '/' + item.id"
            >
              <font-awesome-icon icon="link"></font-awesome-icon>
            </router-link>
            <router-link
              class="btn btn-sm btn-outline-secondary"
              title="Attendees"
              :to="'/attendees/'+ user.uid + '/' + item.id"
            >
              <font-awesome-icon icon="list-ul"></font-awesome-icon>
            </router-link>

          <!-- </b-button-group> -->
        </template>
      </b-card>
      <!-- cards end -->
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
export default {
  name: "dashboard",
  data: function () {
    return {
      meetingName: null
    }
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    handleAdd: function () {
      this.$emit("addYogurt", this.meetingName);
      this.meetingName = null;
      this.$refs.meetingName.focus();
    }
  },
  props: ["user", "meetings"]
}
</script>
<style lang="scss">
.form-control,
.input-group-lg > .form-control,
.input-group-lg > .input-group-append > .btn {
  //outline: 0;
  // border-width: 0 0 2px;
  // border-color: #e6e6e6;

  background-color: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid #e6e6e6;
  width: 100%;
  color: #42b983;
  &:focus,
  [type=text]:focus {
    border-color: #42b983;
	}
}

.input-group-lg > .input-group-append > .btn:hover,
.input-group-lg > .input-group-append > .btn:active {
  color: white;
  background: #42b983;
  &:focus,
  [type=text]:focus {
		border-color: #42b983;
	}
}
</style>