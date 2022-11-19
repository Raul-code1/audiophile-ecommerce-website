import { useNavigate } from 'react-router-dom';

import '../../styles/componentsStyles/EarphonesYXone.scss';


export const EarphonesYXone = () => {

  const navigate=useNavigate();

  return (
    <div className="yx-one-earphones" >
        <div className='image-container'></div>

        <div  className='info'>
            <h2>YX1 EARPHONES</h2>
            
            <button onClick={()=>navigate('/product/yx1-earphones')} >SEE PRODUCT</button>
        </div>
    </div>
  )
}
