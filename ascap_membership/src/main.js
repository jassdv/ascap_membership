import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      federalTaxClassification: [],
      chosenFederalTaxClassification: "",
      chosenMembership: "",

  },
  mutations: {
    federalTaxClassification(state,payload) {
          state.federalTaxClassification = payload
    },
    chosenFederalTaxClassification(state,payload){
      state.chosenFederalTaxClassification = payload
    },
    chosenMembership(state,payload){
      state.chosenMembership = payload
    }
  },
  actions:{
    federalTaxClassification({commit},payload){
      commit('federalTaxClassification',payload)
    },
    chosenFederalTaxClassification({commit},payload){
      commit('chosenFederalTaxClassification',payload)
    },
    chosenMembership({commit},payload){
      commit('chosenMembership',payload)
    }
  },
  getters: {
      federalTaxClassification(state) {
          return state.federalTaxClassification;
      },
      chosenFederalTaxClassification(state){
        return state.chosenFederalTaxClassification
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
