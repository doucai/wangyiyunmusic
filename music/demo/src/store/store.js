import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: false
      },
    mutations: {
        login(state,user){
            state.user=user
        },
        loginout(state,user){
            state.user = false
        }
    }
})