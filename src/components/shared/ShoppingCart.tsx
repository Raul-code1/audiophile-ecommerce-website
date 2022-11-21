import { AiOutlineClose } from "react-icons/ai";

import { useUiSlice } from "../../hooks/useUiSlice";
import '../../styles/componentsStyles/ShoppingCart.scss';
import { CartItem } from './CartItem';
import { useCartSlice } from '../../hooks/useCartSlice';

export const ShoppingCart = () => {

    const{ showShoppingCart,handleToggleSHoppingCart }=useUiSlice();

    const { removingAllItemsFromCart,totalPrice,totalCount,
    /* DESPUEEES */
    items
    }=useCartSlice();

  

  return (
    <div   className={`container ${( showShoppingCart ) && 'opacity'} `} >

        <div className={`shopping-cart  ${( showShoppingCart ) && 'show-car'}   `}>

            <div onClick={ handleToggleSHoppingCart }  className="close-btn" > <AiOutlineClose /> </div>
            <div className='header' >
                <span>Cart{`(${totalCount})`}</span>
                <span onClick={()=>removingAllItemsFromCart()} className="remove-all" > Remove all </span>
            </div>

            {
            items.length===0 
                ? <p className="no-items" >You dont have any items 😥</p>
                : items.map((item, index) => <CartItem  key={index} {... item } />)

            }

            <div className="total">
                <div>Total</div>
                <div>${ totalPrice }</div>
            </div>

            <div className='btn' >
                <button  onClick={ handleToggleSHoppingCart } >CHECKOUT</button>
            </div>

        </div>

       

    </div>
  )
}
