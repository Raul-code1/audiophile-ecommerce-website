import { FC } from 'react';

import '../../styles/componentsStyles/CartItem.scss'
import products from '../../data.json';
import { useCartSlice } from '../../hooks/useCartSlice';


interface Props{
  id:number,
  quantity:number, 
}


export const CartItem:FC<Props> = ({ id,quantity }) => {

    const { productQuantity,startDecreasingQuantity,startIncreasingQuantity }=useCartSlice();

    const product = products.find( item=> item.id === id);

    if ( product===null )return null; 
        
    


  return (
    <div className="items">
    <div>
        <div className='image-container' >
            <img src={`../../../cart/image-${product?.slug}.jpg`} alt="speaker" />
            <div>
                <span className='name' >{ product?.name }</span>
                <span className='price' >${ product?.price }</span>
            </div>
        </div>
        <div className='amount' >
            <span onClick={()=>startDecreasingQuantity( id )} > - </span>
            <span> { quantity } </span>
            <span onClick={()=>startIncreasingQuantity( id )} > + </span>
        </div>
    </div>
</div>
  )
}
