import type { App } from 'vue'
import * as components from './components'

export * from './components'
export * from './components/theme'

export default {
  install(app: App) {
    for (const key in components) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line import/namespace
      const component = components[key]
      if (component.install) {
        app.use(component)
      }
    }
    return app
  },
}
