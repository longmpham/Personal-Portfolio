import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

import Background from '../../images/hero/frontenac.jpg'

const AboutPage = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/about" {...props} />
));
const ContactPage = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/contact" {...props} />
));


const useStyles = makeStyles(theme => ({
  hero: {
    // display: 'None',
    backgroundColor: 'rgba(20,20,20,0.5)',
    // backgroundColor: 'transparent',
    // backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundImage: `url(${Background})`,
    padding: theme.spacing(22, 0, 22),
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  backColor: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  title: {
    color: 'rgba(255,255,255,1)',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.9)',
  }
}));  

function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
        <Container maxWidth='sm'>
            <div className={classes.backColor}>
              <Typography className={classes.title} component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
                Hey There!
              </Typography>
            </div>
            <div className={classes.backColor}>
              <Typography className={classes.subtitle} variant="h5" align="center" color="textSecondary" paragraph>
                This is my personal portfolio built with ReactJS (used in the MERN stack!). I'm always looking for improvements so please contact me with any recommendations!
              </Typography>
            </div>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button component={ContactPage} variant="contained" color="primary">
                    Contact Me
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={AboutPage} variant="contained" color="secondary">
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