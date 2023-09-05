import { categories } from './categories/categories.js'

import { products } from './products/products.js'

export const services = (app) => {
  app.configure(categories)

  app.configure(products)

  // All services will be registered here
}
