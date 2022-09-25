<div align="center">
  <h1>Saluki UI</h1>
  <p><b>一个 Vue 3 组件库</b></p>
  <p><b>使用 TypeScript, 主题可调</b></p>
</div>

## 文档
[saluki-ui.stitch.run](http://116.62.101.136:8957/)

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
