import type { App, Plugin } from 'vue'
import Dropdown from './Dropdown'
import './dropdown.css'

(Dropdown as unknown as Plugin).install = (app: App) => {
  app.component(Dropdown.name, Dropdown)
  return app
}

export const SaDropdown = Dropdown
export * from './theme'
