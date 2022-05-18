## 菜单 Menu

不是菜单。

### 基础用法

`item` 完全是自定义的。

<Demo>
<MenuBasicUsage />

```vue
<script setup lang="ts">
import { h } from 'vue'
import type { MenuOptions } from 'saluki-ui'
import { SaButton, SaMenu } from 'saluki-ui'

const menuOptions: MenuOptions[] = [
  {
    key: 1,
    render: () => h('div', '肯德基'),
    children: [
      {
        key: 11,
        render: () => h(SaButton, { type: 'ghost' }, '汉堡'),
        children: [
          {
            key: 111,
            render: () => h('div', '香辣鸡腿堡'),
          },
          {
            key: 112,
            render: () => h('div', '牛肉堡'),
          },
        ],
      },
      {
        key: 12,
        render: () => h('div', '老北京鸡肉卷'),
      },
      {
        key: 13,
        render: () => h('div', '奥尔良烤翅'),
      },
    ],
  },
  {
    key: 2,
    render: () => h(SaButton, '星巴克'),
    children: [
      {
        key: 21,
        render: () => h('div', '经典咖啡'),
      },
      {
        key: 22,
        render: () => h('div', '香草拿铁'),
      },
    ],
  },
  {
    key: 3,
    render: () => h('div', '泡面'),
  },
]
</script>

<template>
  <div class="menu">
    <SaMenu :options="menuOptions" />
  </div>
</template>

<style>
.menu {
  min-width: 300px;
}

.menu .sa-menu-item {
  margin: 6px 0;
}
</style>
```
</Demo>

### Menu Props

|名称|说明|类型|默认值|
|---|---|---|---|
|options|菜单选项|`MenuOptions[]`|`undefined`|
|indent|子菜单的缩进|`number`|`undefined`|
|show-arrow|是否显示箭头|`boolean`|`false`|
|depth|当前菜单的层级|`number`|`0`|
