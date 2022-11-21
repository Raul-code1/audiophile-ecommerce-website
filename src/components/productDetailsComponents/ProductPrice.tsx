import { FC, useEffect } from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";

import { Product } from "../../interfaces/Products";
import '../../styles/componentsStyles/ProductPrice.scss'
import { useNavigate } from 'react-router-dom';
import { useCartSlice } from '../../hooks/useCartSlice';


interface Props {
    product:Product;
}

export const ProductPrice:FC<Props> = ({ product  }) => {

    const navigate=useNavigate();    
    const {  gettingProductQuantity,productQuantity,startIncreasingQuantity,items,startDecreasingQuantity }=useCartSlice();

    useEffect(() => {  
        gettingProductQuantity( product?.id )
    }, [items])
  

  return (
    <>
    <div className='go-back-btn' onClick={()=>navigate(-1)}  > <IoIosArrowDropleftCircle /> </div>
    <div className="product-price-container" >

       

        <div className="image-container" >
            <img  className="mobile" src={ `../../../${product?.image.mobile}` } alt={ product?.name } />
            <img  className="tablet" src={ `../../../${product?.image.tablet}` } alt={ product?.name } />
            <img  className="desktop" src={ `../../../${product?.image.desktop}` } alt={ product?.name } />
        </div>

        <div className="info">
            <p className="new" >{ product?.new && 'NEW PRODUCT' }</p>
            <h3>{ product?.name }</h3>
            <p className="description" >{ product?.description }</p>
            <div className="price">${ product?.price }</div>
            <div className="amount">
               {
                productQuantity>0 &&     <div> 
                                            <span onClick={()=>startDecreasingQuantity( product?.id )}  className="operations">-</span>
                                            <span>{ productQuantity }</span>
                                            <span onClick={()=>startIncreasingQuantity( product?.id )} className="operations">+</span>
                                        </div>
               }

                <button onClick={()=>startIncreasingQuantity( product?.id )} > ADD TO CART </button>
            </div>

        </div>

    </div>

    </>
  )
}
