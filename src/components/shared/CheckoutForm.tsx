import { useForm } from 'react-hook-form';

import '../../styles/componentsStyles/CheckoutForm.scss';
import { useUiSlice } from '../../hooks/useUiSlice';

export type FormData={
    name:string;
    email:string;
    phoneNumber:string;
    userAddress:string;
    zipCode:number;
    city:string;
    country:string;
    eMoney:boolean;
    cashOnDelivery:boolean;
    
}


export const CheckoutForm = () => {

    const { setUserInfo,userInfo }=useUiSlice();

    const { register,handleSubmit,formState:{ errors },watch }=useForm<FormData>();

    const onSubmit=handleSubmit(( values )=>{
        console.log( values );
        setUserInfo(values.name);
        
        
    })
    
    const chosingEmoney=watch('eMoney');
    const chosingCashOnDelivery=watch('cashOnDelivery');

  return (
    <div className='form-container' >
        <h6>CHECKOUT</h6>
        <form onSubmit={ onSubmit } >
            <div>
                <p>BILLING DETAILS</p>
                <div className='inputs-container' >
                    <div>
                        <label className='labels'  >Name</label>  <br />
                        <input className='inputs' {...register('name',{required:true})} type="text" placeholder="Your name" />
                        {errors.name?.type==='required' && <p style={{ color:'red',fontSize:'15px' }} >Enter your name</p> }
                    </div>
                    <div>
                        <label className='labels'  > Email Address</label> <br />
                        <input className='inputs'{...register('email',{required:true  })} type="email" placeholder="example@google.com" />
                        {errors.email?.type==='required' && <p style={{ color:'red',fontSize:'15px' }} >Wrong format</p> }
                    </div>
                    <div>
                        <label  className='labels' >Phone number</label> <br />
                        <input className='inputs' {...register('phoneNumber',{required:true}) } type="text" placeholder="+1 202-555-0136" />
                        {errors.phoneNumber?.type==='required' && <p style={{ color:'red',fontSize:'15px' }} >Enter your phone number</p> }
                    </div>

                </div>
            </div>
            <div>
                <p>SHIPPING INFO </p>
                <div className='inputs-container' >

                    <div className='your-address' >
                        <label className='labels  ' >Your Address</label>  <br />
                        <input className='inputs' {...register('userAddress',{required:true}) } type="text" placeholder="1137 Williams Avenue" />
                        {errors.userAddress?.type==='required' && <p style={{ color:'red',fontSize:'15px' }} >Enter your Address</p> }
                    </div>
                    <div className='zip-code' >
                        <label className='labels'  >ZIP code</label> <br />
                        <input className='inputs'{...register('zipCode',{required:true,minLength:5})} type="text" placeholder="10001" />
                        {errors.zipCode?.type==='required' && <p style={{ color:'red',fontSize:'15px' }} >Incorrect zip code</p> }
                        {errors.zipCode?.type==='minLength' && <p style={{ color:'red',fontSize:'15px' }} >5  digits max</p> }
                    </div>
                    <div>
                        <label  className='labels' >City</label> <br />
                        <input className='inputs' {...register('city',{required:true})} type="text" placeholder="New York" />
                        {errors.city?.type==='required' && <p style={{ color:'red',fontSize:'15px' }} >Enter your city</p> }
                    </div>
                    <div>
                        <label  className='labels' >Country</label> <br />
                        <input className='inputs' {...register('country',{required:true})} type="text" placeholder="United States" />
                        {errors.country?.type==='required' && <p style={{ color:'red',fontSize:'15px' }} >Enter your country</p> }
                    </div>

                </div>
            </div>
            <div>
                <p>PAYMENT DETAILS </p>
                
                <div className='  payment-details' >

                    <div className='payment-method' >
                        <div>Payment Method</div>
                    </div>
                   {
                    !chosingCashOnDelivery &&  <div className='checkbox  e-money'>
                                                    <input  {...register('eMoney')} type="checkbox" />
                                                    <span>e-money</span>
                                                </div>
                   }
                    {
                        !chosingEmoney && <div className='checkbox cash-on-delivery ' >
                                            <input {...register('cashOnDelivery')} type="checkbox" />
                                            <span>Cash on Delivery</span>
                                        </div>
                    }
                  

                </div>
                <div className="e-money-options">
                  {
                    chosingEmoney && <>  <div>
                                            <label   >e-Money Number</label> <br />
                                            <input  className='e-money-inputs'  type="text" placeholder="238521993" />
                                        </div>
                                        <div>
                                            <label   >e-Money PIN</label> <br />
                                            <input className='e-money-inputs' type="text" placeholder="6891" />
                                        </div></>
                  }

                  {
                    chosingCashOnDelivery && <p>The Cash on Delivery option enables you to pay in cash when our delivery courier arrives at your residence.
                                                Just make sure your address is correct so that your order will not be cancelled.</p>
                  }
                </div>
            </div>

            <input className='submit'  type="submit" value='Complete Form' />

        </form>

    </div>
  )
}
