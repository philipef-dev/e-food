import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../pages/Home'

type CartState = {
    isOpen: boolean
    pratos: MenuItem[]
}

const initialState: CartState = {
    isOpen: false,
    pratos: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<MenuItem>) => {
            const prato = state.pratos.find((prato) => prato.id === action.payload.id)

            if (!prato) {
                state.pratos.push(action.payload)
            } else {
                alert('Item já adicionando ao carrinho')
            }
        },
        remove: (state, action: PayloadAction<number>) => {            
            state.pratos = state.pratos.filter((prato) => prato.id !== action.payload)
        },

        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
    },
})

export const { open, close, add, remove } = cartSlice.actions
export default cartSlice.reducer