<template>
  <v-card class="elevation-6">
    <form @submit.prevent="actionAuth">
      <v-toolbar dark color="secondary">
        <v-toolbar-title>Cadastrar</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
          <v-text-field
            id="name"
            name="name"
            label="Nome"
            prepend-icon="face"
            type="text"
            :rules="nameRules"
            v-model.trim="name"
            ></v-text-field>
          <v-text-field
            id="email"
            name="email"
            label="E-mail"
            prepend-icon="person"
            type="text"
            :rules="emailRules"
            v-model.trim="email"
            ></v-text-field>
          <v-text-field
            id="password"
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
          color="primary" type="submit">CRIAR!</v-btn>
      </v-card-actions>
      </form>
  </v-card>
</template>
<script>
import { mapActions } from 'vuex'
import { CREATE_USER } from '@/vuex/modules/auth/types'

export default {
  name: 'pop-card-create-auth',
  data: () => ({
    valid: true,

    name: '',
    nameRules: [v => !!v || 'O nome é requerido!'],

    email: '',
    emailRules: [
      v => !!v || 'E-mail é requerido!',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail precisa ser válido!'
    ],

    password: '',
    passwordRules: [v => !!v || 'A senha é requerido!'],
    passwordVisibility: false
  }),
  methods: {
    ...mapActions({ createUser: `auth/${CREATE_USER}` }),
    async actionAuth (event) {
      const { name, email, password } = this

      await this.createUser({
        name, email, password
      })

      this.$router.push('/')
    }
  }
}
</script>
