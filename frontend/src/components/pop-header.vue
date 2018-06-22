<template>
    <span>
      <v-toolbar v-if="!!user && user.isStaff" height="25" flat class="red darken-3 mx-auto">
        <v-layout justify-center wrap>
          <v-btn
            flat
            class="white--text"
            router
            :to="'backoffice'">Acesse o Backoffice AgroPOP!</v-btn>
        </v-layout>
      </v-toolbar>

      <v-navigation-drawer absolute temporary v-model="sideNav" >
        <v-list>

          <v-list-tile class="primary--background">
            <v-text-field flat solo-inverted ligth
              color="secondary"
              label="O que está procurando?"
              prepend-icon="search"/>
          </v-list-tile>

          <v-list-tile v-for="itemMenu in menu" :key="itemMenu.id">
            <v-list-tile-content class="secondary--text">{{ itemMenu.nome }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar flat height="64">
        <v-toolbar-side-icon
          class="hidden-sm-and-up"
          @click.stop="sideNav = !sideNav" />

        <v-btn
          class="title ml-3 mr-5"
          flat
          style="text-transform: none;"
          router
          :href="''">AgroPOP</v-btn>

        <v-text-field flat solo
          class="hidden-xs-only"
          color="accent"
          label="O que está procurando?"
          prepend-icon="search"/>

        <v-spacer class="hidden-sm-and-up"></v-spacer>

        <v-toolbar-items>
          <v-btn
            flat
            class="secondary--text"
            router
            v-if="!isLoggedIn"
            :to="'login'">Entrar</v-btn>

          <v-menu offset-y v-if="isLoggedIn">
            <v-btn flat class="secondary--text" slot="activator">{{ `Olá, ${user.name}!` }}</v-btn>

            <v-list>
              <v-list-tile>
                <v-list-tile-title>Minha conta</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>Meus pedidos</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title @click="signoutUser">Sair</v-list-tile-title>
              </v-list-tile>

            </v-list>
          </v-menu>

          <v-btn flat>
            <v-badge left>
              <span slot="badge">0</span>
              <v-icon large color="grey lighten-1">shopping_cart</v-icon>
            </v-badge>
          </v-btn>

        </v-toolbar-items>

      </v-toolbar>
    </span>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { GET_MENU } from '@/vuex/types'
import { IS_LOGGED_IN, GET_USER, SIGNOUT_USER } from '@/vuex/modules/auth/types'

export default {
  name: 'pop-header',
  data: () => ({
    sideNav: false
  }),
  computed: {
    ...mapGetters({
      isLoggedIn: `auth/${IS_LOGGED_IN}`,
      user: `auth/${GET_USER}`,
      menu: GET_MENU
    })
  },
  methods: {
    ...mapActions({ actionSignoutUser: `auth/${SIGNOUT_USER}` }),
    async signoutUser (event) {
      await this.actionSignoutUser()

      this.$router.push('/')
    }
  },
  created () {
    this.$store.dispatch(GET_MENU)
  }
}
</script>
<style lang="sass" scoped>

</style>
