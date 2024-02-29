import React from 'react'
import {AiFillProject} from "react-icons/ai"
import {photo1} from '/Users/arbajalam/New Portfolio/myapp/src/assets/Wallpaper.jpg'
import './Portfolio.css'
function Portfolio() {
  return (
    <>
    <div id="m">
    <div className="logo">
      <button className='logo-btn'><AiFillProject className='logo-icon'/>MY PROJECTS</button>
    </div>
    <div className="main">
      <p className='title'>Featured <span className='span1'>Projects</span></p>
      <div className="card">
       <div className="card-img">
       <img className='img1' src={photo1} alt="" />
       </div>
       <div className="card-txt">
      <p className='para1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, iste neque enim fugiat eaque hic qui vitae. Perspiciatis, facilis. Omnis maiores expedita optio sed et sapiente perspiciatis fuga consequatur natus!
      Dolor nostrum nesciunt ullam distinctio at,  nisi rerum.</p>
      </div>
      </div>

      <div className="card2">
       <div className="card-img">
       <img className='img2' src={photo1} alt="" />
       </div>
       <div className="card-txt2">
      <p className='para2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, iste neque enim fugiat eaque hic qui vitae. Perspiciatis, facilis. Omnis maiores expedita optio sed et sapiente perspiciatis fuga consequatur natus!
      Dolor nostrum nesciunt ullam distinctio at,  nisi rerum.</p>
      </div>
      </div>

      <div className="card">
       <div className="card-img">
       <img className='img1' src={photo1} alt="" />
       </div>
       <div className="card-txt">
      <p className='para1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, iste neque enim fugiat eaque hic qui vitae. Perspiciatis, facilis. Omnis maiores expedita optio sed et sapiente perspiciatis fuga consequatur natus!
      Dolor nostrum nesciunt ullam distinctio at,  nisi rerum.</p>
      </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default Portfolio