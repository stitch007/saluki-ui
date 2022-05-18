import type { App, Plugin } from 'vue'
import Badge from './Badge'
import './badge.css'

(Badge as unknown as Plugin).install = (app: App) => {
  app.component(Badge.name, Badge)
  return app
}

export const SaBadge = Badge
export * from './theme'
