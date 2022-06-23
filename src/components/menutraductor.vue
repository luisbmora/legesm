<template>
    <v-container class="grey lighten-5">
    <v-row no-gutters   justify="center">
      <v-col
        sm="6"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <a href="">
        <v-img
            :src="require('../assets/escaner.png')"
            class="my-3"
            contain
            height="200"
        /></a>
        </v-card>
      </v-col>
      <v-col
        cols="6"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <a href="">
        <v-img
          :src="require('../assets/texto.png')"
          class="my-3"
          contain
          height="200"
        /></a>
        </v-card>
      </v-col>
    </v-row>

    <br><br><br><br><br><br><br>
    <center>
    <v-bottom-navigation 
    :value="value"
    width="585"
    color="teal"
    grow
  >

  <a href="./secciones">
    <v-btn>
      <v-icon>mdi-home</v-icon>
    </v-btn>
  </a>

  <a href="./progresoleccion">
    <v-btn>
      <v-icon>mdi-lightbulb-on-10</v-icon>
    </v-btn>
  </a>

  <a href="">
    <v-btn>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </a>
  </v-bottom-navigation>
  </center>
  </v-container>
</template>

<script>
  export default {
    data: () => ({ value: 1 }),
  }
</script>