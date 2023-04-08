import React from 'react'
import image1 from '../images/app.png';

const FindUs = () => {
  return (
    <div className='bg-[#000] text-white' id='contact'>
    <section className='contact__details'>
        <div className="contact">
<h1 className='headtext__cormorant mb-5'>Find Us</h1>
<address className='mb-5 flex'> Lekki Phase2 Hall Lane, Lagos</address>

<p className=' text-[20px] mb-5 text-[#dcca87] font-serif'>Opening Hours</p>

<p className='para'>Mon-Fri: 08:00 AM - 10:00 PM </p>
<p className='mb-5 para'>Sat-Sun: 10:00 AM - 06:00 PM</p>
<button className="custom__button">View Us</button>
        </div>
        <div className="image__food ">
<img src={image1} alt="" className='w-[100%] h-[90vh] m-5 object-contain' />
</div>
    </section>
    </div>
  )
}

export default FindUs