<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form" id="form" name="form" v-on:submit.prevent="procesar();">
        <v-card-text>
            <center>
              <h1>Registrarse</h1>
              <br>
          </center>
          <v-text-field
            ref="nombre"
            value=""
            v-model="nombre"
            :rules="[rules.required]"
            :error-messages="errorMessages"
            label="Nombre Usuario"
            persistent-hint
            outlined
          ></v-text-field>
          <v-text-field
            persistent-hint
            outlined
            ref="email"
            v-model="email"
            value=""
            :rules="[
              () => /.+@.+\..+/.test(email) || 'E-mail debe de ser valido', 
              rules.required,
            ]"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            persistent-hint
            outlined
            v-model="contraseña"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="contraseña"
            value=""
            label="Contraseña"
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            persistent-hint
            outlined
            v-model="verificarC"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            name="verificarC"
            label="Confirmar Contraseña"
            value=""
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

import axios from "axios"

  export default {
    data () {
      return {
        //Declarar arreglo de documento Json
        usuario: [],
        errorMessages: '',
        //Iniacilizar variables de formulario
        nombre: null,
        email: null,
        contraseña: null,
        verificarC: null,
        //Variables de visualizacion de contraseñas
        show1: false,
        show2: false,
        //Validaciones de formulario
        rules: {
          required: value => !!value || 'Campo Necesario',
          min: v => v.length >= 8 || 'Min 8 caracteres',
          emailVerificar: ()=>  (`The email and password you entered don't match`),
        },
      }
    },

    computed: {
      // ESTO NO SE SI VA
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
      //ESTE METODO ME LO PASO TOÑITO PERO NO SALE
      async submit(){
        const res = await axios.post(`http://localhost:3000/usuarios`,{
          nombre: this.nombre,
          email: this.email,
          contraseña: this.contraseña,
          verificarC: this.verificarC,
        })
        this.usuario = [...this.usuario,res.data];
        this.nombre = "";
        this.email= "";
        this.contraseña= "";
        this.verificarC= "";
      }
    },
  }
</script>