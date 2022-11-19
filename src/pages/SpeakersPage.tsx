import { ProductsPageInfoContainer } from "../components";
import { ProductsPagesLayout } from "../components/shared/layout/ProductsPagesLayout"
import { useData } from '../hooks/useData';

export const SpeakersPage = () => {

  const{ speakers:[ firstSpeaker,secondSpeaker ] }=useData();

  return (
    <ProductsPagesLayout tittle="SPEAKERS" >
        <ProductsPageInfoContainer rowReverse={ false } product={ firstSpeaker }  />
        <ProductsPageInfoContainer rowReverse product={ secondSpeaker }  />
    </ProductsPagesLayout>
  )
}
