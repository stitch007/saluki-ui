import type { App, Plugin } from 'vue'
import Carousel from './Carousel'
import './carousel.css'

(Carousel as unknown as Plugin).install = (app: App) => {
  app.component(Carousel.name, Carousel)
  return app
}

export const SaCarousel = Carousel
