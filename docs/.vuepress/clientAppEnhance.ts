import { defineClientAppEnhance } from '@vuepress/client'

import SalukiUI from '../../src'

export default defineClientAppEnhance(({ app }) => {
  app.use(SalukiUI)
})
