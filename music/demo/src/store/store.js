import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: false,
        name:"lisi"
      },
    mutations: {
        newarr(state,msg){
            state.name = msg
        }
    }
})