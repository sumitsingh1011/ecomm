import React from 'react'
import './mainhero.css' 
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const mainhero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>  <img src={hand_icon} alt="" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-button">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right"></div>
      <img src={hero_image} alt="" />
    </div>
  )
}

export default mainhero
