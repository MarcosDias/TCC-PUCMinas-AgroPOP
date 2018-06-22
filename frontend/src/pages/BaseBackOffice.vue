<template>
  <v-app>
    <v-navigation-drawer
      app
      clipped
      fixed
      v-model="drawer">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="secondary">home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="secondary--text">Módulo Administrativo</v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="secondary">local_grocery_store</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="secondary--text">Módulo de Vendas</v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="secondary">archive</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="secondary--text">Módulo Estoque</v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="secondary">local_shipping</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="secondary--text">Módulo Logistica</v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="secondary">local_offer</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="secondary--text">Módulo Propagandas e Promoções</v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="secondary">chrome_reader_mode</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="secondary--text">Módulo de Relatórios</v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      color="primary darken-3"
      dark
      clipped-left
      fixed>
      <v-toolbar-title
        class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span>AgroPOP</span>
      </v-toolbar-title>
      <div class="d-flex align-center" style="margin-left: auto">

        <v-menu bottom left>
          <v-btn slot="activator" icon dark>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-btn flat router :to="'/'">
                Voltar parar Loja!
              </v-btn>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>

      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        Telas do BackOffice
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import { GET_USER } from '@/vuex/modules/auth/types'

export default {
  data: () => ({
    drawer: null
  }),
  computed: {
    ...mapGetters({
      user: `auth/${GET_USER}`
    })
  },
  methods: {
    async signoutUser (event) {
      await this.actionSignoutUser()

      this.$router.push('/')
    }
  }
}
</script>
