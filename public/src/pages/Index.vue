<template>
  <div>
    {{counter}}
    <button @click="increment">+</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

import Hello from '../components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
