import express, { Response, Request, Application } from 'express'
import cors from 'cors'
import { productRoute } from './app/modules/productsItems/product.route'
const app: Application = express()

//parser
app.use(express.json())
app.use(cors())
//
app.use('/', productRoute)

// app.post('/', (req: Request, res: Response) => {
//   console.log(req.body)

//   res.json({
//     message: 'sucessfully received ',
//   })
// })

export default app
