const state = {
  elements: [],
  potions: [],
  deck: []
}

const getters = {
  selectedElements: state => state.elements.filter(e => selected)
}

const actions = {
}

const mutations = {
  init (state, deck) {
    state.deck = deck
  },
  deal (state, elements) {
    state.elements = elements.splice(0)
  },
  select (state, element) {
    state.elements.splice
  },
  combine (state) {
    console.log('Combining elements: %o', state.elements.filter(e => e.selected))
  }
}
