import "popper.js/dist/popper.min"
import "bootstrap/dist/js/bootstrap.min"
import "bootstrap/dist/css/bootstrap.min.css"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VueCurrencyFilter from "vue-currency-filter"
Vue.use(VueCurrencyFilter, {
  symbol            : "$",
  thousandsSeparator: ".",
  symbolPosition    : "front"
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
