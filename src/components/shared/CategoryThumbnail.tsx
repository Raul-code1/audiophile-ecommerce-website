import { useNavigate } from 'react-router-dom';


import '../../styles/componentsStyles/CategoryThumbnail.scss';
import headphonesThumbnail  from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakersThumbnail  from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesThumbnail  from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import arrow from '../../assets/shared/desktop/icon-arrow-right.svg'


export const CategoryThumbnail = () => {

    const navigate=useNavigate();



  return (
    <div className='category-container  .dinamyc-styles'>

        <div className='thumbnail-boxes'>
            <div className='image-box'><img src={ headphonesThumbnail } alt="HEADPHONES" /></div>
            <div className='category-title' >HEADPHONES  </div>
            <button onClick={()=> navigate('/headphones') } >SHOP  <img src={ arrow }  /> </button>
        </div>

        <div className='thumbnail-boxes'>
            <div className='image-box'><img src={ speakersThumbnail } alt="HEADPHONES" /></div>
            <div className='category-title' >SPEAKERS</div>
            <button onClick={()=>navigate('/speakers')} >SHOP <img src={ arrow }  /> </button>
        </div>

        <div className='thumbnail-boxes'>
            <div className='image-box'><img src={ earphonesThumbnail } alt="HEADPHONES" /></div>
            <div className='category-title' >EARPHONES  </div>
            <button onClick={()=>navigate('/earphones')} >SHOP  <img src={ arrow }  /> </button>
        </div>
        
    </div>
  )
}
