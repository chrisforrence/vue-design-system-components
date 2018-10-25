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

```
<ColorSwatch :colors="[{
    name: 'Color Name',
    hex: '#112233',
    meta: {
        hex: '#112233',
        rgb: 'rgb(17, 34, 51)'
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
