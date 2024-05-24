export type Inventory = {
  quantity: number
  inStock: boolean
}

export type Product = {
  name: string
  description: string
  price: number
  category: string
  tags: string
  variants: {
    type: Array<{ name: string; required: true }>
    required: true
  }
  inventory: {
    type: Inventory
    required: true
  }
}
