import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './useStoreSateDispatch';

import { dereasingQuantity, getProductQuantity, getTotalCount, increasingQuantity, removeAllItems } from '../store/cart/cartSlice';

export const useCartSlice = ( id?:number ) => {


    const { totalCount,totalPrice,

        /* DESPUEEES */
            productQuantity,items }=useAppSelector(( state )=>state.cart);


    const dispatch=useAppDispatch();


    const gettingProductQuantity =( id:number )=>{
        dispatch( getProductQuantity( id ) );
    }

    const startIncreasingQuantity=( id:number )=>{
        dispatch( increasingQuantity( id ) )
    }

    const startDecreasingQuantity=( id:number )=>{
        dispatch( dereasingQuantity( id ) )

    }

    const gettingTotalCount=()=>{
        dispatch( getTotalCount() )
    }
    
    useEffect(() => {
        gettingTotalCount();
      }, [items])
      


    const removingAllItemsFromCart = (  ) =>{
        dispatch( removeAllItems() );
    }


    return{
        //*State
        
        totalCount,
        totalPrice,

        /* Despues */
        productQuantity,
        items,

        //*Methods
        removingAllItemsFromCart,



        /* DESPUES */
        gettingProductQuantity,
        startIncreasingQuantity,
        startDecreasingQuantity,
        gettingTotalCount

    }
}
