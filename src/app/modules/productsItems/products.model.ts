import { Schema, model } from 'mongoose'
import { Inventory, Product } from './products.interface'

export const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: [true, 'quantity is required'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'inStoctk is required'],
  },
})
// 2. Create a Schema corresponding to the document interface.
export const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: ['computer', 'peripherals', 'wireless', 'ergonomic'],
  variants: Array<{ type: string; required: true }>,
  inventory: {
    type: [inventorySchema],
    required: true,
  },
})
// 3. Create a Model.
export const productModel = model<Product>('Product', productSchema)
