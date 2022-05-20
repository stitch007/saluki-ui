import type { App, Plugin } from 'vue'
import Tabs from './Tabs'
import TabPanel from './TabPanel'
import './tabs.css'

(Tabs as unknown as Plugin).install = (app: App) => {
  app.component(Tabs.name, Tabs)
  return app
}

(TabPanel as unknown as Plugin).install = (app: App) => {
  app.component(TabPanel.name, TabPanel)
  return app
}

export const SaTabs = Tabs
export const SaTabPanel = TabPanel
export * from './theme'
