import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';


import pdfFile from "../../documents/longpham_resume_2022.pdf"
import "./resume.css"
import profile from "../../images/about/profile/headshot.png"
import ProgressBar from '../modules/progressbar';
import skillsData from './skillsData';
import jobsData from './jobsData';
import projectsData from './projectsData';
import leadershipData from './leadershipData';
import educationData from './educationData';
import ResumePDF from './resumePDF';

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
        <button className=""><a href={pdf} download>Download PDF</a></button>
        <button className="" onClick={handleShow}>{showPage ? "PDF" : "React Resume"}</button>
      </div>

      {showPage ?
      <ResumePDF pdf={pdf} numPages={numPages} pageNumber={pageNumber} onDocumentLoadSuccess={onDocumentLoadSuccess} handlePlus={handlePlus} handleMinus={handleMinus}/>


      // <div className="resume-root-container resume-root-container-pdf">
      //   <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
      //     <Page pageNumber={pageNumber} />
      //   </Document>
      //   <div className="resume-pdf-pagination-container">
      //     <button className="resume-pdf-chevron" onClick={handleMinus}><MdChevronLeft /></button>
      //     <p>Page {pageNumber} of {numPages}</p>
      //     <button className="resume-pdf-chevron" onClick={handlePlus}><MdChevronRight /></button>
      //   </div>
      // </div>
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
            {skillsData.map((skill,index) => {
              return (
                <div key={index}>
                  <p>{skill.name}</p>
                  <ProgressBar bgcolor="green" progress={skill.progress} height={10} />
                </div>
              )
            })}
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
            {educationData.map((education,index) => {
              return (
                <div key={index} className="resume-section-body-even">
                  <h6>{education.date}</h6>
                  <h4>{education.title}</h4>
                  <h6>{education.location}</h6>
                </div>
              )
            })}
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
            {jobsData.map((job,index) => {
              return(
                <div key={index} className="resume-section-body">
                  <h4 className="resume-section-header">{job.title}</h4>
                  <h6 className="resume-section-header">{job.date}</h6>
                  <ul>
                    {job.description.map((item, index) => {
                      return (
                        <li key={index}>{item}</li>
                        // console.log(item)
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
          <div className="resume-right-heading-container resume-projects">
            <h2 className="resume-section-title">Projects</h2>
            {projectsData.map((project, index) => {
              return (
                <div key={index} className="resume-section-body-simple">
                  <h4 className="resume-section-header">{project.title} {project.link && <a href={project.link}><FaExternalLinkAlt /></a>}</h4>
                  <p>{project.description}</p>
                </div>
              )
            })}
          </div>
          <div className="resume-right-heading-container resume-leadership-experience">
            <h2 className="resume-section-title">Leadership Experience</h2>
            {leadershipData.map((leadership, index) => {
              return (
                <div key={index} className="resume-section-body">
                  <h4 className="resume-section-header">{leadership.title}</h4>
                  <h4 className="resume-section-header">{leadership.date}</h4>
                  <ul>
                    {leadership.description.map((item,index) => {
                      return (
                        <li key={index}>{item}</li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      }
    </>
  );
} 

export default ResumePage;