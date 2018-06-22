import { GET_MENU } from '@/vuex/types'

const getMenu = (state) => state.menu

export default {
  [GET_MENU]: getMenu
}
