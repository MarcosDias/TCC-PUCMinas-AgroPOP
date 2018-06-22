// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'mdi/css/materialdesignicons.min.css'

import store from './vuex'

Vue.use(Vuetify, {
  theme: {
    primary: '#558B2F',
    secondary: '#827717',
    accent: '#e6e600',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
})

router.beforeEach((to, from, next) => {
  const lStore = store
  if (
    to.matched.some(record => record.meta.requiresLogin) &&
    !(lStore.state.auth.isLoggedIn && !!lStore.state.auth.user && lStore.state.auth.user.isStaff)
  ) {
    next('/')
  } else {
    next()
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
