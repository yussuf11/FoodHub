import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import './GeneralStyle.css'
const Footer = () => {
  return (
   
<section className='bg-[#0c0c0c] flex justify-center text-[white] lg:h-[60vh] m-auto sm:h-[100vh]'>
<div className="Contact bg-[#0c0c0c]">
    <div className="Contact__About">
        <h1 className='text-2xl font-serif mb-5 text-[30px] work'>Contact Us</h1>
<p className='font-light mb-3'>32B Phase2 Lekki, Lagos Nigeria.</p>
<p className='font-light mb-1'>+234-452-7691-652</p>
<p className='font-light mb-1'>+234-452-7691-652</p>
    </div>
    <div className="Contact__Us">
        <h1 className='text-2xl font-serif mb-5 text-[30px] work flex justify-center'>FOODHUB </h1>
        <p className='capitalize leading-8 font-light'>"The Best way to find yourself is to lose yourself in the <br />
            <span className='flex justify-center '>service of others."</span></p>
          <div className="flex justify-center mt-3">
          <BsFacebook className='mr-3'/>
            <BsTwitter className='mr-3'/>
            <BsInstagram className='mr-3'/>
          </div>
            <p className='flex justify-center font-bold mt-5'>2023 FOODHUB. All Rights Reserved.</p>
    </div>
    <div className="Working__Hours">
        <h1 className='text-2xl font-serif mb-5 text-[30px] work'>Working Hours</h1>
        <p className='pp font-light mb-5'>Monday-Friday
        08:00AM-10:00PM
</p>
        <p className='pp capitalize'>
            saturday-sunday
            09:00AM-07:00PM
        </p>
    </div>
    </div>
</section>
  )
}

export default Footer