import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress'
import { path } from '@vuepress/utils'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin  } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Saluki UI',
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' },
    ],
  ],
  description: '一个Vue 3组件库啦',
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@/, path.resolve(__dirname, 'components')),
    }
  },
  plugins: [
    searchPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components/'),
    }),
    shikiPlugin({
      theme: 'dark-plus',
    }),
  ],
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文档',
        link: '/docs/introduction',
        activeMatch: '^/docs',
      },
      {
        text: '组件',
        link: '/components/button',
        activeMatch: '^/components',
      },
      {
        text: 'Github',
        link: 'https://github.com/stitch007'
      },
    ],
    sidebar: {
      '/components/': [
        {
          text: '通用组件',
          children: [
            { text: '按钮 Button', link: '/components/button' },
            { text: '卡片 Card',  link: '/components/card' },
            { text: '轮播 Carousel',  link: '/components/carousel' },
          ],
        },
        {
          text: '导航组件',
          children: [
            { text: '下拉框 Dropdown', link: '/components/dropdown' },
            { text: '菜单 Menu', link: '/components/menu' },
            { text: '标签页 Tabs', link: '/components/tabs' },
          ],
        },
        {
          text: '表单组件',
          children: [
            { text: '复选框 Checkbox', link: '/components/checkbox' },
            { text: '输入框 Input', link: '/components/input' },
            { text: '开关 Switch', link: '/components/switch' },
            { text: '上传 Upload', link: '/components/upload' },
          ],
        },
        {
          text: '反馈组件',
          children: [
            { text: '徽章 Badge', link: '/components/badge' },
            { text: '模态框 Modal', link: '/components/modal' },
            { text: '收缩的边框 Shrink', link: '/components/shrink' },
            { text: '扩散的波浪 Wave', link: '/components/wave' },
          ],
        },
      ],
      '/docs/' :[
        {
          text: '介绍',
          children: [
            { text: 'Saluki UI', link: '/docs/introduction' },
          ],
        },
        {
          text: '快速上手',
          children: [
            { text: 'Install' , link: '/docs/install' },
          ],
        },
      ],
    },
  }),
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        VueJsx()
      ],
    }
  })
})
