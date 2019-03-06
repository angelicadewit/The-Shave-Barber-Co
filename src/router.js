import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Team from './views/Team.vue'
import Services from './views/Services.vue'

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
        title: 'It Pays To Look Good.',
        headerClass: 'home'
      }
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
      meta: {
        title: 'Our Barbers',
        headerClass: 'barber'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
      meta: {
        title: 'Our Services',
        headerClass: 'services'
      }
    }
  ]
})
