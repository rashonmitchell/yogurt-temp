import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin, LayoutPlugin } from "bootstrap-vue";
// import './custom.scss';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import {
  faCircle,
  faCog,
  faLink,
  faEnvelope,
  faLock,
  faUser,
  faUserCircle,
  faTrash,
  faListUl,
  faRandom,
  faReply,
  faUndo,
  faStar,
  faSignOutAlt,
  faUserEdit,
  faPaperPlane,
  faCalendarDay,
  faCalendarTimes,
  faBell,
  faBookmark,
  faHeart,
  faShareAlt,
  faSuitcase,
  faInfoCircle,
  faAddressCard
} from '@fortawesome/free-solid-svg-icons';

import Home from '../views/Home.vue';
// import Settings from "../views/Settings.vue";
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import UserProfilePassword from '@/components/User/Profile/UserProfilePassword';
import UserProfileEmail from '@/components/User/Profile/UserProfileEmail';
import UserProfileNotfication from '@/components/User/Profile/UserProfileNotfication';
import UserDailyYogurt from '@/components/User/Profile/UserDailyYogurt';
Vue.use(LayoutPlugin)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

library.add( faFacebook, faGoogle, faSuitcase, faAddressCard, faInfoCircle, faCircle, faCog, faShareAlt, faLink, faEnvelope, faLock, faUser, faBookmark, faUserCircle, faHeart, faCalendarDay, faBell, faPaperPlane, faTrash, faListUl, faRandom, faReply, faUndo, faStar, faSignOutAlt, faUserEdit)

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../components/User/Settings/UserSettings.vue")
  },
  {
    path: '/settings/password',
    component: UserProfilePassword
  },
  {
    path: "/settings/email",
    component: UserProfileEmail
  },
  {
    path: '/settings/notfication',
    component: UserProfileNotfication
  },
  {
    path: '/settings/daily-yogurt',
    component: UserDailyYogurt
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Dashboard.vue")
  },
  {
    path: "/bookmarks",
    name: "Bookmarks",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Bookmarks.vue")
  },
  {
    path: "/login",
    name: "Sign In",
    component: Login
  },
  {
    path: "/register",
    name: "Sign Up",
    component: Register
  },
  {
    path: "/checkin/:userID/:meetingID",
    name: "CheckIn",
    //component: CheckIn
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
