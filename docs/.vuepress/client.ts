import { defineClientConfig } from '@vuepress/client'

import SalukiUI from 'saluki-ui'
import 'saluki-ui/es/style.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(SalukiUI as any)
  },
})
