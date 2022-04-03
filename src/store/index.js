import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import actions from './actions'

const modules = {}

export default new Vuex.Store({
    modules,
    state,
    actions,    
    mutations
})