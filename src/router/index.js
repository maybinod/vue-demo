import Vue from 'vue'
import VueRouter from 'vue-router'

import auth from './auth'
import user from './user'

Vue.use(VueRouter)

const routes = [].concat(auth, user)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
