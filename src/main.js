import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import VueTheMask from 'vue-the-mask'
// import VeeValidate from 'vee-validate'
// import Meta from 'vue-meta'

Vue.config.productionTip = false
// Vue.use(VueTheMask)
// Vue.use(VeeValidate)
// Vue.use(Meta)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
