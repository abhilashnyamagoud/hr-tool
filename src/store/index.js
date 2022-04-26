import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects:[]
  },
  getters: {
  },
  mutations: {
    addProjects (state, data) {
      state.projects = data
    }
  },
  actions: {
    addProjects(context,data){
      context.commit('addProjects',data)
    }
  },
  modules: {
  }
})
