import React from 'react'
import quote from '../images/quote.png'
import Copy from '../images/chef.png'
import SubHeading from './SubHeading'
import './GeneralStyle.css'
import './Styles.css'
const ChefMenu = () => {
  return (
    <div className="bg-black">
    <div className="flex flex-wrap lg:justify-between w-[90%] m-auto  bg-black chef">
     <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={Copy} alt="Copy" className='w-[100%] h-[70vh] object-contain mt-8' />
     </div>
     <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={quote} alt="quote" className='h-[10vh] w-[10%] object-contain' />
                    <p className="p__opensans text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing<br />
             elit. Vel rem hic laudantium cum voluptates quaerat eligendi!
          </p>
        </div>
        <p className="p__opensans text-white">Lorem ipsum dolor sit amet consectetur <br />
         adipisicing elit. Maxime, iste! Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Cupiditate, doloremque.</p>
      </div>

      <div className="app__chef-sign">
        <p className='text-[25px] uppercase text-[#dcca87] space-x-2'>Kelvin Luo</p>
        <p className='text-white'>Chef & Founder</p>
      </div>
     </div>
    </div>
    </div>
  )
}

export default ChefMenu