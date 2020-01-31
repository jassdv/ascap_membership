import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      publisherCompanyType: [],
      chosenPublisherCompanyType: "",
      chosenMembership: "",
      membershipError: false,
      publisherError: false

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
    },
    membershipError(state,payload){
      state.membershipError = payload
    },
    publisherError(state,payload){
      state.publisherError = payload
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
    },
    membershipError({commit},payload){
      commit('membershipError',payload)
    },
    publisherError({commit},payload){
      commit('publisherError',payload)
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
      },
      membershipError(state) {
        return state.membershipError
      },
      publisherError(state) {
        return state.publisherError
      }
  }
});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
