import express, { Response, Request } from 'express'
import cors from 'cors'
const app = express()

const port = 3000

//parser
app.use(express.json())
app.use(cors())
//

const userRouter = express.Router()

//application routes
userRouter.get('/api/products')

app.use('/', userRouter)
userRouter.get('/create-user', (req: Request, res: Response) => {
  const user = req.body
  console.log(user)

  res.json({
    success: true,
    message: 'User Created mSuccessfuly',
    data: user,
  })
})

app.post('/', (req: Request, res: Response) => {
  console.log(req.body)

  res.json({
    message: 'sucessfully received ',
  })
})

export default app
