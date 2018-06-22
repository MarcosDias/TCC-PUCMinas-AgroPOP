import gqlClient from '@/graphql'
import gql from 'graphql-tag'

import * as types from './types'

const getMenu = async ({ commit }) => {
  const resp = await gqlClient.query({
    query: gql`
      {
        allCategorias {
          id
          nome
          ordem
          subcategorias {
            id
            nome
            subcategorias {
              id
              nome
            }
          }
        }
      }
    `
  })

  commit(types.GET_MENU, resp.data.allCategorias)
}

export default {
  [types.GET_MENU]: getMenu
}
