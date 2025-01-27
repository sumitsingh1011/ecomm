import React from 'react'
import  './CSS/loginsignup.css'

const login = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sing Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name'/>
          <input type="email" placeholder='email address' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have a account <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name=''id='' />
          <p>By Continuing ,i agree to the term of use & private policy </p>
        </div>
      </div>
      </div>
  )
}

export default login
  