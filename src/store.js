import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        url: 'https://63681115d1d09a8fa6202fd8.mockapi.io/Usuarios',
        usuarios: [],
        consulta: false
    },
    actions : {
        async getUsuarios({commit}) {
            try {
                let response = await axios.get(this.state.url)
                commit('obtenerUsuarios', response.data)    
              }
              catch(error) {
                 console.error('ERROR en getUsuarios con Axios', error)
                 commit('obtenerUsuarios', [])
              }
              finally{
                commit('setearConsulta', true)
              }    
        },
        async postUsuario({commit}, usuario) {
            let { data : user } = await axios.post(this.state.url, usuario, { 'content-type' : 'application/json' })
            commit('agregarUsuario', user)
        }
    },
    mutations : {
        obtenerUsuarios(state, usuarios){
            state.usuarios = usuarios
        },
        setearConsulta(state, consulta) {
            state.consulta = consulta
        },
        agregarUsuario(state, usuario) {
            state.usuarios.push(usuario)
        }
    }
})
