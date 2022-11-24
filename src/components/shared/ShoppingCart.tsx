import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

import { useUiSlice } from "../../hooks/useUiSlice";
import '../../styles/componentsStyles/ShoppingCart.scss';
import { CartItem } from './CartItem';
import { useCartSlice } from '../../hooks/useCartSlice';
import products from '../../data.json'

export const ShoppingCart = () => {

    const navigate=useNavigate();

    const{ showShoppingCart,handleToggleSHoppingCart }=useUiSlice();

    const { removingAllItemsFromCart,totalCount, items }=useCartSlice();

  

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
                <div>${ items.reduce(( total,cartItem )=>{
                    const item = products.find(each=>each.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity },0) }</div>
            </div>

            <div className='btn' >
                {
                    totalCount> 0 && <button  onClick={()=>navigate('/checkout')} >CHECKOUT</button>
                }
            </div>

        </div>

       

    </div>
  )
}
