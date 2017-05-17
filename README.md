# vue-multi-modules

Vue多页面工程，参考[https://github.com/jarvan4dev/vue-multi-page.git](https://github.com/jarvan4dev/vue-multi-page.git)改造而来。

跟这个工程主要有以下几个改动：
1.  基于最新的Vue-cli重新改造的
2.  添加了es-lint
3.  按我的想法调整了以下代码

# 多模块说明
Vue多模块工程的核心地方有两个：
1.  build\webpack.base.conf.js的entry

    这是每一个模块的的入口js文件

2.  build\webpack.dev.conf.js和build\webpack.prod.conf.js的HtmlWebpackPlugin

    这是每一个模块的html文件打包插件，在打包插件中指定html路径以及入口js文件

vue-cli里面这两个地方是单个的，改为每一个模块一个即为多模块工程。

具体的代码在utils.getEntries和utils.getHtmlWebpackPlugins里面


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
