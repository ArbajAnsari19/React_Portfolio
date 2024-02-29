import React from 'react'
import {FaListAlt} from "react-icons/fa"
import './Footer.css'
function footer() {
  return (
    <>
    <div id='sl' className="third-page">
    <div className="intro">
        <button className="btn"> <FaListAlt className='icon'/>MY SKILLS</button>
    </div>
    <div className="title">
        <p className='title-intro'>My <span className='span1'>Skills</span></p>
    </div>
    <div className="skill-list">
      <ul className='uls'>
      <h3 className='h3txt'>Web Development</h3>
      <li className='lis'>C++ , Python</li>
      <li className='lis'>Html , CSS, Javascript , React</li>
      <li className='lis'>Django , SQL , Express.js</li>
      </ul>
      <ul className='uls'>
      <h3 className='h3txt'>Data Science</h3>
      <li className='lis'>Python - Pandas, Numpy, Seaborn, Matplotlib, scikit-learn</li>
      <li className='lis'>Machine Learning , Deep Learning</li>
      <li className='lis'>Natural language processing (NLP) , Computer vision</li>
      </ul>
      <ul className='uls'>
      <h3 className='h3txt'>Softwares</h3>
      <li className='lis'>Git , Github</li>
      <li className='lis'>VS Code IDE , Pycharm IDE</li>
      <li className='lis'>Jupyter Notebook , Google Colab</li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default footer