import Joi from "joi";


export const productOrderSchema = Joi.object({
    email: Joi.string().email().required()
        .messages({
            'string.email': 'Please provide a valid email address.',
            'string.empty': 'Email is required.'
        }),
    productId: Joi.string().length(24).hex().required()
        .messages({
            'string.length': 'Product ID must be a 24-character hexadecimal string.',
            'string.hex': 'Product ID must only contain hexadecimal characters.',
            'string.empty': 'Product ID is required.'
        }),
    price: Joi.number().positive().required()
        .messages({
            'number.base': 'Price must be a number.',
            'number.positive': 'Price must be a positive value.',
            'any.required': 'Price is required.'
        }),
    quantity: Joi.number().integer().min(1).required()
        .messages({
            'number.base': 'Quantity must be a number.',
            'number.integer': 'Quantity must be an integer.',
            'number.min': 'Quantity must be at least 1.',
            'any.required': 'Quantity is required.'
        })
});

