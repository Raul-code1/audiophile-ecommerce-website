import { AiFillCheckCircle } from "react-icons/ai";

import '../../styles/componentsStyles/CheckoutModal.scss';
import { useCartSlice } from '../../hooks/useCartSlice';
import { CheckoutItems } from './CheckoutItems';
import { useUiSlice } from "../../hooks/useUiSlice";
import useMediaQuery from '../../hooks/useMediaQuery';
import products from '../../data.json'
import { useNavigate } from 'react-router-dom';


const shipping=50,
      vat=1079

export const CheckoutModal = () => {

    const navigate= useNavigate();

    const { items }= useCartSlice();

    const{ userInfo:{ name },handleCheckoutModal,showCheckoutModal }=useUiSlice();

    const matches= useMediaQuery('(min-width: 767px)');

    
    const priceTotal=items.reduce(( total,cartItem )=>{
        const item = products.find(each=>each.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity },0)

  return (
    <div className={`checkout-modal-container ${(showCheckoutModal)?'show-modal':''}  `}>
       <section>
            <div className="check-icon">
                 <AiFillCheckCircle />
             </div>
             <div className="info" >
                 <p className="thanks-for-order-message" >THANK YOU FOR YOUR ORDER -- { name } </p>
                 <p className="confirmation" >You will receive an email confirmation shortly.</p>
             </div>
             <div className="items-section" >
                 {
                    !matches ? <div className="items" >
                                    <CheckoutItems {...items[0]} />
                                    <div style={{ textDecoration:'underline',margin:'auto' }} >{
                                        items.length >1 && `You have ${items.length} items more`
                                    } </div>
                                </div>
                            :   <div className="items" >
                                    {  
                                        items.map((item, index) => <CheckoutItems key={ item.id } {...item} />  )
                                    }         

                                </div>
                 }
                 <div className="grand-total-modal" >
                     <p>Grand total</p>
                     <p className="price" >${ priceTotal + shipping + vat }</p>
                 </div>
             </div>        

             <div className="btn-container" >
                 <button onClick={ handleCheckoutModal } >CLOSE</button> 
                 
             </div>
       </section>

    </div>
  )
}
