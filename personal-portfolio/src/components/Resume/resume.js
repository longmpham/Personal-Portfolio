import React from 'react';

import "./resume.css"
import profile from "../../images/about/profile/headshot.png"

import { FaGithub, FaLinkedin, FaHtml5, FaCss3, FaReact, FaNode, FaPython } from "react-icons/fa"
import { MdEmail, MdLocationOn, MdCall } from "react-icons/md"
import { DiJavascript } from "react-icons/di"

const ResumePage = () => {

  return (
    <div className="resume-root-container">
      <div className="resume-left-container">
        <div className="resume-left-heading-container resume-title">
          <img className="resume-profile-image" src={profile} />
          <h1>Long Pham</h1>
          <h2>Software Engineer - Systems Test Engineer (L2)</h2>
        </div>
        <div className="resume-left-heading-container resume-contact">
          <h4><MdEmail />longmpham93@gmail.com</h4>
          <h4><MdLocationOn />Burnaby, British Columbia</h4>
          <h4><MdCall />Please reach via Email</h4>
          <h4><a href="https://github.com/longmpham"><FaGithub />GitHub</a></h4>
          <h4><a href="https://www.linkedin.com/in/longmpham/"><FaLinkedin />LinkedIn</a></h4>
        </div>
        <div className="resume-left-heading-container resume-summary">
          <h2 className="resume-section-title">Brief Summary</h2>
          <p>I am a software engineer currently working at OSI Maritime Systems which provides the world's leading WECDIS displays for Navies across the globe. I have the pleasure of testing their systems and making sure that their ships sail bug free. In my free time, I love to play with my dog, go on backpacking trips, love to learn new technology and love playing video games.</p>
        </div>
        <div className="resume-left-heading-container resume-skills">
          <h2 className="resume-section-title">Skills</h2>
          <div>JavaScript</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>C</div>
          <div>C++</div>
          <div>Java</div>
          <div>Web Development</div>
          <div>Image Processing</div>
          <div>Deep Learning</div>
        </div>
        <div className="resume-left-heading-container resume-achievements">
          <h2>Achievements</h2>
          <p>Date</p>
          <p>Name Of Achievement</p>
        </div>
        <div className="resume-left-heading-container resume-attributes">
          <h2 className="resume-section-title">Attributes</h2>
          <ul>
            <li>Leader</li>
            <li>Excellent Communicator</li>
            <li>Problem Solver</li>
            <li>Friendly</li>
            <li>Fast Learner</li>
            <li>Independent</li>
          </ul>
        </div>
      </div>
      <div className="resume-right-container">
        <div className="resume-right-heading-container resume-education">
          <h2 className="resume-section-title">Education</h2>
          <div className="resume-section-body-even">
            <h6>2016-2019</h6>
            <h4>Master's of Software Engineering</h4>
            <h6>Western University, Canada</h6>
          </div>
          <div className="resume-section-body-even">
            <h6>2012-2016</h6>
            <h4>Bachelor's of Software Engineering</h4>
            <h6>Western University, Canada</h6>
          </div>
        </div>
        <div className="resume-right-heading-container resume-publications">
          <h2 className="resume-section-title">Publications</h2>
          <div className="resume-section-body">
            <h4>Gabor Filter Initialization and Parameterization Strategies in Convolutional Neural Networks</h4>
            <h6>2019</h6>
          </div>
        </div>
        <div className="resume-right-heading-container resume-work-experience">
          <h2 className="resume-section-title">Work Experience</h2>
          <div className="resume-section-body">
            <h4 className="resume-section-header">Software Engineer - Systems Test Engineer (L2)</h4>
            <h6 className="resume-section-header">Since 2019</h6>
            <ul>
              <li>Some cool job description. Some cool job description. Some cool job description. </li>
              <li>Some cool job description. Some cool job description. </li>
              <li>Some cool job description. </li>
            </ul>
          </div>
          <div className="resume-section-body">
            <h4 className="resume-section-header">Software Engineer - Systems Test Engineer (L2)</h4>
            <h6 className="resume-section-header">Since 2019</h6>
            <ul>
              <li>Some cool job description. Some cool job description. Some cool job description. </li>
              <li>Some cool job description. Some cool job description. </li>
              <li>Some cool job description. </li>
            </ul>
          </div>
        </div>
        <div className="resume-right-heading-container resume-projects">
          <h2 className="resume-section-title">Projects</h2>
          <div className="resume-section-body-simple">
            <h4 className="resume-section-header">Gabor Filter Initialized Convolutional Neural Network Classifier</h4>
            <p>Thesis work that focused on the implementation of the Gabor filter used within a 7-layer convolutional neural network to classify 4 datasets consisting of almost 200,000 images in total. This network trained faster than other networks, but resulted in a slightly lower accuracy in comparison to other networks.</p>
          </div>
          <div className="resume-section-body-simple">
          <h4 className="resume-section-header">DE-10 Development Board Wrist Watch</h4>
            <p>Created a simple watch using the DE-10 development board programmed to use an ARM processor. The watch was able to compute time in milliseconds, seconds, minutes, and hours. The clock featured basic stop, reset, and lap capabilities. This was used for a lab for over 300 3rd year engineering students to practice assembly language as well as C. Topics like semaphores, threading and deadlocks were introduced.</p>
          </div>
          <div className="resume-section-body-simple">
          <h4 className="resume-section-header">Phasio.io 2-D Meteor Shooter Sandbox</h4>
            <p>Created a simple shooter using PhaserJS. Created simple AWSD controls using the mouse pointer to aim and shoot with. Extras such as high scores, lives, and weapon boosts were implemented as features. This game was created with JavaScript and was later used as a curriculum for 25 Grade 8 students interested in coding.</p>
          </div>
          <div className="resume-section-body-simple">
          <h4 className="resume-section-header">Personal Website with ReactJS, <a href="/">ICONS</a></h4>
            <p>Using the ReactJS library to build a frontend single page application that shows my personal achievements, past history, interests, and my resume.</p>
          </div>
        </div>
        <div className="resume-right-heading-container resume-leadership-experience">
          <h2 className="resume-section-title">Leadership Experience</h2>
          <div className="resume-section-body">
            <h4 className="resume-section-header">Social Advocate with OSI's Work Bubble</h4>
            <h4 className="resume-section-header">Since 2019</h4>
            <ul>
              <li>Strived to communicate with fellow employees and brought up ideas to implement an IM (Slack) to move away from emails for small tasks</li>
              <li>Volunteer to help organize and run certain events at social parties</li>
            </ul>
          </div>
          <div className="resume-section-body">
            <h4 className="resume-section-header">President of Western's Outdoors Club</h4>
            <h4 className="resume-section-header">2012-2019</h4>
            <ul>
              <li>Organized and ran as a leader for approximately 200+ members</li>
              <li>Organized and managed weekly trips from car camping, multi-day backpacking, and simple day trips like apple picking or beach visits.</li>
              <li>Lead and managed an executive team of 12 and helped control inventory, and cashflow</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default ResumePage;