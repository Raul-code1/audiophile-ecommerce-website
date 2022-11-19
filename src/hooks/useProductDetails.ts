import { useState, useEffect } from 'react';
import { Product } from '../interfaces/Products';
import products from '../data.json'

export const useProductDetails = ( name:string='' ) => {

    const [productDetail, setProductDetail] = useState<Product[]>([])


        useEffect(() => {
            const singleProduct = products.filter( pro=> pro.slug===name );

            setProductDetail( singleProduct )

        }, [name])
        


    return{
        ...productDetail,
        productDetail
    }
}
