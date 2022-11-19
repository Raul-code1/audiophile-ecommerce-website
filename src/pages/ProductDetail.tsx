import { useParams } from "react-router-dom"


import { ProductsPagesLayout } from "../components/shared/layout/ProductsPagesLayout"
import { useProductDetails } from "../hooks/useProductDetails";
import { FeaturesAndGallery, OthersProducts, ProductPrice } from "../components/productDetailsComponents";

export const ProductDetail = () => {

  const{ name }=useParams();

  
 const { productDetail:[ product ] }= useProductDetails( name );

 
 

  return (
    <ProductsPagesLayout>

      

       <ProductPrice product={ product } />

       <FeaturesAndGallery product={ product } />

       <OthersProducts  product={ product }  />
      
    </ProductsPagesLayout>
  )
}
