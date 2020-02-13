import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      publisherCompanyType: [],         //a list of publishe company types. in real app should be saved in db
      chosenPublisherCompanyType: "",   //the chosen publisher company type
      chosenMembership: "",             //the chosen membership type
      publisherError: false             //indicates error- when user hit "continue" without choosing publisher company type

  },
  mutations: {  //a mutation for each store attribute
    publisherCompanyType(state,payload) {
          state.publisherCompanyType = payload
    },
    chosenPublisherCompanyType(state,payload){
      state.chosenPublisherCompanyType = payload
    },
    chosenMembership(state,payload){
      state.chosenMembership = payload
    },
    publisherError(state,payload){
      state.publisherError = payload
    }
  },
  actions:{ //an action for each store attribute
    publisherCompanyType({commit},payload){
      commit('publisherCompanyType',payload)
    },
    chosenPublisherCompanyType({commit},payload){
      commit('chosenPublisherCompanyType',payload)
    },
    chosenMembership({commit},payload){
      commit('chosenMembership',payload)
    },
    publisherError({commit},payload){
      commit('publisherError',payload)
    }
  },
  getters: {  //a getter for each store attribute
      publisherCompanyType(state) {
          return state.publisherCompanyType;
      },
      chosenPublisherCompanyType(state){
        return state.chosenPublisherCompanyType
      },
      chosenMembership(state){
        return state.chosenMembership
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
