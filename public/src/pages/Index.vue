<template>
  <div class="game">
    <div class="game__history">
      history
    </div>

    <div class="game__board">
      <div class="board__hands">
        <button class="card back">
        </button>
        <button class="card back">
        </button>
        <button class="card back">
        </button>
        <button class="card back">
        </button>
      </div>
      <div class="board__playground">
        playground
      </div>
      <div class="board__hands">
        <button class="card">
          🜁
        </button>
        <button class="card">
          🜂
        </button>
        <button class="card --selected">
          🜃
        </button>
        <button class="card">
          🜄
        </button>
      </div>
    </div>

    <div class="game__menu">
      <div class="menu-items">
      </div>
      <div class="fill"></div>
      <div class="player-actions">
        <button class="icon button primary">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 90 90" enable-background="new 0 0 90 90" xml:space="preserve"><path d="M81.664,66.022c3.598-6.222,5.669-13.382,5.669-21.072c0-23.333-18.975-42.292-42.305-42.308L45,2.606l-0.028,0.055  C21.642,2.676,2.667,21.663,2.667,44.997c0,7.69,2.071,14.802,5.67,21.024L8.292,66h0.09C15.717,79,29.379,87.133,45,87.133  S74.283,79,81.619,66h0.09L81.664,66.022z M83.333,45c0,6.125-1.452,11.914-4.017,17.055L47.384,6.748  C67.414,7.984,83.333,24.664,83.333,45z M57.403,32H32.598L45,10.519L57.403,32z M58,43.383C56,40.153,54.027,38,50.824,36H58  V43.383z M32,54.616C33,57.996,36.21,61,39.621,62H32V54.616z M34.834,49c0-5.606,4.561-10.167,10.167-10.167  c5.606,0,10.167,4.561,10.167,10.167c0,5.606-4.561,10.167-10.167,10.167C39.394,59.167,34.834,54.606,34.834,49z M58,54.617V62  h-7.621C53.79,61,56,57.996,58,54.617z M32,43.384V36h7.177C35.974,38,33,40.154,32,43.384z M28,62H15.219L28,40.063V62z M62,40.063  L74.781,62H62V40.063z M6.667,45c0-20.336,15.919-37.016,35.949-38.252L10.684,62.056C8.119,56.915,6.667,51.125,6.667,45z   M45,83.133C31.697,83.133,19.96,77,13.083,66h63.834C70.04,77,58.303,83.133,45,83.133z"/></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'app',
  computed: {
    counter () {
      return this.$store.state.count
    }
  },
  methods: mapMutations([
    'increment'
  ])
}
</script>

<style>
.game {
  height: 100%;
  display: flex;
}

.game .game__board {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.game .game__board .board__playground {
  flex: 1;
}

.board__hands {
  padding: 1em;
  display: flex;
  flex-wrap: nowrap;
  overflow-scrolling: touch;
  justify-content: center;
  overflow-x: auto;
  flex-flow: row;
  width: 100%;
}

.game__menu {
  display: flex;
  flex-direction: column;
}
.fill {
  flex: 1;
}
.player-actions {
  padding: 1em;
}
</style>
