import { FC, PropsWithChildren } from "react"

import { NavBar,Footer,BestAudioGear,MobileMenu,ShoppingCart } from "../"


interface Props extends PropsWithChildren{}


export const MainLayout:FC<Props> = ({ children }) => {


  return (
    <div>
      <NavBar />

      <MobileMenu />
      <ShoppingCart />

      { children }
      
      <BestAudioGear />

      <Footer />
    </div>
  )
}
