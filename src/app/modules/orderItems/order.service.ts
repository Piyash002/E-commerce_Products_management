import OrderModel from './order.product.order.model'
import { IOrder } from './order.interface'

const createOrderIntoDB = async (order: IOrder) => {
  const result = await OrderModel.create(order)
  return result
}

//Retrieve All Orders
const retrieveAllOrders = async(query:Record<string,unknown>)=>{
  let email  = '';
  if(query?.email){
   email = query?.email as string
  }
  const result = await email?OrderModel.find({email}):OrderModel.find()

  
  return result
}

export const prosuctOrderService = {
  createOrderIntoDB,
  retrieveAllOrders
}
