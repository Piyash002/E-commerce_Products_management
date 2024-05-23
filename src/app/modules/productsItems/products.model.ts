import { Schema, model } from 'mongoose'
const Joi = require('joi')
import { Inventory, Product, Variant } from './products.interface'

const variantSchema = new Schema<Variant[]>([
  {
    type: {
      type: String,
      required: [true, 'type is required'],
      trim: true,
    },
    value: {
      type: String,
      required: [true, 'value is required'],
      trim: true,
    },
  },
])
const inventorySchema = new Schema<Inventory>({
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
const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: ['computer', 'peripherals', 'wireless', 'ergonomic'],
  variants: variantSchema,
  inventory: inventorySchema,
})
// 3. Create a Model.
export const roductModel = model<Product>('User', productSchema)
