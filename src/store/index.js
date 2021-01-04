import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoaded: false,
    isError: false,
    knowledgeList: [],
    projects: [],
    project: [],
    currency: {}
  },
  mutations: {
    SET_IS_LOADED: (state, isLoaded) => {
      state.isLoaded = isLoaded
    },
    SET_IS_ERROR: (state, isError) => {
      state.isError = isError
    },
    SET_KNOWLEDGE_LIST_TO_STATE: (state, knowledgeList)=>{
      state.knowledgeList = knowledgeList
    },
    SET_PROJECTS_TO_STATE: (state, projects)=>{
      state.projects = projects
    },
    SET_PROJECT: (state, project)=>{
      state.project = project
    },
    SET_CURRENCY_TO_STATE: (state, currency)=>{
      state.currency = currency
    },
  },
  actions: {
    GET_KNOWLEDGE_LIST_FROM_API({commit}){
      commit("SET_IS_LOADED", true)
      return axios(`https://my-json-server.typicode.com/OlhaKlymas/portfolio/list`, {
        method: "GET"
      }).then((knowledgeList)=>{
        commit("SET_KNOWLEDGE_LIST_TO_STATE", knowledgeList.data);
        commit("SET_IS_LOADED", false)
        return knowledgeList
      }).catch((error)=>{
        commit("SET_IS_LOADED", false)
        commit("SET_IS_ERROR", true)
        console.log(error)
        return error
      })
    },
    GET_PROJECTS_FROM_API({commit}){
      commit("SET_IS_LOADED", true)
      return axios(`https://my-json-server.typicode.com/OlhaKlymas/portfolio/projects`, {
        method: "GET"
      }).then((projects)=>{
        commit("SET_PROJECTS_TO_STATE", projects.data);
        commit("SET_IS_LOADED", false)
        return projects
      }).catch((error)=>{
        commit("SET_IS_LOADED", false)
        commit("SET_IS_ERROR", true)
        console.log(error)
        return error
      })
    },
    GET_CURRENCY_FROM_API({commit}){
      commit("SET_IS_LOADED", true)
      const key = process.env.VUE_APP_FIXER
      return axios(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,UAH`, {
        method: "GET"
      }).then((currency)=>{
        commit("SET_CURRENCY_TO_STATE", currency.data);
        commit("SET_IS_LOADED", false)
        return currency
      }).catch((error)=>{
        commit("SET_IS_LOADED", false)
        commit("SET_IS_ERROR", true)
        console.log(error)
        return error
      })
    },
    GET_PROJECT({commit}, project){
      commit('SET_PROJECT', project)
    }
  },
  getters:{
    IS_LOADED(state){
      return state.isLoaded;
    },
    IS_ERROR(state){
      return state.isError;
    },
    KNOWLEDGE_LIST(state){
      return state.knowledgeList;
    },
    PROJECTS(state){
      return state.projects;
    },
    PROJECT(state){
      return state.project;
    },
    CURRENCY(state){
      return state.currency;
    }
  }
})
