import gqlClient from '@/graphql'
import gql from 'graphql-tag'

import {
  CREATE_USER,
  SIGNIN_USER,
  SIGNOUT_USER,
  MSG_ERROR_CREATE_USER,
  MSG_ERROR_LOGIN } from './types'

const createUser = async ({ commit }, variables) => {
  const resp = await gqlClient.mutate({
    mutation: gql`
      mutation($name: String!, $email: String!, $password: String!) {
        createUser(name: $name, email: $email, password: $password) {
          user {
            id
            email,
            name,
            isStaff,
            isSuperuser
          }
        }
      }
    `,
    variables
  }).catch(e => {
    commit(MSG_ERROR_CREATE_USER)
  })

  return resp
}

const signinUser = async ({ commit }, variables) => {
  const resp = await gqlClient.mutate({
    mutation: gql`
      mutation($email: String!, $password: String!) {
        tokenAuth(email: $email, password: $password) {
          token
          user {
            id
            email
            name
            isStaff
            isSuperuser
          }
        }
      }
    `,
    variables
  }).catch(e => {
    commit(MSG_ERROR_LOGIN)
  })

  localStorage.setItem('token', resp.data.tokenAuth.token)
  localStorage.setItem('user', JSON.stringify(resp.data.tokenAuth.user))

  commit(SIGNIN_USER, resp.data.tokenAuth)
}

const signoutUser = async ({ commit }) => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')

  commit(SIGNOUT_USER)
}

export default {
  [CREATE_USER]: createUser,
  [SIGNIN_USER]: signinUser,
  [SIGNOUT_USER]: signoutUser
}
