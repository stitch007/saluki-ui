import type { App, Plugin } from 'vue'
import Config from './Config'

(Config as unknown as Plugin).install = (app: App) => {
  app.component(Config.name, Config)
  return app
}

export const SaConfig = Config
