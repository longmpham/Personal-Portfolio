import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ResumeFile from '../../documents/longpham_resume_2022.pdf'

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save'

import ResumeTabs from './ResumeTab'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 2),
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));



function ResumePage () {
  const classes = useStyles();


  return (
    <div>

      <Container maxWidth="lg" className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Button href={ResumeFile} target="_blank" color="primary" variant="contained" className={classes.button} download>
              Download Resume PDF
              <SaveIcon />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <ResumeTabs />
          </Grid>
        </Grid>
      </Container>

    </div>
  );
} 


export default ResumePage;