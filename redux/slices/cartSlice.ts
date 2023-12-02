import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartAddState {
    msg: string;
    error: any;
    status: string;
    data: Producto[];
}

interface CartRemoveState {
    slug: string | undefined
}
    
const initialState: CartAddState = {
    msg: '',
    error: '',
    status: '',
    data: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Producto>) => {
        const { slug, cantidad } = action.payload;

        const existingItemIndex = state.data.findIndex(item => item.slug === slug);
    
        if (existingItemIndex !== -1) {
            state.data[existingItemIndex].cantidad = cantidad;
        } else {
            state.data.push(action.payload);
        }
    },
    removeToCart: (state, action: PayloadAction<CartRemoveState>) => {
        const { slug } = action.payload;
        const index = state.data.findIndex(item => item.slug === slug);
        if (index !== -1) {
            state.data.splice(index, 1);
        }
    },
    
  },
})

export const { addToCart, removeToCart } = cartSlice.actions