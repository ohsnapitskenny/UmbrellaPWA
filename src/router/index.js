import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
