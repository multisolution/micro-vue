# micro-vue

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Test events

**test send**

`window.addEventListener('increment', (ev)=>console.log(ev.detail) )`

**test receive**

`var event = new CustomEvent('increment_evt', {detail: {target: 'vue'}}); window.dispatchEvent(event)`
