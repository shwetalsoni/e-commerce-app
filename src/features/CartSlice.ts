import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RatingType {
  rate: number
  count: number
}

export interface ReviewType {
  user_name: string
  short_review: string
}

export interface CartItem {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: RatingType
  reviews: ReviewType[]
  quantity: number
}

export interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions

export const selectCartItems = (state: CartState) => state.items
export const selectTotalItems = (state: CartState) =>
  state.items.reduce((total, item) => total + item.quantity, 0)

export default cartSlice.reducer
