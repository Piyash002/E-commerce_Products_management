// create an order
import { Request, Response } from 'express'
import { prosuctOrderService } from './order.service';

//crate order
 const cretaeOrder = async(req:Request, res:Response)=>{
   try {
    const  Order = req.body.order
    const result =await prosuctOrderService.createOrderIntoDB(Order)
  res.status(200).json({
    success: true,
    message: 'order created successfully!',
    data: result
  })

   } catch (error) {
    console.log(error);
    
   }
 }

 //Retrieve All Orders
const retrieveAllOrders = async(req:Request, res:Response)=>{
 try {
  const email = req.query.email || ''
  const result = await prosuctOrderService.retrieveAllOrders({email})
   const message = email?"Orders fetched successfully for user email!" :"Orders fetched successfully!"

res.status(200).json({
  success: true,
    message:message,
    data: result
})
 } catch (error) {
  console.log(error);
  
 }
}

// const  retrieveOrdersByEmail  = async(req:Request, res:Response)=>{

//   const result = await prosuctOrderService.retrieveOrdersByEmail({email})
  
//   res.status(200).json({
//     success: true,
//       message: "Orders fetched successfully!",
//       data: result
//   })
  
//   }


export const  orderControler = {
  cretaeOrder,
  retrieveAllOrders
}