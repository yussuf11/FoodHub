import React, { useRef } from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import image1 from '../images/s3 - Copy.png';
import image3 from '../images/s1 - Copy.png'
import image2 from '../images/delivery-img.png';
import SubHeading from './SubHeading';
const Images = [image1, image2, image1, image2, image3, image2]
const Gallery = () => {
const scrollRef = useRef(null);
const scroll = (direction) =>{
  const {current} = scrollRef;
  if(direction === 'left'){
    current.scrollLeft -= 300;
  } else{
    current.scrollLeft += 300;
  }
}
  return (
<div className="app__gallery flex__center">

<div className="app__gallery-content">
  <SubHeading title="Instagram" />
  <h1 className="headtext__cormorant">Photo Gallery</h1>
  <p className="p__opensans text-[#aaa] mt-[2rem]">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />
     Deserunt, tempore omnis impedit voluptatem nostrum quae.
  </p>
  <button className="custom__button">View More</button>
</div>
<div className="app__gallery-images">
  <div className="app__gallery-images_container" ref={scrollRef}>
    {
      Images.map((image, index) => (
        <div className="app__gallery-images_card flex__center" key={`Images-${index + 1}`}>
          <img src={image} alt="gallery" />
          <BsInstagram className='gallery__image-icon' />
        </div>
      ))
    }
  </div>
  <div className="app__gallery-images_arrows">
    <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
    <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
  </div>
</div>
</div>
  )
}

export default Gallery