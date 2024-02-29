
import './RotatingWheel.css';

import React, { Component } from 'react';

class LinkComponent extends Component {
  handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    const targetId = 'm'; // Replace with the ID of your target element
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Smooth scroll to the target element
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
        duration: 800, // Adjust the duration to 800 milliseconds
      });
    }
  };

  render() {
    return (
      <div className="link">
        <a href="#m" onClick={this.handleClick}>
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            className="link__svg"
            aria-labelledby="link1-title link1-desc"
          >
            <desc id="link1-desc"></desc>

            <path
              id="link-circle"
              className="link__path"
              d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              stroke="none"
              fill="none"
            />

            <path
              className="link__arrow"
              d="M 100 75 L 100 125 L 85 110 M 100 125 L 115 110"
              fill="none"
            />

            <text className="link__text">
              <textPath href="#link-circle" stroke="none">
                My Projects • My Projects •
              </textPath>
            </text>
          </svg>
        </a>
      </div>
    );
  }
}

export default LinkComponent;
