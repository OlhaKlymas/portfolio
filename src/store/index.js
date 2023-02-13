import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoaded: false,
    isError: false,
    about: [],
    knowledgeList: [],
    knowledges: {
      getFilterData: {
        "All": function () {
          return true;
        },
        "Main skills": function (el) {
          return el.category === "lang";
        },
        "Compiler": function (el) {
          return el.category === "compiler";
        },
        "Preprocessors CSS": function (el) {
          return el.category === "preprocessor";
        },
        "Task Managers": function (el) {
          return el.category === "taskManagers";
        },
        "Framework JS": function (el) {
          return el.category === "framework";
        },
        "CRM": function (el) {
          return el.category === "crm";
        },
        "Version Control System": function (el) {
          return el.category === "control";
        },
        "Database": function (el) {
          return el.category === "base";
        },
        "IDE": function (el) {
          return el.category === "ide";
        },
        "Repository hosting service": function (el) {
          return el.category === "hosting";
        },
        "Interface design software": function (el) {
          return el.category === "design";
        },
        "Addition": function (el) {
          return el.category === "plugin";
        }
      }
    },
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
    SET_ABOUT: (state, about) => {
      state.about = about
    },
    SET_KNOWLEDGE_LIST_TO_STATE: (state, knowledgeList)=>{
      state.knowledgeList = knowledgeList
    },
    SET_PROJECTS_TO_STATE: (state, projects)=>{
      state.projects = projects
    },
    SET_PROJECT_TO_STATE: (state, project)=>{
      state.project = project
    },
    SET_CURRENCY_TO_STATE: (state, currency)=>{
      state.currency = currency
    },
  },
  actions: {
    GET_ABOUT_FROM_API({commit}){
      commit("SET_IS_LOADED", true)
      return axios(`https://my-json-server.typicode.com/OlhaKlymas/portfolio/about`, {
        method: "GET"
      }).then((about)=>{
        commit("SET_ABOUT", about.data);
        commit("SET_IS_LOADED", false)
        commit("SET_IS_ERROR", false)
        return about
      }).catch((error)=>{
        commit("SET_IS_LOADED", false)
        commit("SET_IS_ERROR", true)
        console.log(error)
        return error
      })
    },
    GET_KNOWLEDGE_LIST_FROM_API({commit}){
      commit("SET_IS_LOADED", true)
      return axios(`https://my-json-server.typicode.com/OlhaKlymas/portfolio/list`, {
        method: "GET"
      }).then((knowledgeList)=>{
        commit("SET_KNOWLEDGE_LIST_TO_STATE", knowledgeList.data);
        commit("SET_IS_LOADED", false)
        commit("SET_IS_ERROR", false)
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
        commit("SET_IS_ERROR", false)
        return projects
      }).catch((error)=>{
        commit("SET_IS_LOADED", false)
        commit("SET_IS_ERROR", true)
        console.log(error)
        return error
      })
    },
    GET_PROJECT_FROM_API({commit}, id){
      commit("SET_IS_LOADED", true)
      return axios(`https://my-json-server.typicode.com/OlhaKlymas/portfolio/projects/${id}`, {
        method: "GET"
      }).then((project)=>{
        commit("SET_PROJECT_TO_STATE", project.data);
        commit("SET_IS_LOADED", false)
        commit("SET_IS_ERROR", false)
        return project
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
      return axios(`https://api.apilayer.com/fixer/latest?base=CAD&symbols=USD,EUR,CAD&apikey=${key}`, {
        method: "GET"
      }).then((currency)=>{
        commit("SET_CURRENCY_TO_STATE", currency.data);
        commit("SET_IS_LOADED", false)
        commit("SET_IS_ERROR", false)
        return currency
      }).catch((error)=>{
        commit("SET_IS_LOADED", false)
        commit("SET_IS_ERROR", true)
        console.log(error)
        return error
      })
    }
  },
  getters:{
    IS_LOADED(state){
      return state.isLoaded;
    },
    IS_ERROR(state){
      return state.isError;
    },
    ABOUT(state){
      return state.about;
    },
    KNOWLEDGE_LIST(state){
      return state.knowledgeList;
    },
    KNOWLEDGES(state){
      return state.knowledges;
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
