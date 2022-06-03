<template>
  <v-container class="grey lighten-5">

  <h2> Hola, Mora </h2>

  <br><br>

    <v-toolbar dense>

      <v-toolbar-title> Ingresar </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <br><br><br>

  <label> Leccion 1 </label>
  <v-carousel
    height="300"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

  <br><br><br><br>

  <label> Leccion 2 </label>
  <v-carousel
    height="300"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

  <br><br><br><br>
  <label> Leccion 3 </label>
  <v-carousel
    height="300"

  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

  <br><br><br><br>
  <label> Leccion 4 </label>
  <v-carousel
    height="400"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

  <br><br><br><br><br>
  <center>
    <v-bottom-navigation 
    :value="value"
    width="900"
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
    data () {
      return {
        items: [
          {
            src: require("../assets/doble.png")
          },
          {
            src: require("../assets/otros.png")
          },
          {
            src: require("../assets/muchos.png")
          },
          {
            src: require("../assets/cuantos.png")
          },
        ],
      }
    },
  }
</script>