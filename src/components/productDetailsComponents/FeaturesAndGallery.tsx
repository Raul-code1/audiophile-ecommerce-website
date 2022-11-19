import { FC } from 'react';

import '../../styles/componentsStyles/FeaturesAndGallery.scss';
import { Product } from '../../interfaces/Products';

interface Props{
    product:Product;
}

export const FeaturesAndGallery:FC<Props> = ({ product }) => {

    // const{ gallery:{ first,second,third } }=product;

    const path =product?.gallery

  return (
    <>
    <div className='features-and-gallery' >
        <div className='features' >
            <h4>FEATURES</h4>
            <p>{ product?.features }</p>
        </div>

        <div className='in-the-box'>
            <div>
                <h4>IN THE BOX</h4>
            </div>
            <div className='includes' >
                { product?.includes.map( (item,i)=><p key={ i } > <span>{ item.quantity }x</span> { item.item } </p> ) }
            </div>
        </div>

    </div>

        <div className='gallery-grid' >
            <div className='one'>
                <img className='mobile' src={`../../${ path?.first.mobile }`} alt={ product?.name } />
                <img className='tablet' src={`../../${ path?.first.tablet }`} alt={ product?.name } />
                <img className='desktop' src={`../../${path?.first.desktop }`} alt={ product?.name } />
            </div>
            <div className='two'>
                <img className='mobile' src={`../../${ path?.second.mobile }`} alt={ product?.name } />
                <img className='tablet' src={`../../${ path?.second.tablet }`} alt={ product?.name } />
                <img className='desktop' src={`../../${path?.second.desktop }`} alt={ product?.name } />
            </div>
            <div className='three'>
                <img className='mobile' src={`../../${ path?.third.mobile }`} alt={ product?.name } />
                <img className='tablet' src={`../../${ path?.third.tablet }`} alt={ product?.name } />
                <img className='desktop' src={`../../${path?.third.desktop }`} alt={ product?.name } />
            </div>
        </div>    
    
    </>
  )
}
