import React from 'react';

import { Link } from 'react-router-dom'

import "./landing.css"

const Hero = () => {

  return (
    <>
      <div className="landing-container hero">
        <div className="landing-title-container">
          <h1 className="landing-title">Hey There!</h1>
          <h4 className="landing-subtitle">I'm friendly, smart, and hardworking! Always looking to learn something new.</h4>
          <div className="landing-buttons-container">
            <button className="landing-button"><Link to="/about">About Me</Link></button>
            <button className="landing-button"><Link to="/contact">Contact</Link></button>
          </div>
        </div>
      </div>
    </>


    // <div className="landing-container">
    //     <Container maxWidth='sm'>
    //         <div className="landing-title">
    //           <Typography className="" component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
    //             Hey There!
    //           </Typography>
    //         </div>
    //         <div className="landind-description">
    //           <Typography className="" variant="h5" align="center" color="textSecondary" paragraph>
    //             This is my personal portfolio built with ReactJS (used in the MERN stack!). I'm always looking for improvements so please contact me with any recommendations!
    //           </Typography>
    //         </div>
    //         <div className="landing-buttons">
    //           <Grid container spacing={2} justify="center">
    //             <Grid item>
    //               <Button component={Link} to="/contact" variant="contained" color="primary">
    //                 Contact Me
    //               </Button>
    //             </Grid>
    //             <Grid item>
    //               <Button component={Link} to="/about" variant="contained" color="secondary">
    //                 About Me
    //               </Button>
    //             </Grid>
    //           </Grid>
    //         </div>
    //     </Container>
    // </div>
  );
}

export default Hero;