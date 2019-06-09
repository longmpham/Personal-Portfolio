import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide'

import ResumeFile from '../../documents/long_pham_resume_2019_pretty.pdf'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save'

import ResumePDF from '../modules/ResumePDF'
import ResumeTabs from '../modules/ResumeTab'

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