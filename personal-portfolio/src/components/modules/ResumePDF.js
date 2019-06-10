import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// required for pdf viewer to work!
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../../documents/long_pham_resume_2019_pretty.pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class ResumePage extends Component {

  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(6, 2),
      textAlign: "center",
    },
  }));

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <Document file={resume} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </Grid>

      </div>
    );
  }
}

export default ResumePage;