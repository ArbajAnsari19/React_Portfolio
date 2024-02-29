import React from 'react'
import {RiHomeFill} from "react-icons/ri"
import {SiOnlyoffice} from "react-icons/si"
import {FaListAlt} from "react-icons/fa"
import {AiFillProject} from "react-icons/ai"
import {IoMdContact} from "react-icons/io"
import {FaHeart} from "react-icons/fa"
import './Nav.css'
import { useEffect } from 'react';

function Nav() {
  useEffect(() => {
    // Add smooth scrolling behavior to all links with class 'logos' when the component mounts
    const links = document.querySelectorAll('.logos');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
            duration: 800 // Smooth scrolling duration in milliseconds
          });
        }
      });
    });

    return () => {
      // Clean up event listeners when the component unmounts
      links.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="navbar-card">
      <div className="smi"><a href="#mp" className='logos'><RiHomeFill className='p'/></a></div>
      <div className="smi"><a href="#ex" className='logos'><SiOnlyoffice className='p'/></a></div>
      <div className="smi"><a href="#sl" className='logos'><FaListAlt className='p'/></a></div>
      <div className="smi"><a href="#m" className='logos'><AiFillProject className='p'/></a></div>
      <div className="smi"><a href="#co" className='logos'><IoMdContact className='p'/></a></div>
      <div className="smp"><a href="#top" className='logos2'><FaHeart/></a></div>
    </div>
  );
}

export default Nav;
