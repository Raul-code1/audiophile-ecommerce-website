import { useNavigate } from 'react-router-dom';

import { useUiSlice } from '../../hooks/useUiSlice';
import '../../styles/componentsStyles/MobileMenu.scss';
import headphonesThumbnail  from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakersThumbnail  from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesThumbnail  from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import arrow from '../../assets/shared/desktop/icon-arrow-right.svg'

export const MobileMenu = () => {

  const{ showMobileMenu,handleToggleMenu }=useUiSlice();
  const navigate=useNavigate();


  return (
    <div onClick={ handleToggleMenu }  className={`mobile-menu-container ${( showMobileMenu ) && 'toggle-menu' }   `} >

        <div className={`options   ${( showMobileMenu ) && 'toggle-menu' } `} >

              <div className='thumbnail-boxes'>
                  <div className='image-box'><img src={ headphonesThumbnail } alt="HEADPHONES" /></div>
                  <div className='category-title' >HEADPHONES  </div>
                  <button onClick={()=>navigate('/headphones') } ><span onClick={()=> handleToggleMenu()} >SHOP</span> <img src={ arrow }  /> </button>
              </div>

              <div className='thumbnail-boxes'>
                  <div className='image-box'><img src={ speakersThumbnail } alt="HEADPHONES" /></div>
                  <div className='category-title' >SPEAKERS</div>
                  <button onClick={()=>navigate('/speakers')} ><span onClick={()=> handleToggleMenu()} >SHOP</span> <img src={ arrow }  /> </button>
              </div>

              <div className='thumbnail-boxes'>
                  <div className='image-box'><img src={ earphonesThumbnail } alt="HEADPHONES" /></div>
                  <div className='category-title' >EARPHONES  </div>
                  <button onClick={()=>navigate('/earphones')} ><span onClick={()=> handleToggleMenu()} >SHOP</span>  <img src={ arrow }  /> </button>
              </div>

        </div>
    </div>
  )
}
