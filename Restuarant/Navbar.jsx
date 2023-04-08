import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import './GeneralStyle.css'
import './Styles.css'
const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false)
  return (
<nav className='app__navbar'>
<div className="app__navbar-logo">
<h1 className='text-white ml-10 text-[35px]'>FOODHUB</h1>
</div>
<ul className='app__navbar-links'>
  <li className='p__opensans'>
    <a href="#home">Home</a>
  </li>
  <li className='p__opensans'>
    <a href= "#about" >About</a>
  </li>
  <li className='p__opensans'>
    <a href="#menu">Menu</a>
  </li>
  <li className='p__opensans'>
    <a href="#contact">Contact</a>
  </li>
</ul>

<div className="app__navbar-login">
  <a href="#login" className='p__opensans'>Log In | Register</a>

<a href="/" className='p__opensans'>Book Table</a>
</div>
<div className="app__navbar-smallscreen">
  <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => settoggleMenu(true)} />
  { toggleMenu && (
    <div className="app__navbar-smallscreen_overlay flex__center"> 
      <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=> settoggleMenu(false)} />
  <ul className='app__navbar-smallscreen_links'> 
  <li className='p__opensans'>
    <a href="#home">Home</a>
  </li>
  <li className='p__opensans'>
    <a href= "#about" >About</a>
  </li>
  <li className='p__opensans'>
    <a href="#menu">Menu</a>
  </li>
  <li className='p__opensans'>
    <a href="#contact">Contact</a>
  </li>
  </ul>
  </div>

  )}
  </div>
</nav>
  )
}

export default Navbar