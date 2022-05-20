<div style="text-align: center;">
  <h1>Saluki UI</h1>
  <p><b>一个 Vue 3 组件库</b></p>
  <p><b>使用 TypeScript, 主题可调</b></p>
 </div>

## 文档
[saluki-ui.stitch.run](http://saluki-ui.stitch.run:8957)

# 为什么要写组件库
...其实，我不太喜欢用组件库，你懂的，特别是现在已经有了WindiCSS、UnoCSS等CSS框架，
但像Modal、Menu、Skeleton这些组件每次重新造太麻烦了，
于是我就写了这个组件库，名字是一种猎狗，乱取的，这个组件库应该只有我自己会用吧(>_<逃~

## 安装
```bash
# 通过 npm 安装
npm install saluki-ui

# 通过 yarn 安装
yarn add saluki-ui

# 通过 pnpm 安装（推荐）
pnpm install saluki-ui
```

## 使用
先引入css
```js
import 'saluki-ui/es/style.css'
```

引入组件
```vue
<script setup lang="ts">
import { SaButton } from 'saluki-ui'
</script>

<template>
  <div class="demo">
    <SaButton>按钮</SaButton>
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

## 许可
Saluki UI 使用 [MIT license](https://opensource.org/licenses/MIT) 许可证书。
