import React from 'react'
import photo from '/Users/arbajalam/New Portfolio/myapp/src/assets/profile.png'
import './About.css'
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {FiMail} from "react-icons/fi"
const about = () => {
  return (
    <>
    <div className="profile-card">
      <div className="profile-text">
      <h1 className='signt'>Arbaj</h1>
      <p>Developer  <br/>Data Scientist</p>
    </div>
    <div className="profile-img">
      <img className="img1"src={photo} alt="" />
    </div>
    <div className="profile-mail">
      <p>Arbaj.carrier@gmail.com <br />IIT Roorkee , India</p>
    </div>
    <div className="profile-logo">
      <a className='logo' href="https://github.com/arbaj8019"><BsGithub className='logop'/></a>
      <a className='logo' href="https://www.linkedin.com/in/arbaj-ansari-iitr/"><BsLinkedin className='logop'/></a>
      <a className='logo' href="https://www.instagram.com/_arbaj._/"><BsInstagram className='logop'/></a>
      <a className='logo' href="https://twitter.com/ArbajKh19?t=SkacxXfBgINsAHEk6emVFw&s=09"><BsTwitter className='logop'/></a>
    </div>
    <div className="profile-button">
      <a  href="mailto:arbaj.carrier@gmail.com" className="profile-btn"> <FiMail className='logo2'/> Hire Me</a>
    </div>
    </div>
    </>
  )
}

export default about