import React from 'react'
import knife from '../images/s1 - Copy.png';
import './GeneralStyle.css';
import './Styles.css'
const About = () => {
  return (
    <section className='about' id='about'>
    <div className="AboutUs">
        <div className='About__Us'>
<h1 className="headtext__cormorant">About Us</h1>
<p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
             Animi beatae corporis itaque id ipsa nulla ut vitae totam, <br />
              adipisci obcaecati similique cum consectetur aliquid laboriosam.
</p>
<button className='custom__button relative top-5'>Know More</button>
        </div>
        <div className='About__Knife'>
<img src={knife} alt="" className='w-[100%] h-[100vh] object-contain'/>
</div>
<div className='About__History'>
<h1 className="headtext__cormorant">
            Our History
          </h1>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
             Animi beatae corporis itaque id ipsa nulla ut vitae totam, <br />
              adipisci obcaecati similique cum consectetur aliquid laboriosam.
          </p>
          <button className='custom__button relative top-5'>Know More</button>
</div>
    </div>
    </section>
  )
}

export default About