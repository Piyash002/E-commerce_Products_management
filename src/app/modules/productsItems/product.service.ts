import { Product } from './products.interface'
import { productModel } from './products.model'

const createProductIntoDB = async (product: Product) => {
  const result = await productModel.create(product)
  return result
}

const retriveAllDatatIntDB = async () => {
  const result = await productModel.find()
  return result
}

const retriveSpeicificProductIntoDB = async (_id: string) => {
  const result = await productModel.findOne({ _id })
  return result
}
const updateSpeicificProductIntoDB = async (_id: string, product: Product) => {
  const result = await productModel.findByIdAndUpdate(_id, product, {
    new: true,
  })
  return result
}
const deleteSpeicificProductIntoDB = async (_id: string) => {
  const result = await productModel.findOneAndUpdate({
    _id,
  })
  return result
}
export const productServices = {
  createProductIntoDB,
  retriveAllDatatIntDB,
  retriveSpeicificProductIntoDB,
  updateSpeicificProductIntoDB,
  deleteSpeicificProductIntoDB,
}
