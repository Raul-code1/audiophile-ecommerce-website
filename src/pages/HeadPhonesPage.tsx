

import { useData } from '../hooks/useData';
import { ProductsPagesLayout } from "../components/shared/layout/ProductsPagesLayout"
import { ProductsPageInfoContainer } from "../components";


export const HeadPhonesPage = () => {

    const{ headPhones:[firstHeadphone,secondHeadphone,thirdHeadphone] }=useData();

    

  return (
    <ProductsPagesLayout tittle="HEADPHONES" >

        <ProductsPageInfoContainer rowReverse={ false } product={ thirdHeadphone } />
        <ProductsPageInfoContainer rowReverse product={ secondHeadphone } />
        <ProductsPageInfoContainer rowReverse={ false } product={ firstHeadphone } />
      
    </ProductsPagesLayout>
  )
}
