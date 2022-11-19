import '../../styles/componentsStyles/FirstSectionHome.scss'
import { useNavigate } from 'react-router-dom';



export const FirstSectionHome = () => {

  const navigate=useNavigate();

  return (
    <section className='home-first-sectio' >
      <div> 
        <p className='new-product' >NEW PRODUCT</p>
        <h1>XX99 MARK II <br /> HEADPHONES</h1>
        <p className='info' >Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

        <button onClick={()=>navigate('/product/xx99-mark-two-headphones')} >See Product</button>
      </div>
      

    </section>
  )
}
