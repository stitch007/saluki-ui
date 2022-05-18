import type { App, Plugin } from 'vue'
import Wave from './Wave'
import './wave.css'

(Wave as unknown as Plugin).install = (app: App) => {
  app.component(Wave.name, Wave)
  return app
}

export const SaWave = Wave
export interface WaveRef {
  play: () => void
  cancel: () => void
}
