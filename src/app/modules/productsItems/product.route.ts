import express from 'express'
import { productController } from './product.controller'

const router = express.Router()

router.post('/api/products', productController.createProduct)

router.get(
  '/api/products/:productId',
  productController.retriveSpeicificProduct,
)
router.put('/api/products/:productId', productController.updateProduct)

router.delete('/api/products/:productId',
productController.deleteSpeicificProduct,
)
router.get('/api/products', productController.searchspecificProducts)

export const productRoute = router
