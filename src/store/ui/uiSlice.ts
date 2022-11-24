import { createSlice,PayloadAction } from '@reduxjs/toolkit';



interface userInfoInterType{
    name:string,

}

interface uiSliceState{
    showMobileMenu: boolean;
    showShoppingCart: boolean;
    userInfo:userInfoInterType;
    showCheckoutModal:boolean;
}

const initialState: uiSliceState={
    showMobileMenu: false,
    showShoppingCart: false,
    userInfo:{
        name:'',
    },
    showCheckoutModal:false,
}


export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleMobileMenu: ( state ) =>{
            state.showMobileMenu =!state.showMobileMenu;

        },
        toggleShoppingCart: ( state ) =>{
            state.showShoppingCart =!state.showShoppingCart;

        },
        addUserInfo:( state,{ payload }:PayloadAction<string> )=>{
            state.userInfo.name = payload;
            
        },
        toggleCheckoutModal: ( state ) =>{
            state.showCheckoutModal =!state.showCheckoutModal;

        },

        
    }
});



export const { toggleMobileMenu,toggleShoppingCart,addUserInfo,toggleCheckoutModal } = uiSlice.actions;