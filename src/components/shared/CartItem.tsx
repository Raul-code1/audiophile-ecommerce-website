import { FC } from 'react';

import '../../styles/componentsStyles/CartItem.scss'
import { Product } from '../../interfaces/Products';


interface Props{
    product:Product;  
}


export const CartItem:FC<Props> = ({ product }) => {
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
            <span> - </span>
            <span> 1 </span>
            <span> + </span>
        </div>
    </div>
</div>
  )
}
