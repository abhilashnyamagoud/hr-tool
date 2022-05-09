import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects:[],
    employees:[]
  },
  getters: {
    projects:state => {
      return state.projects
    },
    empLength:(state)=>{
      return state.employees.length
    }
  },
  mutations: {
    addProjects (state, data) {
      state.projects = data
    },
    addEmp(state,data){
      state.employees=data
    }
  },
  actions: {
    addProjects(context,data){
      context.commit('addProjects',data)
    },
    addEmp({commit},data){
      axios.get('http://localhost:3088/api/employes')
      .then((res)=>{
          const result=res.data
          // console.log("data",result)
          commit('addEmp',result)
      })
      .catch((err)=>{
          alert(err.message)
      })
    }
  },
  modules: {
  }
})
