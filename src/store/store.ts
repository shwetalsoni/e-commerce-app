import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/ProductSlice'
import cartReducer from '../features/CartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
})

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
