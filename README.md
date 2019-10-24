# Vue Design System Components

This library is intended to assist developers with building bespoke design systems.

## Project setup

First, install the library or add it to your package.json file.

```
npm install --save vue-design-system-components
```

This library is built using [vue-cli][vue-cli-build]; you can bring the design system components into your project by requiring the UMD script:

```
let dsc = require('vue-design-system-components/dist/vue-design-system-components.umd.js');
const app = new Vue({
    el: '#app',
    components: dsc.default
});
```

## Components

This is a list of available components: more will be added over time!

### Title

```
<design-system-title>Well Howdy There!</design-system-title>
```

### Comment

```
<design-system-comment>This might be slightly important.</design-system-comment>
```

### Color Swatch

Use this component to tightly group together multiple colors

```
<design-system-color-swatch :colors="[{
        name: 'Gray',
        hex: '#112233',
        meta: {
            hex: '#112233',
            rgb: 'rgb(17, 34, 51)',
            scss: '$color_gray'
        }
    }, {
        name: 'Gray Light',
        hex: '#223344',
        meta: {
            hex: '#112233',
            rgb: 'rgb(34, 51, 68)',
            scss: '$color_gray_light'
        }
    }]"></design-system-color-swatch>
```

### Color Contrast

```
<design-system-color-contrast :colors="[{
    name: 'Color Name',
    hex: '#112233'
}, {
    name: 'Color Name',
    hex: '#FFEEDD'
}]" :summary="true" :table="true"></design-system-color-contrast>
```

## Development

Want to develop on these as well? Fantastic!

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

[vue-cli-build]: https://cli.vuejs.org/guide/build-targets.html#library
