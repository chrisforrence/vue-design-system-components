# Design System Components

This library is intended to assist developers with building bespoke design systems.

## Project setup
```
npm install
```

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

## Components

### Title

```
<Title>Well Howdy There!</Title>
```

### Comment

```
<Comment>This might be slightly important.</Comment>
```

### Color Swatch

Use this component to tightly group together multiple colors

```
<ColorSwatch :colors="[{
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
    }]"></ColorSwatch>
```

### Color Contrast

```
<ColorContrast :colors="[{
    name: 'Color Name',
    hex: '#112233'
}, {
    name: 'Color Name',
    hex: '#FFEEDD'
}]" :summary="true" :table="true"></ColorContrast>
