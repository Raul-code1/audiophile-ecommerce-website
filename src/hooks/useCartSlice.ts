import { useAppSelector, useAppDispatch } from './useStoreSateDispatch';

import { Product } from '../interfaces/Products';
import { addCartItem, removeAllItems } from '../store/cart/cartSlice';

export const useCartSlice = () => {


    const { items,totalCount,totalPrice }=useAppSelector(( state )=>state.cart);
    const dispatch=useAppDispatch();


    const addingItemsToCart = ( product:Product ) => {
        dispatch( addCartItem( product ) )
    };

    const removingAllItemsFromCart = (  ) =>{
        dispatch( removeAllItems() );
    }


    return{
        //*State
        items,
        totalCount,
        totalPrice,

        //*Methods
        addingItemsToCart,
        removingAllItemsFromCart,


    }
}
