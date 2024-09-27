/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { productServices } from './product.service'
import productValidationSchema from './product.validation'

//create  a product
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: Products } = req.body
    productValidationSchema.validate(Products)
    const result = await productServices.createProductIntoDB(Products)

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

//retrive specific data
const retriveSpeicificProduct = async (req: Request, res: Response) => {
  try {
    const product = req.params.productId
    const result = await productServices.retriveSpeicificProductIntoDB(product)

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
    const {productId} = req.params
    const result = await productServices.deleteSpeicificProductIntoDB(productId)

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

// SearchProduct and get all product
const searchspecificProducts = async (req: Request, res: Response) => {
  const { searchTerm}  = req.query || ''
 try {
   const result = await productServices.searchSpecificdata(req.query)

     const message = searchTerm?`Products matching search term '${searchTerm}'fetched successfully!`:`Products fetched successfully!`

   res.status(200).json({
     success: true,
     message: message,
     data: result,
   })
 } catch (error) {
   console.log(error)
 }
}
export const productController = {
  createProduct,
  searchspecificProducts,
  retriveSpeicificProduct,
  updateProduct,
  deleteSpeicificProduct,

}
