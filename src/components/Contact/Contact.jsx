import React from 'react'
import './Contact.css'
import {AiOutlineDollarCircle} from "react-icons/ai"
import {BsEmojiSmile} from "react-icons/bs"

const contact =()=>{
  return (
    <>
    <div id='co'className="cont">
    <div className="intro11">
      <button className='intro-btn1'> <AiOutlineDollarCircle className='icon'/> MY CONTACT</button>
    </div>
    <div className="main-card">
      <h3 className='h3txt4'>Let's Work <span className='span6'>Together</span></h3>
      <p className='para9'>Arbaj.carrier@gmail.com</p>
    </div>
    <div className="input-contact">
      <div className="input-1">
        <ul className='ul-input'>
        <p className='fn'>FULL NAME <span className='spanx'>*</span></p>
        <input className='inpt' type="text" name="" placeholder='Enter your Full Name' />
        </ul>
        <ul className='ul-input'>
        <p className='fn'>PHONE (optional)<span className='spanx'>*</span></p>
        <input className='inpt' type="text" name="" placeholder='Enter Phone Number' />
        </ul>
        <ul className='ul-input'>
        <p className='fn'>Message<span className='spanx'>*</span></p>
        <input className='inpt' type="text" name="" placeholder='Your Message here .........' />
        </ul>
      </div>
      <div className="input-2">
      <ul className='ul-input'>
        <p className='fn'>E-MAIL<span className='spanx'>*</span></p>
        <input className='inpt' type="text" name="" placeholder='Your Email Address' />
      </ul>
      <ul className='ul-input'>
        <p className='fn'>SUBJECT<span className='spanx'>*</span></p>
        <input className='inpt' type="text" name="" placeholder='Select a Subject' />
      </ul>
      </div>
    </div>
    <div className="submit">
      <button className='Send'>Send Messages <BsEmojiSmile className='emoji'/></button>
    </div>
    </div>
    </>
  );
}

export default contact