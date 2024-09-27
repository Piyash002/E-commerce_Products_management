import mongoose, { Schema } from 'mongoose'
import { IOrder } from './order.interface'

const OrderSchema: Schema = new Schema({
  email: {
    type: String,
    required: [true, 'Path `email` is required.'],
    match: [/.+@.+\..+/, 'Please provide a valid email address.']
},
productId: {
    type: String,
    required: [true, 'Path `productId` is required.'],
},
price: {
    type: Number,
    required: [true, 'Path `price` is required.'],
    min: [0, 'Price must be a positive number.']
},
quantity: {
    type: Number,
    required: [true, 'Path `quantity` is required.'],
    min: [1, 'Quantity must be at least 1.']
}
})
const OrderModel = mongoose.model<IOrder>('Order', OrderSchema)

export default OrderModel
