import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Login from '../views/User/Login.vue'
import Register from '../views/User/Register.vue'
import Product from '../views/Product.vue'
import Sell from '../views/Sell.vue'
import Store from '../store/index.js'
import ProductList from '../components/Products/ProductList.vue'
import ProductListUser from '../components/Products/ProductListUser.vue'
import Sales from '../components/Products/Sales.vue'
import User from '../views/User/User.vue'
import ContactUs from '../views/ContactUs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/sell',
    name: 'Sell',
    component: Sell,
    meta: {authRequired: true}
  },
  {
    path: '/product-list/:item',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/contact-us',
    name: 'ContacUs',
    component: ContactUs
  },
  {
    path: '/product-list-user',
    name: 'ProductListUser',
    component: ProductListUser
  },
  {
    path: '/sales',
    name: 'Sales',
    component: Sales
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const user = Store.state.user
  const authRequired = to.matched.some(record => record.meta.authRequired)
  if (!user && authRequired) {
    return next("/Login")
  } else {
    next()
  }
})

export default router
