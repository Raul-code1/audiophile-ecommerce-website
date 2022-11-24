import { CheckoutForm, CheckoutModal, ChekoutSummary, Footer, NavBar } from "../components"
import '../styles/componentsStyles/Checkout.scss';
import { useUiSlice } from '../hooks/useUiSlice';
import { useNavigate } from 'react-router-dom';
import { useCartSlice } from '../hooks/useCartSlice';



export const Checkout = () => {

  const { showCheckoutModal }=useUiSlice ();

  const { removingAllItemsFromCart }=  useCartSlice();

  const navigate=useNavigate();

  const handleAfterPaying = () => {
    navigate('/')
    removingAllItemsFromCart();
  }

  return (
    <>
        <NavBar/>
          
          <div  onClick={ ()=>handleAfterPaying()} className="back-btn-checkout" >
            <p> BACK TO HOME</p>
          </div>

          <CheckoutModal /> 

          <div className="check-out-view-container" >
              <CheckoutForm />
              <ChekoutSummary />
          </div>
        
        <Footer />
    
    </>
  )
}
