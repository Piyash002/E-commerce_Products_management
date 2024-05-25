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
//update product information
const updateProduct = async (req: Request, res: Response) => {
  try {
    const ID = req.params.productId
    const product = req.body
    const result = await productServices.updateSpeicificProductIntoDB(
      ID,
      product,
    )
    res.status(200).json({
      success: true,
      message: 'Product update successfully!',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

//deleteProduct
const deleteSpeicificProduct = async (req: Request, res: Response) => {
  try {
    const product = req.params.productId
    const result = await productServices.deleteSpeicificProductIntoDB(product)

    if (!result) {
      return res.status(404).send({
        success: false,
        message: 'Product not found',
        data: null,
      })
    }

    res.status(200).send({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    })
  } catch (error: any) {
    res.status(400).send({
      success: false,
      message: error.message,
      data: null,
    })
  }
}
//SearchProduct
const SearchSpecificProduct = async (req: Request, res: Response) => {}

export const productController = {
  createProduct,
  retriveAllProducts,
  retriveSpeicificProduct,
  updateProduct,
  deleteSpeicificProduct,
}
