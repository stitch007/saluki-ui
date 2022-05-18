import type { App, Plugin } from 'vue'
import Upload from './Upload'
import './upload.css'

(Upload as unknown as Plugin).install = (app: App) => {
  app.component(Upload.name, Upload)
  return app
}

export const SaUpload = Upload
