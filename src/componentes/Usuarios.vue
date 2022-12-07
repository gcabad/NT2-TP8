<template>

  <section class="src-componentes-usuarios">
    <div class="jumbotron">
      <h2>Usuarios</h2>
      <hr>
      <hr>
      <br>

      <!-- <pre>{{ posts }}</pre> -->
      <!-- <pre>{{ usuarios }}</pre> -->

      <button class="btn btn-success mr-2 mb-3" @click="getUsuarios()">GET</button>
      

      <div v-if="mostrarUsuarios.length">
        <div class="table-responsive">
            <table class="table table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Email</th>
                </tr>
                <tr v-for="(usuario, index) in mostrarUsuarios" :key="index">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nombre }}</td>
                    <td>{{ usuario.edad }}</td>
                    <td>{{ usuario.email }}</td>
                </tr>
            </table>
        </div>
        <br>
    </div>
    <h3 v-if="mostrarUsuarios.length == 0 && mostrarConsulta" class="alert alert-warning">
        No se encontraron usuarios.
    </h3>


    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-usuarios',
    props: [],
    mounted () {

    },
    data () {
      return {
        consulta: false,
      }
    },
    methods: {
    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>
