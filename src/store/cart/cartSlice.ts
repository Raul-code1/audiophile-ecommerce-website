import { createSlice,PayloadAction } from '@reduxjs/toolkit'



export type CartItem={
    id: number,
    quantity: number,
}

interface CartState{
    items:CartItem[];
    totalCount:number;
    productQuantity:number;
    increaseQuantity:any;
    decreaseQuantity:any;
}


const initialState: CartState = {
    items:[],
    totalCount:0,
    productQuantity:0,
    increaseQuantity:null,
    decreaseQuantity:null,
}


export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        getProductQuantity:( state,{ payload }:PayloadAction<number> )=>{
             state.productQuantity= state.items.find( item=> item.id===payload )?.quantity || 0 ;
        },
        increasingQuantity:( state, { payload }:PayloadAction<number> )=>{
            const newItem={
                id:payload,
                quantity:1
            }
           
            if ( state.items.find( item=> item.id===payload )===undefined ) {
                state.items.push( newItem ) /*  [...items,newItem]  */
            }else{
                state.items.map( item=>{
                    if( item.id===payload ){
                        item.quantity += 1  /*  {...item,cantidad: cantidad + 1}  */
                    }else{
                        return item;
                    }
                } )
            }
        },
        dereasingQuantity:( state, { payload }:PayloadAction<number> )=>{

            if ( state.items.find( item=> item.id===payload )?.quantity===1 ) {
                state.items=state.items.filter( item=>item.id !== payload )
            }else{
                state.items.map( item=>{
                    if( item.id===payload ){
                        item.quantity -= 1
                    }else{
                        return item;
                    }
                } )
            }
        },
        getTotalCount:( state )=>{
            state.totalCount= state.items.reduce( (total,item)=>item.quantity + total,0 )
        },
        removeAllItems:( state )=>{
            state.items=[];
        },
    }
    
})


export const{
    
    removeAllItems,
    increasingQuantity,
    getProductQuantity,
    dereasingQuantity,
    getTotalCount

  }=cartSlice.actions;

