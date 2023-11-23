import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
// import pdfFile from "../../documents/longpham_resume_2023.pdf"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"


const ResumePDF = (props) => {
  return (
    <div className="resume-root-container resume-root-container-pdf">
      <Document file={props.pdf} onLoadSuccess={props.onDocumentLoadSuccess}>
        <Page pageNumber={props.pageNumber} />
      </Document>
      <div className="resume-pdf-pagination-container">
        <button className="resume-pdf-chevron" onClick={props.handleMinus}><MdChevronLeft /></button>
        <p>Page {props.pageNumber} of {props.numPages}</p>
        <button className="resume-pdf-chevron" onClick={props.handlePlus}><MdChevronRight /></button>
      </div>
    </div>
  )
}

export default ResumePDF