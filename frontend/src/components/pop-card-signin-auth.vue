<template>
  <v-card class="elevation-6">
    <form @submit.prevent="login">
      <v-toolbar dark color="secondary">
        <v-toolbar-title>Tenho cadastro</v-toolbar-title>
      </v-toolbar>
      <v-card-text>

          <span v-if="!!mgsErrorLogin" style="color:red">
            {{mgsErrorLogin}}
          </span>

          <v-text-field
            id="login-email"
            name="email"
            label="E-mail"
            prepend-icon="person"
            type="text"
            :rules="emailRules"
            v-model.trim="email"
            ></v-text-field>
          <v-text-field
            id="login-password"
            name="password"
            label="Senha"
            prepend-icon="lock"
            :append-icon="passwordVisibility ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (passwordVisibility = !passwordVisibility)"
            :rules="passwordRules"
            :type="passwordVisibility? 'text' : 'password'"
            v-model.trim="password"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary" type="submit">CONTINUAR!</v-btn>
      </v-card-actions>
      </form>
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { SIGNIN_USER, MSG_ERROR_LOGIN } from '@/vuex/modules/auth/types'

export default {
  name: 'pop-card-create-auth',
  data: () => ({
    valid: true,

    email: '',
    emailRules: [
      v => !!v || 'E-mail é requerido!',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail precisa ser válido!'
    ],

    password: '',
    passwordRules: [v => !!v || 'A senha é requerido!'],
    passwordVisibility: false
  }),
  computed: {
    ...mapGetters({ mgsErrorLogin: `auth/${MSG_ERROR_LOGIN}` })
  },
  methods: {
    ...mapActions({ signinUser: `auth/${SIGNIN_USER}` }),
    async login (event) {
      const { email, password } = this

      await this.signinUser({
        email, password
      })

      this.$router.push('/')
    }
  }
}
</script>
