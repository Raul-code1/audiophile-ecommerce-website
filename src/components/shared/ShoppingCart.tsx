import { AiOutlineClose } from "react-icons/ai";

import { useUiSlice } from "../../hooks/useUiSlice";
import '../../styles/componentsStyles/ShoppingCart.scss';
import { CartItem } from './CartItem';
import { useCartSlice } from '../../hooks/useCartSlice';

export const ShoppingCart = () => {

    const{ showShoppingCart,handleToggleSHoppingCart }=useUiSlice();
    const { items,removingAllItemsFromCart }=useCartSlice();

  return (
    <div   className={`container ${( showShoppingCart ) && 'opacity'} `} >

        <div className={`shopping-cart  ${( showShoppingCart ) && 'show-car'}   `}>

            <div onClick={ handleToggleSHoppingCart }  className="close-btn" > <AiOutlineClose /> </div>
            <div className='header' >
                <span>Cart{`(${items.length})`}</span>
                <span onClick={()=>removingAllItemsFromCart()} className="remove-all" > Remove all </span>
            </div>

            {
                items.length===0 
                ? <p className="no-items" >You dont have any items 😥</p>
                : items.map((item, index) => <CartItem  key={index} product={ item } />)

            }

            <div className="total">
                <div>Total</div>
                <div>100000</div>
            </div>

            <div className='btn' >
                <button  onClick={ handleToggleSHoppingCart } >CHECKOUT</button>
            </div>

        </div>

       

    </div>
  )
}
