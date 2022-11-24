import { useCartSlice } from "../../hooks/useCartSlice";
import { CheckoutItems } from "./CheckoutItems";
import '../../styles/componentsStyles/ChekoutSummary.scss';
import products from '../../data.json'
import { useUiSlice } from "../../hooks/useUiSlice";

const shipping=50,
      vat=1079,
      grandTotal=0;


export const ChekoutSummary = () => {
    

    const { userInfo,handleCheckoutModal }=useUiSlice();

    const  { items }= useCartSlice();

    const priceTotal=items.reduce(( total,cartItem )=>{
      const item = products.find(each=>each.id === cartItem.id)
      return total + (item?.price || 0) * cartItem.quantity },0)

  return (
    <div className="summary-container" >
        <h6>SUMMARY</h6>

        <div className="" style={{flexDirection:'column',display:'flex'}} >
          {   
              items.map( item=> <CheckoutItems key={ item.id } {...item}  /> )
          }
        </div>

        <div>
          <span className="title" >TOTAL</span>
          <span className="summary-numbers">${ priceTotal }</span>
        </div>
        <div>
          <span className="title" >Shipping</span>
          <span className="summary-numbers">${ shipping }</span>
        </div>
        <div>
          <span className="title" >VAT (INCLUDED)</span>
          <span className="summary-numbers">${ vat }</span>
        </div>
        <div>
          <span className="title" >GRAND TOTAL</span>
          <span className="total" >${ vat + shipping + priceTotal }</span>
        </div>
          
          <div className="btn" >
            { userInfo.name.length>0 && <button onClick={ handleCheckoutModal } >CONTINUE & PAY</button> }
          
          </div>

    </div>
  )
}
