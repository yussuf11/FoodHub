import React from 'react'

const MenuItem = ({title, price, tags}) => {
  return (
 <div className="app_menuitem">
   <div className="app__menuitem-head">
   <div className="app__menuitem-name">
  <p className="p__cormorant text-[#dcca87]">{title}</p>
 </div>

<div className='app__menuitem-dash'/>

 <div className="app__menuitem-price">
  <p className="p__cormorant text-[#fff]">{price}</p>
 </div>
  </div>

  <div className="app__menuitem-sub">
    <p className="p__opensans text-[#AAA]">{tags}</p>
  </div>
 </div>
  )
}

export default MenuItem