import type { App, Plugin } from 'vue'
import Input from './Input'
import './input.css'

(Input as unknown as Plugin).install = (app: App) => {
  app.component(Input.name, Input)
  return app
}

export const SaInput = Input
export * from './theme'
