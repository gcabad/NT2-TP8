<template>

  <section class="src-componentes-home">
    <br>

    <h1>Consigna</h1>
    <div>
      <h4>
        Realizar un desarrollo web front-end empleando Vue CLI 2 que contenga las 
        siguientes vistas manejadas por un router:
        <br>
        <br>
        1) Un formulario basado en vue-form que contenga 3 campos: nombre, edad y 
        mail. Este debe tener validaciones mediante carteles de: campos requeridos, 
        nombre entre 3 y 15 caracteres, edad entre 18 y 120 años e email válido. Los datos
        deben ser enviados a un recurso creado en mockapi.io
        <br>
        <br>
        2) Realizar un componente que muestre los usuarios agregados a mockapi.io. En 
        el caso de no haber ninguno, represente un cartel tipo alert avisando que no hay 
        usuarios disponibles.
        <br>
        <br>
        Para la comunicación con mockapi.io utilizar axios con ambas sintaxis: then catch
        y async await.
        <br>
        Incorporar bootstrap para manejar los estilos del sitio
      </h4>     
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-home',
    props: [],
    mounted () {

    },
    data () {
      return {

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
