import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import logo from '../../assets/shared/desktop/logo.svg';
import menuBtn from "../../assets/shared/tablet/icon-hamburger.svg";
import { useUiSlice } from "../../hooks/useUiSlice";
import '../../styles/componentsStyles/NavBar.scss';


export const NavBar = () => {

  const navigate=useNavigate();

  const { handleToggleMenu,handleToggleSHoppingCart }=useUiSlice();

  

  return (
    <nav className="navbar" >
      <div  onClick={ handleToggleMenu } className="hamburgerBtn"> <img src={ menuBtn }  /> </div>

      <div className="logo" > <img src={ logo } alt="Audiophile" /> </div>
      <ul>
        <li onClick={()=>navigate('/')} >HOME</li>
        <li onClick={()=>navigate('/headphones')} >HEADPHONES</li>
        <li onClick={()=>navigate('/speakers')} >SPEAKERS</li>
        <li onClick={()=>navigate('/earphones')} >EARPHONES</li>
      </ul>

      <div  onClick={ handleToggleSHoppingCart } className="shoppingCart" > <FiShoppingCart /> </div>
    </nav>
  )
}
