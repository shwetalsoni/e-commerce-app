import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import products from '../api/mock-data.json'

export interface RatingType {
  rate: number
  count: number
}

export interface ReviewType {
  user_name: string
  short_review: string
}

export interface ProductType {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: RatingType
  reviews: ReviewType[]
}

export interface ProductsState {
  products: ProductType[]
  productDetails: ProductType | null
}

const initialState: ProductsState = {
  products: products,
  productDetails: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      const productId = action.payload
      state.productDetails =
        state.products.find((product) => product.id === productId) || null
    },
    filterProductsByCategory: (state, action) => {
      const category = action.payload
      state.products = products.filter(
        (product) => product.category === category
      )
    },
    resetFilter: (state) => {
      state.products = products
    },
    searchProducts: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase()
      state.products = products.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      )
    },
  },
})

export const {
  selectProduct,
  filterProductsByCategory,
  resetFilter,
  searchProducts,
} = productsSlice.actions
export default productsSlice.reducer
