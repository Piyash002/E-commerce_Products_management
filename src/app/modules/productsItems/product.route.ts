import express from 'express'
import { productController } from './product.controller'

const router = express.Router()
router.post('/api/products', productController.createProduct)
router.get('/api/products', productController.retriveAllProducts)
router.get(
  '/api/products/:productId',
  productController.retriveSpeicificProduct,
)
export const productRoute = router
