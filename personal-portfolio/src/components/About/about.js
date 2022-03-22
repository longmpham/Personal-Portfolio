import React from 'react';
import { Link } from 'react-router-dom'

import { FaGamepad, FaHiking, FaCode, FaSkull, 
  FaWindows, FaLinux, FaHtml5, FaCss3, FaReact, FaNode, FaPython, FaRaspberryPi, FaGit  } from "react-icons/fa"
import { GiBoxingGloveSurprise, GiBullseye } from "react-icons/gi"
import { DiJavascript, DiMongodb } from "react-icons/di"
import { SiExpress, SiKeras } from "react-icons/si"

import profilePicture from "../../images/about/profile/headshot.png"
import bannerProfilePicture from "../../images/about/profile/bannerprofile.jpg"
import gamesData from '../../images/about/games/gamesData';
import adventuresData from '../../images/about/adventures/adventuresData';

import "./about.css"


const AboutPage = () => {

  const [games, setGames] = React.useState(gamesData);
  const [adventures, setAdventures] = React.useState(adventuresData);
  console.log(adventures)

  return (
    <>
      <div className="about-root-container">
        <div className="about-hero">
          <div className="about-hero-container">
            {/* <div className="about-hero-items"> */}
              <h1 className="about-hero-title">Hey, my name is Long</h1>
              <h3 className="about-hero-subtitle">and I am a Software Engineer</h3>
              <button className="about-body-button"><Link to="/resume">Resume/CV</Link></button>
              {/* <button className="about-body-button"><Link to="/blog">Blog</Link></button> */}
            {/* </div> */}
          </div>
        </div>
        <div className="about-container">
          <div className="about-left-container">
            <h1>Who Am I?</h1>
            <p>Here's my story. I graduated with a Master's degree for Software Engineering at the University of Western Ontario (aka Western University). I then started my career working at OSI Maritime Systems and as a side gig, I just learn about random things. I love to hike and I'm also a self-proclaimed "good" gamer.</p>
          </div>
          <div className="about-right-container">
            <img src={profilePicture} />
          </div>
        </div>
        <div className="about-card-container">
          <div className="about-card">
            <FaGamepad size={100} />
          </div>
          <div className="about-card">
            <FaHiking size={100} />
          </div>
          <div className="about-card">
            <FaCode size={100} />
          </div>
        </div>
        <div className="about-container">
          <div className="about-left-container">
            <h1>Gaming</h1>
            <p>I used to be a super competitive gamer. I've achieved many achievements...<br /><br />Come at me bro <GiBoxingGloveSurprise color="red"/><FaSkull color="black" /><GiBullseye color="red" /></p>
          </div>
          <div className="about-right-container">
            {games.map(game => {
              return(
                <img key={game.game} className="about-image-collage" src={game.url} alt={game.game} />
              )
            })}
          </div>
        </div>
        <div className="about-container">
          <div className="about-left-container about-image-adventure-collage-container">
            {adventures.map(adventure => {
              return(
                <img key={adventure.title} className="about-image-adventure-collage" src={adventure.url} alt={adventure.title} />
              )
            })}
          </div>
          <div className="about-right-container">
            <h1>Adventures</h1>
            <p>I love to travel and go on hikes. I haven't been to many places but I hope to plan for many future excursions.</p>
          </div>
        </div>
        <div className="about-container">
          <div className="about-left-container">
            <h1>Coding</h1>
            <p>I've dipped my toes into many fields and to be perfectly honest, I don't really have a favourite. They all just do cool stuff. Deep learning, machine learning, sensors and data, frontend, backend, you name it, I've tried it, otherwise, I'll be honest and say I've never used it. That's one thing I learned in my Master's... it's OK to say "I don't know" sometimes!</p>
            <button className="about-body-button"><Link to="/projects">Projects</Link></button>
            <button className="about-body-button"><Link to="/projects">Resume/CV</Link></button>
          </div>
          <div className="about-right-container">
            <div className="code-icons">
              <FaWindows />
              <FaLinux />
              <FaHtml5 />
              <FaCss3 />
              <FaReact />
              <FaNode />
              <FaPython />
              <FaRaspberryPi />
              <FaGit />
              <DiJavascript />
              <DiMongodb />
              <SiExpress />
              <SiKeras />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default AboutPage;



