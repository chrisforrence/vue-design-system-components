<template>
  <div id="app">
    <design-system-title>Howdy There!</design-system-title>

    <design-system-comment>This component is really handy for looking at multiple shades of a particular color.</design-system-comment>
    <design-system-color-swatch :colors="[
      {name: 'Blue', hex: '#0000FF', meta: {hex: '#0000FF'}},
      {name: 'Red', hex: '#FF0000', meta: {hex: '#FF0000'}},
      {name: 'Green', hex: '#00FF00', meta: {hex: '#00FF00'}},
      {name: 'White', hex: '#FFFFFF', meta: {hex: '#FFFFFF'}},
      {name: 'Black', hex: '#000000', meta: {hex: '#000000'}}
    ]" />


    <design-system-comment>This component is really handy for figuring out which color combinations to make.</design-system-comment>
    <design-system-color-contrast :colors="[
      {name: 'Blue', hex: '#0000FF', meta: {hex: '#0000FF'}},
      {name: 'Red', hex: '#FF0000', meta: {hex: '#FF0000'}},
      {name: 'Green', hex: '#00FF00', meta: {hex: '#00FF00'}},
      {name: 'White', hex: '#FFFFFF', meta: {hex: '#FFFFFF'}},
      {name: 'Black', hex: '#000000', meta: {hex: '#000000'}}
    ]" />
    <design-system-markdown>
# Hi!

## Subtitle

Ok, let's see where we get to from here.

- Be polite
- Be efficient
    </design-system-markdown>
  </div>
</template>

<script>
import DesignSystemColorContrast from './components/DesignSystemColorContrast.vue'
import DesignSystemColorSwatch from './components/DesignSystemColorSwatch.vue'
import DesignSystemComment from './components/DesignSystemComment.vue'
import DesignSystemMarkdown from './components/DesignSystemMarkdown.vue'
import DesignSystemTitle from './components/DesignSystemTitle.vue'

export default {
  name: 'app',
  components: {
    DesignSystemColorSwatch,
    DesignSystemComment,
    DesignSystemMarkdown,
    DesignSystemColorContrast,
    DesignSystemTitle
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
