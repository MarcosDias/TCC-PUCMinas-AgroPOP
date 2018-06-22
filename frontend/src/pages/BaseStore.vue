<template>
  <v-app>

    <pop-header />

    <pop-menu class="hidden-xs-only" />

    <router-view></router-view>

    <v-content>
      <v-footer height="auto" width="100%">
        <v-layout class="primary accent--text" row wrap justify-center>

          <v-btn color="white" flat>Início</v-btn>
          <v-btn color="white" flat>Sobre Nós</v-btn>
          <v-btn color="white" flat>Parceiros</v-btn>
          <v-btn color="white" flat>Blog</v-btn>
          <v-btn color="white" flat>Entre em contato</v-btn>

          <v-flex xs12 py-3 text-xs-center white--text>
            &copy;2018 — <strong>AgroPOP</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>

  </v-app>
</template>

<script>
import PopHeader from '../components/pop-header'
import PopMenu from '../components/pop-menu'

export default {
  name: 'BaseStore',
  components: {
    PopHeader, PopMenu
  }
}
</script>
