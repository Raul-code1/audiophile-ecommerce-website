import { useAppSelector, useAppDispatch } from './useStoreSateDispatch';

import { addUserInfo, toggleCheckoutModal, toggleMobileMenu, toggleShoppingCart } from '../store/ui/uiSlice';

export const useUiSlice = () => {

    const{ showMobileMenu,showShoppingCart,userInfo,showCheckoutModal }=useAppSelector((state)=>state.ui)

    const dispatch=useAppDispatch();



    const handleToggleMenu = () => {
        dispatch( toggleMobileMenu() );
    }

    const handleToggleSHoppingCart = () => {
        dispatch( toggleShoppingCart() );

    };


    const setUserInfo = ( name:string )=>{
        dispatch( addUserInfo( name ) )
    }


    const handleCheckoutModal =()=>{
        dispatch( toggleCheckoutModal() );
    }

    return{

        //*State
        showMobileMenu,
        showShoppingCart,
        userInfo,
        showCheckoutModal,
        
        //*Mehods
        handleToggleMenu,
        handleToggleSHoppingCart,
        setUserInfo,
        handleCheckoutModal


        
    }

}
