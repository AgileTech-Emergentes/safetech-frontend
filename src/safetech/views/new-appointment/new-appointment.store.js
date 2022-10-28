export default {
  namespaced: true,
  state: {
    applianceSelected: '',
    technicalSelected: '',
  },
  getters: {
    applianceSelected: state => state.applianceSelected,
    technicalSelected: state => state.technicalSelected,
  },
  mutations: {
    SET_APPLIANCE_SELECTED(state, payload) {
      return (state.applianceSelected = payload)
    },
    SET_TECHNICAL_SELECTED(state, payload) {
      return (state.technicalSelected = payload)
    },
  },
  actions: {
    A_SET_APPLIANCE_SELECTED({ commit }, params) {
      commit('SET_APPLIANCE_SELECTED', params)
    },
    A_SET_TECHNICAL_SELECTED({ commit }, params) {
      commit('SET_TECHNICAL_SELECTED', params)
    },
  },
}
