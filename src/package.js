import Vue from 'vue'

// Import all components
import DesignSystemComment from './components/DesignSystemComment.vue'
import DesignSystemTitle from './components/DesignSystemTitle.vue'
import DesignSystemMarkdown from './components/DesignSystemMarkdown.vue'
import DesignSystemColorSwatch from './components/DesignSystemColorSwatch.vue'
import DesignSystemColorContrast from './components/DesignSystemColorContrast.vue'

const Components = {
  DesignSystemComment,
  DesignSystemTitle,
  DesignSystemMarkdown,
  DesignSystemColorSwatch,
  DesignSystemColorContrast
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
