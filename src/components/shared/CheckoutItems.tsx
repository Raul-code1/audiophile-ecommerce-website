import { FC } from 'react';

import products from '../../data.json';
import '../../styles/componentsStyles/CheckoutItems.scss';

interface Props{
    id:number,
    quantity:number;
}


export const CheckoutItems:FC<Props> = ({ id,quantity }) => {

    const product= products.find( prod=> prod.id === id);

    

  return (
    <div className='item-container' >
     <div>
     <div className='image-container' >
        <img src={`../../../cart/image-${product?.slug}.jpg`} alt="" />
      </div>
      <div className='name-price' >
        <p className='name' >{ product?.name }</p> 
        <p className='price' >{ product?.price }</p>
      </div>
     </div>
        <div>
          <p className='quantity' > X { quantity }</p>
        </div>
    </div>
  )
}
