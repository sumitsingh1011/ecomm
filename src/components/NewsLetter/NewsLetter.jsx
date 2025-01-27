import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Get Exclisive Offers On Yoyr Email</h1>
      <p>subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='enter email' />
        <button>subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
