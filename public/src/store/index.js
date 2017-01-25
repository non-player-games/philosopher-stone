import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as mutations from './mutations'
import elements from './modules/elements'

Vue.use(Vuex)

const state = {
  count: 0
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    elements
  }
})

if (module.hot) {
  module.hot.accept([
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
