import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Team from './views/Team.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'home title',
        headerClass: 'big'
      }
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
      meta: {
        title: 'team title',
        headerClass: 'small'
      }
    },
    // {
    //   path: '/services',
    //   name: 'services',
    //   component: Services
    // }
  ]
})
