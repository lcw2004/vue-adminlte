# vue-adminlte

> vue common components

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目结构
## src/components
  存放公共组件，每个组件一个文件夹，所有公共组件统一在components/index里面注册

## src/mixins
  存放公共的mixin

## src/view
  存放业务组件，不注册为公共组件，需要使用的时候单独引入

## src/filters
  存放公共过滤器

## src/utils
  存放公共的utils方法

## src/vuex
  存放store，如果需要将store模块化，再建立单独的文件夹

## src/router
  存放路由，路由也考虑模块化