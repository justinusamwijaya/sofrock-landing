import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let listLan = ['eng', 'id']

export default new Vuex.Store({
  state: {
    lang: localStorage.getItem('la') && listLan.indexOf(localStorage.getItem('la')) + 1 ? localStorage.getItem('la') : (() => {
        localStorage.setItem('la', 'eng')
        return 'eng'
    })(),
  },
  mutations: {
    changeLangM(state, payload) {
      localStorage.setItem('la', payload)
      state.lang = payload
    }
  },
  actions: {
    changeLang({ commit }, newLang) {
      commit('changeLangM', newLang)
    }
  },
  modules: {
  }
})
