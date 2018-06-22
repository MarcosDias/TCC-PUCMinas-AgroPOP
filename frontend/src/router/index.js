import Vue from 'vue'
import Router from 'vue-router'
import { createRoute } from '@/utils/router'

// import { GET_USER } from '@/vuex/modules/auth/getters'

Vue.use(Router)

const home = createRoute({
  file: 'store/Home',
  name: 'Home',
  path: ''
})

const auth = createRoute({
  file: 'store/Auth',
  name: 'Auth',
  path: 'login'
})

const baseStore = createRoute(
  {
    file: 'BaseStore',
    path: '/'
  },
  {
    children: [ home, auth ]
  }
)

const baseBackOffice = createRoute(
  {
    file: 'BaseBackOffice',
    path: '/backoffice/'
  },
  {
    children: [ ],
    meta: { requiresLogin: true }
  }
)

export default new Router({
  mode: 'hash',
  routes: [
    baseStore,
    {
      path: '*',
      redirect: '/'
    },
    baseBackOffice,
    {
      path: '*',
      redirect: '/backoffice'
    }
  ]
})
