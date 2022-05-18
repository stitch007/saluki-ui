import type { App, Plugin } from 'vue'
import Card from './Card'
import './card.css'

(Card as unknown as Plugin).install = (app: App) => {
  app.component(Card.name, Card)
  return app
}

export const SaCard = Card
export * from './theme'
