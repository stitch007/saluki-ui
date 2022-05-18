import type { App, Plugin } from 'vue'
import Switch from './Switch'
import './switch.css'

(Switch as unknown as Plugin).install = (app: App) => {
  app.component(Switch.name, Switch)
  return app
}

export const SaSwitch = Switch
export * from './theme'
