import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newCart = [ ...state.cart, action.payload]
      state.cart= newCart
      // This also works:
    //   state.cart= [...state.cart, {
    //     product: action.payload.product,
    //     quantity: action.payload.quantity
    //   }
    // ]
    },
    addToCartNew: (state, action) => {
      state.cart= [action.payload]
    },
    removeFromCart: (state, action) => {     
        const newCart = state.cart.filter(prod => prod.product.id !== action.payload);
        state.cart= newCart
    },
    cleanCart: (state) => {
      const cleanCart = ""
      state.cart=  cleanCart
    //   window.sessionStorage.setItem("cart", JSON.stringify(""))
  }
  },
})

export const {  addToCart, addToCartNew, removeFromCart, cleanCart} = cartSlice.actions

export default cartSlice.reducer