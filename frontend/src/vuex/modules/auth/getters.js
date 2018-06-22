import {
  IS_LOGGED_IN,
  GET_USER,
  MSG_ERROR_LOGIN
} from '@/vuex/modules/auth/types'

const isLoggedIn = (state) => state.isLoggedIn

const getUser = (state) => state.user

const getMsgErrorLogin = (state) => state.msgErrorLogin

export default {
  [IS_LOGGED_IN]: isLoggedIn,
  [GET_USER]: getUser,
  [MSG_ERROR_LOGIN]: getMsgErrorLogin
}
