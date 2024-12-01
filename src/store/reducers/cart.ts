import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../pages/Home'

type CartState = {
    isOpenCart: boolean
    checkoutOpen: boolean
    paymentOpen: boolean
    pratos: MenuItem[]
}

const initialState: CartState = {
    isOpenCart: false,
    checkoutOpen: false,
    paymentOpen: false,
    pratos: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<MenuItem>) => {
            const prato = state.pratos.find((prato) => prato.id === action.payload.id)

            if (!prato) {
                state.pratos.push(action.payload)
            } else {
                alert('Item já adicionando ao carrinho')
            }
        },
        removeToCart: (state, action: PayloadAction<number>) => {
            state.pratos = state.pratos.filter((prato) => prato.id !== action.payload)
        },
        openCart: (state) => {
            state.isOpenCart = true
        },
        closeCart: (state) => {
            state.isOpenCart = false
        },
        checkoutOpen: (state) => {
            state.checkoutOpen = true
        },
        checkoutClose: (state) => {
            state.checkoutOpen = false
        },
        paymentOpen: (state) => {
            state.paymentOpen = true
        },
        paymentClose: (state) => {
            state.paymentOpen = false
        }
    },
})

export const {
    openCart,
    closeCart,
    addToCart,
    removeToCart,
    checkoutOpen,
    checkoutClose,
    paymentOpen,
    paymentClose
} = cartSlice.actions

export default cartSlice.reducer