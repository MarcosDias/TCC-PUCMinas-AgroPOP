import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

// Modules
import auth from './modules/auth'

Vue.use(Vuex)

const modules = { auth }

const state = {
  menu: []
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules
})
