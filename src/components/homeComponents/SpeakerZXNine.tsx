import { useNavigate } from 'react-router-dom';

import '../../styles/componentsStyles/ProductsHomePage.scss'
import circlePatter from '../../assets/home/desktop/pattern-circles.svg'
import mobileImage from '../../assets/home/mobile/image-speaker-zx9.png'
import tabletImage from '../../assets/home/tablet/image-speaker-zx9.png'
import desktopImage from '../../assets/home/desktop/image-speaker-zx9.png'


export const SpeakerZXNine = () => {

  
  const navigate=useNavigate();

  return (
    <div className='zx-nine-speaker' >

        <div> <img className='circlePattern'  src={ circlePatter } alt="" /> </div> 

        <div className='image-container' >
            <img className='mobile' src={ mobileImage } alt="" />
            <img className='tablet' src={ tabletImage } alt="" />
            <img className='desktop' src={ desktopImage } alt="" />
        </div>

        <div className='info' >
            <h2>ZX9  <br /> SPEAKER</h2>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button onClick={()=>navigate('/product/zx9-speaker')} >SEE PRODUCT</button>
        </div>
    </div>
  )
}
