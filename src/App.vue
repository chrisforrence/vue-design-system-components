<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <Title>Hello!</Title>
    <ColorSwatch :colors="[
      {name: 'Blue', hex: '#0000FF', meta: {hex: '#0000FF'}},
      {name: 'Red', hex: '#FF0000', meta: {hex: '#FF0000'}},
      {name: 'Green', hex: '#00FF00', meta: {hex: '#00FF00'}},
      {name: 'White', hex: '#FFFFFF', meta: {hex: '#FFFFFF'}},
      {name: 'Black', hex: '#000000', meta: {hex: '#000000'}}
    ]" />
    <ColorContrast :colors="[{name: 'Blue', hex: '#0000FF'},{name: 'Red', hex: '#FF0000'},{name: 'Green', hex: '#00FF00'},{name: 'White', hex: '#FFFFFF'},{name: 'Black', hex: '#000000'}]" :summary="true" :table="true" />
  </div>
</template>

<script>
import ColorContrast from './components/ColorContrast.vue'
import ColorSwatch from './components/ColorSwatch.vue'
import Title from './components/Title.vue'

export default {
  name: 'app',
  components: {
    ColorSwatch,
    ColorContrast,
    Title
  }
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
