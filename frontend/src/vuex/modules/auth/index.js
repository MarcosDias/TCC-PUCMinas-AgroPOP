import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const namespaced = true

function getLocalStorage (key) {
  let value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  user: getLocalStorage('user'),
  msgErrorLogin: '',
  msgErrorCreateUser: ''
}

export default {
  actions,
  getters,
  mutations,
  namespaced,
  state
}
