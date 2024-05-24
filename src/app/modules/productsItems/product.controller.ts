import { Request, Response } from 'express'
import { productServices } from './product.service'
import productValidationSchema from './product.validation'
//create  a product
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: Products } = req.body
    const { error } = productValidationSchema.validate(Products)
    const result = await productServices.createProductIntoDB(Products)

    console.log(Products)

    //send response
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  } catch (error) {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: error,
      })
    }
  }
}

//retrive a product
const retriveAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.retriveAllDatatIntDB()
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

//retrive specific data
const retriveSpeicificProduct = async (req: Request, res: Response) => {
  try {
    const product = req.params.productId
    const result = await productServices.retriveSpeicificProductIntoDB(product)
    console.log(product, result)

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const productController = {
  createProduct,
  retriveAllProducts,
  retriveSpeicificProduct,
}
