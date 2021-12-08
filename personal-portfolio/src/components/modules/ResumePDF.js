import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// required for pdf viewer to work!
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../../documents/longpham_resume_2022.pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class ResumePage extends Component {

  state = {
    numPages: null,
    pageNumber: 1, // sets the first page on default.
  }

  // goToPrevPage = () =>
	// 	this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
	// goToNextPage = () =>
	// 	this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  // cheating but it works because there are only 2 pages...
  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: 2 }));

 
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
        <div>
        <nav>
					<button onClick={this.goToPrevPage}>Prev</button>
					<button onClick={this.goToNextPage}>Next</button>
				</nav>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            <Document file={resume} onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
          </Grid>
        </div>
        <div>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>
    );
  }
}

export default ResumePage;