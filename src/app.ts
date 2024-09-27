import express, {  Application } from 'express'
import cors from 'cors'
import { productRoute } from './app/modules/productsItems/product.route'
import { orederRoute } from './app/modules/orderItems/order.route'
const app: Application = express()

//parser
app.use(express.json())
app.use(cors())
//
app.use('/', productRoute)
app.use('/',orederRoute)

// app.post('/', (req: Request, res: Response) => {
//   console.log(req.body)

//   res.json({
//     message: 'sucessfully received ',
//   })
// })

export default app
