import "popper.js/dist/popper.min"
import "bootstrap/dist/js/bootstrap.min"
import "bootstrap/dist/css/bootstrap.min.css"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Parse from 'parse'

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  't4BX4jOaJ9GtsGL117l6avxJaV74R401V2nu7iv1', // This is your Application ID
  'swEcbSQ6bdxPNYm8enqgOjJ0kB9uBxUAYwctZ8hE', // This is your Javascript key
  'sh2nHlzxQpGe3HnEhJ6GJ5FY04tDBAmYLCIpe0GU' // This is your Master key (never use it in the frontend)
);

Vue.config.productionTip = false

import VueCurrencyFilter from "vue-currency-filter"
Vue.use(VueCurrencyFilter, {
  symbol            : "$",
  thousandsSeparator: ".",
  symbolPosition    : "front"
})

import { Message } from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
