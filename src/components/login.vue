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
              <h1>Bienvenido</h1>
              <br>
          </center>
          <v-text-field
            solo
            name="nombre"
            v-model="editedItem.nombre"
            :rules="[() => !!editedItem.nombre || 'Campo necesario']"
            :error-messages="errorMessages"
            label="Usuario"
            required
          ></v-text-field>
          <v-text-field
            solo
            name="password"
            v-model="editedItem.password"
            :rules="rulesPass"
            :type="show1 ? 'text' : 'password'"
            label="Contraseña"
            required
          ></v-text-field>
        <h4>Recuperar Contraseña</h4>  
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn
            class="mr-4"
            color="primary"
            text
            @click="submit"
          >
            INGRESAR
          </v-btn>
          <h4 aling="left">Registrarme</h4>
        </v-card-actions>
        <v-divider class="mt-12"></v-divider>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Swal from "sweetalert2";

  export default {
    data: () => ({
      errorMessages: '',
      editedItem: {
        nombre: null,
        email: null,
        password: null,
        verificarC: null,
        },
        show1: false,
        rulesPass: [
        (value) => !!value || "Campo Necesario",
        (v) => v.length > 7 || "Min 8 caracteres",
      ],
     
      
    }),

    computed: {
      form () {
        return {
          nombre: this.nombre,
          email: this.email,
          password: this.password,
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