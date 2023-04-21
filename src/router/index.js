import Vue from 'vue'
import VueRouter from 'vue-router'
import UIKitView from '../views/UIKitView.vue'
import MainView from '../views/MainView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/ui-kit',
    name: 'ui-kit',
    component: UIKitView
  }
]

const router = new VueRouter({
  routes
})

export default router
