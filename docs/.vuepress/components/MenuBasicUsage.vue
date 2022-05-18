<script setup lang="ts">
import { h } from 'vue'
import type { MenuOptions } from '../../../src'
import { SaButton } from '../../../src'

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
