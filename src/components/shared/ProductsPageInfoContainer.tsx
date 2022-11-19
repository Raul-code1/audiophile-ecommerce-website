import '../../styles/componentsStyles/ProductsPageInfoContainer.scss'
import { Product } from '../../interfaces/Products';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';




interface Props{
    product:Product;
    rowReverse:boolean;
  
}


export const ProductsPageInfoContainer:FC<Props> = ({ product,rowReverse }) => {

    const navigate=useNavigate();

  return (
    <div className={`products-info-page  ${( rowReverse )?'row-reverse':'normal-row'} `} >
        <div className='image-container' >
            <img  className='mobile' src={ product?.image.mobile } alt={ product?.name } />
            <img  className='tablet' src={ product?.image.tablet } alt={ product?.name } />
            <img  className='desktop' src={ product?.image.desktop } alt={ product?.name } />
            
        </div>

        <div className='info' >
          <p className='new-product' >{ product?.new && 'NEW PRODUCT' }</p>
          <h3 className='product-name' >{ product?.name }</h3>
          <p className='product-description' >{ product?.description } </p>
          <button onClick={()=>navigate(`/product/${ product?.slug }`)} >SEE PRODUCT </button>

        </div>
        
    </div>

  )
}
