import { orderControler } from './order.controler'
import express from 'express'
const router = express.Router()

router.post('/api/orders', orderControler.cretaeOrder)
router.get('/api/orders', orderControler.retrieveAllOrders)
// router.get('/api/orders', orderControler.retrieveOrdersByEmail)


export  const orederRoute = router