<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-text>
            <center>
              <h1>Registrarse</h1>
              <br>
          </center>
          <v-text-field
            solo
            ref="nombre"
            v-model="nombre"
            :rules="[() => !!nombre || 'Campo necesario']"
            :error-messages="errorMessages"
            label="Nombre Usuario"
            required
          ></v-text-field>
          <v-text-field
            solo
            ref="email"
            v-model="email"
            :rules="[
              () => !!email || 'Campo necesario',
              () => /.+@.+\..+/.test(email) || 'E-mail debe de ser valido',
            ]"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            solo
            ref="contraseña"
            v-model="contraseña"
            :rules="[() => !!contraseña || 'Campo necesario']"
            label="Contraseña"
            required
          ></v-text-field>
          <v-text-field
            solo
            ref="verificarC"
            v-model="verificarC"
            :rules="[() => !!verificarC || 'Campo necesario']"
            label="Confirmar Contraseña"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn
            class="mr-4"
            color="primary"
            text
            @click="submit"
          >
            REGISTRARME
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    data: () => ({
      errorMessages: '',
      nombre: null,
      email: null,
      contraseña: null,
      verificarC: null,
    }),

    computed: {
      form () {
        return {
          nombre: this.nombre,
          email: this.email,
          contraseña: this.contraseña,
          verificarC: this.verificarC,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    },
  }
</script>