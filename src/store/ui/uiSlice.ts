import { createSlice,PayloadAction } from '@reduxjs/toolkit';


interface uiSliceState{
    showMobileMenu: boolean;
    showShoppingCart: boolean;
}

const initialState: uiSliceState={
    showMobileMenu: false,
    showShoppingCart: false,
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

        }
        
    }
});



export const { toggleMobileMenu,toggleShoppingCart } = uiSlice.actions;