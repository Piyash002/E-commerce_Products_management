const Joi = require('joi')

// Define the Joi schema for a variant
const variantSchema = Joi.object({
  type: Joi.string()
    .required()
    .trim()
    .valid('size', 'color', 'style')
    .messages({
      'any.required': 'type is required',
      'string.base': 'type must be a string',
      'any.only': 'type must be one of [size, color, style]',
    }),
  value: Joi.string().required().trim().messages({
    'any.required': 'value is required',
    'string.base': 'value must be a string',
  }),
})

// Define the Joi schema for inventory
const inventorySchema = Joi.object({
  quantity: Joi.number().required().messages({
    'any.required': 'quantity is required',
    'number.base': 'quantity must be a number',
  }),
  inStock: Joi.boolean().required().messages({
    'any.required': 'inStock is required',
    'boolean.base': 'inStock must be a boolean',
  }),
})

// Define the Joi schema for the product
const productValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'name is required',
    'string.base': 'name must be a string',
  }),
  description: Joi.string().required().messages({
    'any.required': 'description is required',
    'string.base': 'description must be a string',
  }),
  price: Joi.number().required().messages({
    'any.required': 'price is required',
    'number.base': 'price must be a number',
  }),
  category: Joi.string().required().messages({
    'any.required': 'category is required',
    'string.base': 'category must be a string',
  }),
  tags: Joi.array()
    .items(
      Joi.string().valid('computer', 'peripherals', 'wireless', 'ergonomic'),
    )
    .required()
    .messages({
      'any.required': 'tags are required',
      'array.base': 'tags must be an array of strings',
      'any.only':
        'tags must be one of [computer, peripherals, wireless, ergonomic]',
    }),
  variants: Joi.array().items(variantSchema).required().messages({
    'any.required': 'variants are required',
    'array.base': 'variants must be an array',
  }),
  inventory: inventorySchema.required().messages({
    'any.required': 'inventory is required',
  }),
})

export default productValidationSchema
