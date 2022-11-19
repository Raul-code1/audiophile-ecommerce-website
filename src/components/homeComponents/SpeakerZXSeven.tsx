import { useNavigate } from 'react-router-dom';

import '../../styles/componentsStyles/SpeakerZXSeven.scss';

export const SpeakerZXSeven = () => {

  const navigate=useNavigate();

  return (
    <div className='zx-sevene-speaker'>
      <div>
        <h2>ZX7 SPEAKER</h2>
        <button onClick={()=>navigate('/product/zx7-speaker')} >SEE PRODUCT</button>
      </div>
    </div>
  )
}
