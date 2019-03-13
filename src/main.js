import Vue from 'vue'
import App from './App.vue'
import router from './router'
import tilt from './vanilla-tilt.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
