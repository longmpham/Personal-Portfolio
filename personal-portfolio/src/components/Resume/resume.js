import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';


import pdfFile from "../../documents/longpham_resume_2022.pdf"
import "./resume.css"
import profile from "../../images/about/profile/headshot.png"
import ProgressBar from '../modules/progressbar';

import { FaGithub, FaLinkedin, FaTools, FaExternalLinkAlt } from "react-icons/fa"
import { MdChevronLeft, MdChevronRight, MdEmail, MdLocationOn, MdCall, MdPeople, MdChat, MdThumbUp, MdMenuBook, MdOutlineDoneOutline } from "react-icons/md"


const ResumePage = () => {
  
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [pdf, setPdf] = React.useState(pdfFile);
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [showPage, setShowPage] = React.useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  const handleMinus = () => {
    setPageNumber(prevPage => {
      if(prevPage === 1) return 1;
      else return --prevPage
    })
    // console.log(pageNumber)
  }

  const handlePlus = () => {
    setPageNumber(prevPage => {
      if(prevPage === numPages) return numPages;
      else return ++prevPage
    })
    // console.log(pageNumber)
  }

  const handleShow = () => {
    setShowPage(prevShow => !prevShow)
  }

  return (
    <>
      <div className="resume-root-container-buttons">
        <button className=""><a href={pdf} download>download pdf</a></button>
        <button className="" onClick={handleShow}>{showPage ? "PDF" : "React Resume"}</button>
      </div>

      {showPage ?
      <div className="resume-root-container resume-root-container-pdf">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="resume-pdf-pagination-container">
          <button className="resume-pdf-chevron" onClick={handleMinus}><MdChevronLeft /></button>
          <p>Page {pageNumber} of {numPages}</p>
          <button className="resume-pdf-chevron" onClick={handlePlus}><MdChevronRight /></button>
        </div>
      </div>
      :
      <div className="resume-root-container">
        <div className="resume-left-container">
          <div className="resume-left-heading-container resume-title">
            <img className="resume-profile-image" src={profile} alt="profile picture"/>
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
            <h2 className="resume-section-title">Long Story Short...</h2>
            <p>I am a software engineer currently working at OSI Maritime Systems which provides the world's leading WECDIS displays for Navies across the globe. I have the pleasure of testing their systems and making sure that their ships sail bug free. In my free time, I love to play with my dog, go on backpacking trips, love to learn new technology and love playing video games.</p>
          </div>
          <div className="resume-left-heading-container resume-skills">
            <h2 className="resume-section-title">Skills</h2>
            <p>JavaScript</p>
            <ProgressBar bgcolor="green" progress="85"  height={10} />
            <p>HTML</p>
            <ProgressBar bgcolor="green" progress="70"  height={10} />
            <p>CSS</p>
            <ProgressBar bgcolor="green" progress="65"  height={10} />
            <p>Python</p>
            <ProgressBar bgcolor="green" progress="80"  height={10} />
            <p>C++</p>
            <ProgressBar bgcolor="green" progress="70"  height={10} />
            <p>Java</p>
            <ProgressBar bgcolor="green" progress="40"  height={10} />
            <p>Image Processing</p>
            <ProgressBar bgcolor="green" progress="55"  height={10} />
            <p>Deep Learning</p>
            <ProgressBar bgcolor="green" progress="55"  height={10} />
          </div>
          {/* <div className="resume-left-heading-container resume-achievements">
            <div className="resume-section-body">
              <h2>Achievements</h2>
              <h4>NSERC Research Grant</h4>
              <h4>2018</h4>
            </div>
          </div> */}
          <div className="resume-left-heading-container resume-attributes">
            <h2 className="resume-section-title">Attributes</h2>
            <ul className="resume-attributes-list">
              <li className="resume-attributes-item"><MdPeople />Leader</li>
              <li className="resume-attributes-item"><MdChat />Excellent Communicator</li>
              <li className="resume-attributes-item"><FaTools />Problem Solver</li>
              <li className="resume-attributes-item"><MdThumbUp />Friendly</li>
              <li className="resume-attributes-item"><MdMenuBook />Fast Learner</li>
              <li className="resume-attributes-item"><MdOutlineDoneOutline />Independent</li>
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
                <li>Performed tests on complex projects, resolved and reported on problems encountered and documents test results for any follow-ups</li>
                <li>Defined test objectives, wrote test cases, built test systems and executed functional, application, regression and performance tests.</li>
                <li>Investigated and recommended software productivity and testing tools for use within the Engineering Test Team.</li>
                <li>Developed, performed, and documented test procedures to verify problem fixes and problems reported through the entire Software Engineering department</li>
                <li>Collaborated with a team of ~30 software engineers working on OSI's custom software built for Navies across the globe</li>
              </ul>
            </div>
            <div className="resume-section-body">
              <h4 className="resume-section-header">Graduate Teaching Assistant</h4>
              <h6 className="resume-section-header">2016-2019</h6>
              <ul>
                <li>Lead instructor for multiple courses including (1) microcontrollers, (2) software design, and (3) operating systems. </li>
                <li>Created and managed time for office hours, and guidance between labs</li>
                <li>Role model for over 500 cumaltive students</li>
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
              <h4 className="resume-section-header">Personal Website with ReactJS <a href="https://github.com/longmpham/Personal-Portfolio"><FaExternalLinkAlt /></a></h4>
              <p>Using the ReactJS library to build a frontend single page application that shows my personal achievements, past history, interests, and my resume.</p>
            </div>
            <div className="resume-section-body-simple">
              <h4 className="resume-section-header">Meme Generator Using React Hooks <a href="https://github.com/longmpham/memegenerator"><FaExternalLinkAlt /></a></h4>
              <p>Using React with hooks, fetch, async/await to grab images from the public API from ImgFlip</p>
            </div>
            <div className="resume-section-body-simple">
              <h4 className="resume-section-header">Impatiens Nails (<a href="https://impatiens.ca">impatiens.ca</a> Coming soon...) <a href="https://github.com/longmpham/impatiens"><FaExternalLinkAlt /></a></h4>
              <p>Building a frontend Nail E-Commerce App from scratch. These nails are custom made and designed by my significant other and we plan to start a business from the ground up selling custom press-on nails</p>
            </div>
            <div className="resume-section-body-simple">
              <h4 className="resume-section-header">Click The Boxes! <a href="https://github.com/longmpham/clicktheboxes"><FaExternalLinkAlt /></a></h4>
              <p>Created a React app to click black boxes to reveal the image behind it. Used React hooks to implement this.</p>
            </div>
            <div className="resume-section-body-simple">
              <h4 className="resume-section-header">CRUD To-Do App using MERN <a href="https://github.com/longmpham/todoapp"><FaExternalLinkAlt /></a></h4>
              <p>Created a basic CRUD MERN app for a to-do list. Barebones, first implementation of learning how CRUD works.</p>
            </div>
            <div className="resume-section-body-simple">
              <h4 className="resume-section-header">Google Image Keras Scraper and Binary Classifier <a href="/"><FaExternalLinkAlt /></a></h4>
              <p>Learning how to create a binary classifier pulling images from Google Search, creating a dataset from that and using Keras as the training network to classify the images.</p>
            </div>
            <div className="resume-section-body-simple">
              <h4 className="resume-section-header">Phasio.io 2-D Meteor Shooter Sandbox <a href="/"><FaExternalLinkAlt /></a></h4>
              <p>Created a simple shooter using PhaserJS. Created simple AWSD controls using the mouse pointer to aim and shoot with. Extras such as high scores, lives, and weapon boosts were implemented as features. This game was created with JavaScript and was later used as a curriculum for 25 Grade 8 students interested in coding.</p>
            </div>
            <div className="resume-section-body-simple">
              <h4 className="resume-section-header">DE-10 Development Board Wrist Watch</h4>
              <p>Created a simple watch using the DE-10 development board programmed to use an ARM processor. The watch was able to compute time in milliseconds, seconds, minutes, and hours. The clock featured basic stop, reset, and lap capabilities. This was used for a lab for over 300 3rd year engineering students to practice assembly language as well as C. Topics like semaphores, threading and deadlocks were introduced.</p>
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
      }
    </>
  );
} 

export default ResumePage;