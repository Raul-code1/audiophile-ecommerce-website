import { useAppSelector, useAppDispatch } from './useStoreSateDispatch';

import { toggleMobileMenu, toggleShoppingCart } from '../store/ui/uiSlice';

export const useUiSlice = () => {

    const{ showMobileMenu,showShoppingCart }=useAppSelector((state)=>state.ui)
    const dispatch=useAppDispatch();


    const handleToggleMenu = () => {
        dispatch( toggleMobileMenu() );
    }

    const handleToggleSHoppingCart = () => {
        dispatch( toggleShoppingCart() );

    };

    return{

        //*State
        showMobileMenu,
        showShoppingCart,

        
        //*Mehods
        handleToggleMenu,
        handleToggleSHoppingCart


        
    }

}
