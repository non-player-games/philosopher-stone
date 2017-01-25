const BASIC_ELEMENTS = [
  {
    name: 'air',
    symbol: '🜁'
  },
  {
    name: 'earth',
    symbol: '🜃'
  },
  {
    name: 'fire',
    symbol: '🜂'
  },
  {
    name: 'water',
    symbol: '🜄'
  }
]
const MAX_ACTIONS = 7

const state = {
  basicElements: BASIC_ELEMENTS,
  actions: []
}

const actions = {
  sendAction ({commit, state}) {
    console.log('Sending actions')
    commit('reset')
  }
}

const mutations = {
  addAction (state, action) {
    if (state.actions.length < MAX_ACTIONS) {
      state.actions.push(action)
    }
  },
  reset (state) {
    state.actions = []
  }
}

export default {
  state,
  actions,
  mutations
}
