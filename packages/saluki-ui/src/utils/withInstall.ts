import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    app.component((component as any).name, component)
    return app
  }
  return component as SFCWithInstall<T>
}
