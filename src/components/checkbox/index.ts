import type { App, Plugin } from 'vue'
import Checkbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'
import './checkbox.css'

(Checkbox as unknown as Plugin).install = (app: App) => {
  app.component(Checkbox.name, Checkbox)
  return app
}

(CheckboxGroup as unknown as Plugin).install = (app: App) => {
  app.component(CheckboxGroup.name, CheckboxGroup)
  return app
}

export const SaCheckbox = Checkbox
export const SaCheckboxGroup = CheckboxGroup
export * from './theme'
