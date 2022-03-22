import React from 'react';

import "./resume.css"


const ResumePage = () => {

  return (
    <div className="resume-root-container">
      <div className="resume-left-container">
        <div className="resume-left-heading-container resume-title">
          <h1>Long Pham</h1>
          <h2>Software Engineer - Systems Test Engineer (L2)</h2>
        </div>
        <div className="resume-left-heading-container resume-contact">
          <h4>longmpham93@gmail.com</h4>
          <h4>Burnaby, British Columbia</h4>
          <h4>Please reach via Email</h4>
          <h4><a>GitHub</a></h4>
          <h4><a>LinkedIn</a></h4>
        </div>
        <div className="resume-left-heading-container resume-summary">
          <h1>Brief Summary</h1>
          <p>I am a software engineer currently working at OSI Maritime Systems which provides the world's leading WECDIS displays for Navies across the globe. I have the pleasure of testing their systems and making sure that their ships sail bug free. In my free time, I love to play with my dog, go on backpacking trips, love to learn new technology and love playing video games.</p>
        </div>
        <div className="resume-left-heading-container resume-skills">
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
          <h1>Achievements</h1>
          <p>Date</p>
          <p>Name Of Achievement</p>
        </div>
        <div className="resume-left-heading-container resume-attributes">
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
          <h1>Education</h1>
          <div>
            <p>date</p>
            <p>Master's of Engineering Science</p>
            <p>Western University, Canada</p>
          </div>
          <div>
            <p>date</p>
            <p>Master's of Engineering Science</p>
            <p>Western University, Canada</p>
          </div>
        </div>
        <div className="resume-right-heading-container resume-publications">
          <h1>Publications</h1>
          <div>
            <p>date</p>
            <p>Master's of Engineering Science</p>
            <p>Western University, Canada</p>
          </div>
        </div>
        <div className="resume-right-heading-container resume-projects">
          <h1>Projects</h1>
          <div>
            <p>title</p>
            <p>I am a software engineer currently working at OSI Maritime Systems which provides the world's leading WECDIS displays for Navies across the globe. I have the pleasure of testing their systems and making sure that their ships sail bug free. In my free time, I love to play with my dog, go on backpacking trips, love to learn new technology and love playing video games.</p>

          </div>
        </div>
        <div className="resume-right-heading-container resume-work-experience">
          <h1>Work Experience</h1>
          <div>
            <p>date</p>
            <p>Job Title</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
        <div className="resume-right-heading-container resume-leadership-experience">
          <h1>Leadership Experience</h1>
          <div>
            <p>date</p>
            <p>Job Title</p>
            <p>I am a software engineer currently working at OSI Maritime Systems which provides the world's leading WECDIS displays for Navies across the globe. I have the pleasure of testing their systems and making sure that their ships sail bug free. In my free time, I love to play with my dog, go on backpacking trips, love to learn new technology and love playing video games.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default ResumePage;