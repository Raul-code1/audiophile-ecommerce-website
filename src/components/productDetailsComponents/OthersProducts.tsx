import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Product } from "../../interfaces/Products";
import '../../styles/componentsStyles/OthersProducts.scss'

interface Props{
  product:Product;
}


export const OthersProducts:FC<Props> = ({ product }) => {

    const navigate=useNavigate();

  const path=product?.others || ''

  return (
    <div className="others-container"  >
      <h4>YO MAY ALSO LIKE</h4>

      <div className='products-container' >

          <div className='product' >
              <div className='image-container' >
                <img className="mobile"  src={ `../../${path[0]?.image.mobile}` } alt={ product?.name } />
                <img className="tablet"  src={ `../../${path[0]?.image.tablet}` } alt={ product?.name } />
                <img className="desktop"  src={ `../../${path[0]?.image.desktop}` } alt={ product?.name } />
              </div>
              <h5>{ path[0]?.name }</h5>
              <button onClick={()=>navigate(`/product/${path[0].slug}`)} >SEE PRODUCT</button>
          </div>

          <div className='product' >
              <div className='image-container' >
                <img className="mobile"  src={ `../../${path[1]?.image.mobile}` } alt={ product?.name } />
                <img className="tablet"  src={ `../../${path[1]?.image.tablet}` } alt={ product?.name } />
                <img className="desktop"  src={ `../../${path[1]?.image.desktop}` } alt={ product?.name } />
              </div>
              <h5>{ path[1]?.name }</h5>
              <button onClick={()=>navigate(`/product/${path[1].slug}`)} >SEE PRODUCT</button>
          </div>
          
          <div className='product' >
              <div className='image-container' >
                <img className="mobile"  src={ `../../${path[2]?.image.mobile}` } alt={ product?.name } />
                <img className="tablet"  src={ `../../${path[2]?.image.tablet}` } alt={ product?.name } />
                <img className="desktop"  src={ `../../${path[2]?.image.desktop}` } alt={ product?.name } />
              </div>
              <h5>{ path[2]?.name }</h5>
              <button onClick={()=>navigate(`/product/${path[2].slug}`)} >SEE PRODUCT</button>
          </div>


      </div>


    </div>
  )
}
