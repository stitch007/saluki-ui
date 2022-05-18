import type { App, Plugin } from 'vue'
import Button from './Button'
import './button.css'

(Button as unknown as Plugin).install = (app: App) => {
  app.component(Button.name, Button)
  return app
}

export const SaButton = Button
export * from './theme'
