import React from 'react'
import spoon from '../images/spoon.png'
const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom: '1rem'}}>
        
    <p className='p__cormorant text-white capitalize text-[42px] paragraph mt-5 font-bold '>{title}</p>
    <img src={spoon} alt="spoon" className=''/>
    </div>
  )
}

export default SubHeading