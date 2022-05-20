import type { App, Plugin } from 'vue'
import Menu from './Menu'
import './menu.css'

(Menu as unknown as Plugin).install = (app: App) => {
  app.component(Menu.name, Menu)
  return app
}

export type { MenuOptions } from './Menu'
export const SaMenu = Menu
export * from './theme'
