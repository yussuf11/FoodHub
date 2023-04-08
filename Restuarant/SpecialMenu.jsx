import React from 'react'
import SubHeading from './SubHeading'
import { cocktails, wines } from './DataLocation'
import MenuItem from './MenuItem'
const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id='menu'>
<div className="app__specialMenu-title">
  <SubHeading title="Menu that fits your palace."/>
<h1 className="headtext__cormorant">Today's Special</h1>
</div>
<div className="app__specialMenu-menu">
  <div className="app__specialMenu-menu_wine flex__center">
    <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
    <div className="app__specialMenu-menu_items">
      {
        wines.map((wine, index) => (
       <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
        ))
      }
    </div>
  </div>
  <div className="app__specialMenu-menu_img">
    {/* image */}
  </div>
  <div className="app__specialMenu-menu_cocktails flex__center">
    <p className='app__specialMenu_menu_heading'>Cocktails</p>
    <div className="app__specialMenu-menu_items">
      {
        cocktails.map((cocktail, index) => (
          <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
        ))
      }
    </div>
  </div>
</div>

<div className="mt-[15px]">
  <button type='button' className='custom__button'>View More</button>
</div>
    </div>
  )
}

export default SpecialMenu