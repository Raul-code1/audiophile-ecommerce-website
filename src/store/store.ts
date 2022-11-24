import { configureStore } from '@reduxjs/toolkit'


import { cartSlice } from './cart/cartSlice'
import { uiSlice } from './ui/uiSlice'



export const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
        ui:uiSlice.reducer,
    }
})


export type RooteState=ReturnType<typeof store.getState> 

export type AppDispatch= typeof store.dispatch