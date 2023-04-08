import React from 'react'
import './GeneralStyle.css';
import './Styles.css';
import image from '../images/dishes.png';
import SubHeading from './SubHeading';
const Header = () => {
  return (
<div className="app__header app__wrapper section__padding flex-wrap" id='home'>
  <div className="app_wrapper_info">
  <SubHeading title="Chase the New Flavour" />
  <h1 className="app__header-h1">The Key to <br /> Fine Dining</h1>
  <p className="p__opensans" style={{margin:'2rem 0'}}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
    Ipsa illo inventore voluptates hic similique,iste atque <br />
     dolor nihil dolorum ex, nulla esse aut. Labore, vero!
  </p>
  <button className='custom__button'>Explore Menu</button>
  </div>
  <div className="app__wrapper_img">
  <img src={image} alt="images" className='w-[100%] h-[70vh] object-contain'/>
  </div>
</div>
  )
}

export default Header