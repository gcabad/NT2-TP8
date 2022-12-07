<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>TP4: Vue CLI - Router / Formularios </h1>
      <br>

      <Navbar />
      <router-view></router-view>

      <!-- <Binding />
      <Estructura />
      <Atributos /> -->

    </div>
  </div>
</template>

<script>
import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
