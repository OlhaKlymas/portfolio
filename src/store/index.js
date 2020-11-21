import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    projects: [],
    project:[]
  },
  mutations: {
    SET_LIST_TO_STATE: (state, list)=>{
      state.list = list
    },
    SET_PROJECTS_TO_STATE: (state, projects)=>{
      state.projects = projects
    },
    SET_PROJECT: (state, project)=>{
      state.project = project
    },
  },
  actions: {
    GET_LIST_FROM_API({commit}){
      return axios(`https://my-json-server.typicode.com/OlhaKlymas/portfolio/list`, {
        method: "GET"
      }).then((list)=>{
        commit("SET_LIST_TO_STATE", list.data);
        return list
      })
      .catch((error)=>{
        console.log(error)
        return error
      })
    },
    GET_PROJECTS_FROM_API({commit}){
      return axios(`https://my-json-server.typicode.com/OlhaKlymas/portfolio/projects`, {
        method: "GET"
      }).then((projects)=>{
        commit("SET_PROJECTS_TO_STATE", projects.data);
        return projects
      })
          .catch((error)=>{
            console.log(error)
            return error
          })
    },
    GET_PROJECT({commit}, project){
      commit('SET_PROJECT', project)
    },
    async fetchCurrency () {
      const key = process.env.VUE_APP_FIXER
      const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,UAH`)
      return await res.json()
    }
  },
  getters:{
    LIST(state){
      return state.list;
    },
    PROJECTS(state){
      return state.projects;
    },
    PROJECT(state){
      return state.project;
    }
  },
  modules: {
  }
})
