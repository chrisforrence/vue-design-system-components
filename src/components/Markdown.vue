<template>
  <section :class="classes" :style="styles" v-html="markdown"></section>
</template>

<script>
  import marked from 'marked';
  export default {
    props: {
      classes: {
        type: String,
        default: ''
      },
      styles: {
        type: String,
        default: ''
      }
    },
    computed: {
      markdown () {
        return marked(this.$slots.default[0].text)
      }
    }
  }
</script>
