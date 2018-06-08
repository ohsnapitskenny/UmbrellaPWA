import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Map from '@/components/Map'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/map', name: 'map', component: Map },
    { path: '/demo', name: 'demo', component: Demo }
  ]
})
