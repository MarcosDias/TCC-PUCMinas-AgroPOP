<template>
  <v-toolbar color="primary" height="64">
      <v-toolbar-items class="mx-auto" grid-list-md text-xs-center>

        <v-container fluid>
          <v-layout row wrap>
            <v-menu v-for="itemMenu in menu" :key="itemMenu.id">
              <v-btn class="accent--text" slot="activator" flat>
                {{ itemMenu.nome }}
              </v-btn>

              <v-list v-if="!!itemMenu.subcategorias.length" class="secondary">
                <v-list-tile v-for="subCat in itemMenu.subcategorias" :key="subCat.id">
                  <v-list-tile-title>{{ subCat.nome }}</v-list-tile-title>
                </v-list-tile>
              </v-list>

            </v-menu>
          </v-layout>
        </v-container>

      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'
import { GET_MENU } from '@/vuex/types'

export default {
  name: 'pop-menu',
  computed: {
    ...mapGetters({ menu: GET_MENU })
  },
  created () {
    this.$store.dispatch(GET_MENU)
  }
}
</script>

<style lang="sass" scoped>

</style>
