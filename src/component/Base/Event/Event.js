import React from 'react'
import card from "../../../asset/card.jpg"
import cardVideo from "../../../asset/card.mp4"

export const Event = (props) => {
  return (
    <div>
        {/* <img src={card} alt="..." className='eventCard' /> */}
        <video loop="true" autoplay="autoplay" muted className='video-container'>  
   <source src={cardVideo} type="video/mp4" />  
  Your browser does not support the html video tag.  
</video>  
    </div>
  )
}
