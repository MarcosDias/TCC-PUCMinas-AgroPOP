<template>
  <v-container fluid>
    <v-layout wrap>

      <v-flex xl-6 lg-6 md-6 sm-6 xs-12 mb-3 mr-3>
        <pop-card-signin-auth />
      </v-flex>

      <v-flex xl-6 lg-6 md-6 sm-6 xs-12 mr-3>
        <pop-card-create-auth />
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

import { SIGNOUT_USER } from '@/vuex/modules/auth/types'

import PopCardCreateAuth from '../../components/pop-card-create-auth'
import PopCardSigninAuth from '../../components/pop-card-signin-auth'

export default {
  name: 'auth',
  components: { PopCardCreateAuth, PopCardSigninAuth },
  methods: {
    ...mapActions({
      signoutUser: `auth/${SIGNOUT_USER}`
    }),
    logoff (event) {
      this.signoutUser()

      this.$router.push('/')
    }
  }
}
</script>
