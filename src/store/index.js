import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    logging: null,
    cart: []
  },
  
  mutations: {
    SET_USER : (state, payload) => state.user = payload,
    SET_LOGGING_STATE: (state, payload) => state.logging = payload,
    SET_ITEM_CART: (state, payload) => {
      const { quantity, objectId } = payload
      const index = state.cart.findIndex(e => e.objectId == objectId)
      if(index == -1) {
        state.cart.push(payload)
      } else {
        state.cart[index].quantity = state.cart[index].quantity + quantity
      }
    },
    REMOVE_ITEM_CART: (state, payload) => {
      const { objectId } = payload
      const index = state.cart.findIndex(e => e.objectId == objectId)
      if(index > -1) {
        state.cart.splice(index, 1)
      }
    }
  },
  actions: {
    IS_LOGGING: async ({commit}) => {
      commit("SET_LOGGING_STATE", true)
    },
    NOT_LOGGING: async({commit}) => {
      commit("SET_LOGGING_STATE", false)
    },
    LOG_IN: async({commit}, payload) => {
      commit("SET_USER", payload)
    },
    LOG_OUT: async ({ commit }) => {
      commit("SET_USER", null)
    },
    ADD_TO_CART: async ({ commit }, payload) => {
      commit("SET_ITEM_CART", payload)
    },
    REMOVE_FROM_CART: async({commit}, payload) => {
      commit("REMOVE_ITEM_CART", payload)
    }
  }
})
