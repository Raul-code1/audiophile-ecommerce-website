import { FC, PropsWithChildren } from 'react';

import { MainLayout } from "./MainLayout"
import { CategoryThumbnail } from '../CategoryThumbnail';

interface Props extends PropsWithChildren{
    tittle?:string;
}

export const ProductsPagesLayout:FC<Props> = ({ children,tittle }) => {
  return (
    <MainLayout>
       {
        (tittle) && 
        <header style={{ 
          backgroundColor:'#101010',
          color:'white',textAlign:'center',
          padding:50,
          fontSize:30
        }} >
          { tittle }
        </header>
       }

        {  children }

        <CategoryThumbnail />
    </MainLayout>
  )
}
