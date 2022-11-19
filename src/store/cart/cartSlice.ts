import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../interfaces/Products';


interface CartState{
    items:Product[];
    totalCount:number;
    totalPrice:number;
    showUiCartTotal:boolean;
}


const initialState: CartState = {
    items:[],
    totalCount:0,
    totalPrice:0,
    showUiCartTotal:false,
}


export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCartItem:( state,{ payload }:PayloadAction<Product> )=>{
            state.items.push( payload )
        },
        removeAllItems:( state )=>{
            state.items=[];
        }
    }
    
})


export const{ addCartItem,removeAllItems  }=cartSlice.actions;

