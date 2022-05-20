import type { App, Plugin } from 'vue'
import Shrink from './Shrink'
import './shrink.css'

(Shrink as unknown as Plugin).install = (app: App) => {
  app.component(Shrink.name, Shrink)
  return app
}

export const SaShrink = Shrink
