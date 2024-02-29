import React from 'react'
import './Experience.css'
import {BsFillPersonVcardFill} from "react-icons/bs"
function experience() {
  return (
    <>
    <div id='ex' className="second-page">
      <div className="intro">
        <button className="btn"> <BsFillPersonVcardFill className='icon'/>ABOUT ME</button>
      </div>
      <div className="title">
        <p className='title-intro'>Education and <span className='span1'>Expereince</span></p>
      </div>
      <div className="exp-list">
        <ul className='ul'>
          <h3 className='h3tx'>2021-Present</h3>
          <li className='li'>
          <h3 className='h3txt2'>Work as a Developer </h3>
          <p className='para'>IARC IIT Roorkee</p>
          </li>
        </ul>
        <ul className='ul'>
          <h3 className='h3tx'>2023-Present</h3>
          <li className='li'>
          <h3 className='h3txt2'>Mentor</h3>
          <p className='para'> SMP - Indian Institute of Technology, Roorkee</p>
          </li>
        </ul>
        <ul className='ul'>
          <h3 className='h3tx'>2022-2023</h3>
          <li className='li'>
          <h3 className='h3txt2'>Technical Council Member </h3>
          <p className='para'>RKB Bhawan - Indian Institute of Technology, Roorkee</p>
          </li>
        </ul>
        <ul className='ul'>
          <h3 className='h3tx'>2021-Present</h3>
          <li className='li'>
          <h3 className='h3txt2'>Bachelor of Technology </h3>
          <p className='para'>Indian Institute of Technology, Roorkee</p>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default experience