import React from 'react';

import { Link } from 'react-router-dom'

import "./landing.css"

const Hero = () => {

  return (
    <>
      <div className="landing-container hero">
        <div className="landing-title-container">
          <h1 className="landing-title">Hey There!</h1>
          <h4 className="landing-subtitle">I'm friendly, smart, and hardworking! Always looking to learn something new.</h4>
          <div className="landing-buttons-container">
            <button className="landing-button"><Link to="/about">About Me</Link></button>
            <button className="landing-button"><Link to="/contact">Contact</Link></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;