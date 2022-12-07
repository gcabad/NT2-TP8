import Vue from 'vue'

const miMixinGlobal = {
    methods: {
        getUsuarios() {
          this.$store.dispatch('getUsuarios')
        },
        postUsuario(usuario) {
            this.$store.dispatch('postUsuario', usuario)
        }
    },
    computed: {
        mostrarUsuarios() {
            return this.$store.state.usuarios
        },
        mostrarConsulta() {
            return this.$store.state.consulta
        }
    }    
}

Vue.mixin(miMixinGlobal)