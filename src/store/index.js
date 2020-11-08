import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    logging: null
  },
  mutations: {
    SET_USER : (state, payload) => state.user = payload,
    SET_LOGGING_STATE: (state, payload) => state.logging = payload
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
    }
  }
})
