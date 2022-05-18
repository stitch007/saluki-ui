import type { App, Plugin } from 'vue'
import Modal from './Modal'
import './modal.css'

(Modal as unknown as Plugin).install = (app: App) => {
  app.component(Modal.name, Modal)
  return app
}

export const SaModal = Modal
export * from './theme'
