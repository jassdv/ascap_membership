import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      publisherCompanyType: [],
      chosenPublisherCompanyType: "",
      chosenMembership: "",

  },
  mutations: {
    publisherCompanyType(state,payload) {
          state.publisherCompanyType = payload
    },
    chosenPublisherCompanyType(state,payload){
      state.chosenPublisherCompanyType = payload
    },
    chosenMembership(state,payload){
      state.chosenMembership = payload
    }
  },
  actions:{
    publisherCompanyType({commit},payload){
      commit('publisherCompanyType',payload)
    },
    chosenPublisherCompanyType({commit},payload){
      commit('chosenPublisherCompanyType',payload)
    },
    chosenMembership({commit},payload){
      commit('chosenMembership',payload)
    }
  },
  getters: {
      publisherCompanyType(state) {
          return state.publisherCompanyType;
      },
      chosenPublisherCompanyType(state){
        return state.chosenPublisherCompanyType
      },
      chosenMembership(state){
        return state.chosenMembership
      }
  }
});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
