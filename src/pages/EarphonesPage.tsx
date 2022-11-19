import { ProductsPageInfoContainer } from "../components";
import { ProductsPagesLayout } from "../components/shared/layout/ProductsPagesLayout"
import { useData } from '../hooks/useData';

export const EarphonesPage = () => {

    const{ earphones:[ onlyEarphones ] }=useData();

  return (
    <ProductsPagesLayout tittle="EARPHONES" >
        <ProductsPageInfoContainer rowReverse={ false }  product={ onlyEarphones } />
    </ProductsPagesLayout>
  )
}
