import { useNavigate } from 'react-router-dom';
import { AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram } from "react-icons/ai";


import '../../styles/componentsStyles/Footer.scss'
import logo from '../../assets/shared/desktop/logo.svg';

export const Footer = () => {

  const navigate=useNavigate();

  return (
    <footer>
      
      <div className='logo-with-optioms' >
          <div> <img src={ logo } alt="AudioPhile" /></div>
          <ul>
            <li onClick={()=>navigate('/')} >HOME</li>
            <li onClick={()=>navigate('/headphones')} >HEADPHONES</li>
            <li onClick={()=>navigate('/speakers')} >SPEAKERS</li>
            <li onClick={()=>navigate('/earphones')} >EARPHONES</li>
          </ul>
      </div>

      <div className='info-and-networks'>
        <p className="info" >Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted 
          to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
          <div  >
            <p>Copyright 2021. All Rights Reserved</p>
            <div className='networks' >
                <span><AiFillFacebook /></span>
                <span><AiOutlineTwitter /></span>
                <span><AiOutlineInstagram   /></span>
            </div>
          </div>
      </div>


    </footer>
  )
}
