import React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import { styled } from '@mui/system';

import { Link } from 'react-router-dom'

import Background from '../../images/hero/frontenac.jpg'

import "./landing.css"

const Hero = () => {

  return (
    <div className="">
        <Container maxWidth='sm'>
            <div className="">
              <Typography className="" component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
                Hey There!
              </Typography>
            </div>
            <div className="">
              <Typography className="" variant="h5" align="center" color="textSecondary" paragraph>
                This is my personal portfolio built with ReactJS (used in the MERN stack!). I'm always looking for improvements so please contact me with any recommendations!
              </Typography>
            </div>
            <div className="">
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button component={Link} to="/contact" variant="contained" color="primary">
                    Contact Me
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={Link} to="/about" variant="contained" color="secondary">
                    About Me
                  </Button>
                </Grid>
              </Grid>
            </div>
        </Container>
    </div>
  );
}

export default Hero;