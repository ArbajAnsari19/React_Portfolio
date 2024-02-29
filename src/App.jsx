import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'
import LinkComponent from "./components/wheel/LinkComponent"
import './App.css'
function App() {
  return (
    <>
    <div className="page">
    <div className="home-page">
    <About/>
    <Header/>
    <Nav/>
    </div>
    <div className="home-page-arrow">
    <LinkComponent/>
    </div>
    <div className="about-page">
    <Experience/>
    </div>
    <div className="about-page2">
    <Footer/>
    </div>
    <div className="about-page3">
    <Portfolio/>
    </div>
    <div className="contact-page">
    <Contact/>
    </div>
    </div>
    </>
  )
}


export default App