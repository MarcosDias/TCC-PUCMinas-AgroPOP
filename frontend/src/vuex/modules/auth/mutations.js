import {
  SIGNIN_USER,
  SIGNOUT_USER,
  MSG_ERROR_CREATE_USER,
  MSG_ERROR_LOGIN
} from './types'

const msgErrorCreateUser = (state) => {
  state.msgErrorCreateUser = 'Erro, ocorreu um problema no cadastramento, tente novamente!'
}

const msgErrorLogin = (state) => {
  state.msgErrorLogin = 'Erro, utilize uma credencial válida!'
}

const signinUser = (state, { token, user }) => {
  state.isLoggedIn = true
  state.user = user
  state.token = token
}

const signoutUser = (state) => {
  state.isLoggedIn = false
  state.user = null
  state.token = null
}

export default {
  [MSG_ERROR_CREATE_USER]: msgErrorCreateUser,
  [MSG_ERROR_LOGIN]: msgErrorLogin,
  [SIGNIN_USER]: signinUser,
  [SIGNOUT_USER]: signoutUser
}
