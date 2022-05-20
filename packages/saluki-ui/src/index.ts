import type { App, Plugin } from 'vue'
import * as components from './components'

export * from './components'
export * from './components/theme'

export default {
  install(app: App) {
    Object.keys(components).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line import/namespace
      const component = components[key] as Plugin
      if (component.install) {
        app.use(component)
      }
    })
    return app
  },
}
