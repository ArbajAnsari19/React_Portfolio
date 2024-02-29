import React from 'react'
import Typewriter from "typewriter-effect";
import './Header.css'
import {BiHomeHeart} from "react-icons/bi"
function header() {
  return (
    <>
  <div id='mp' className="header-page">
    <div className="header-intro">
      <button className='introduce'><BiHomeHeart className='icon1'/>INTRODUCE</button>
    </div>
    <div className="header-text">
      <div className="header-intro1"><p><span className='span1'>Say Hi from </span>Arbaj,
      <Typewriter
      options=
      {{
      strings: ['Developer &', 'Data Scientist'],
      autoStart: true,
      loop: true,
      delay:100,
    }}
/>
</p></div>
<div className="header-intro2">
        <p>" As Developers and Data scientist, My mission is to simplify the complex and pave the way for innovation, one elegant solution at a time. "</p>
      </div>
    </div>
  </div>
    </>
  )
}

export default header