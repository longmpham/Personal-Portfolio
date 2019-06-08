import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'

import ProfileCard from '../modules/Cards/ProfileCard';
import InterestChips from '../modules/Chips/InterestChips'
import GamingChips from '../modules/Chips/GamingChips'
import ProgrammingChips from '../modules/Chips/ProgrammingChips'
import VideoGameCard from '../modules/Cards/VideoGameCard'

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AlbumGridList from '../modules/PhotosList';

<<<<<<< HEAD
// for videos
// import ReactPlayer from 'react-player'
{/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing /> */}
=======
>>>>>>> d8a90d63904f9f27fb659003f7e5a6ff387ca43b

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 2),
    textAlign: "center",
  },
  gamingCard: {
    padding: theme.spacing(18, 0, 18),
    textAlign: "center",
    backgroundColor: 'rgba(20,20,20,0.5)',
    backgroundImage: 'url(https://www.pixelstalk.net/wp-content/uploads/2016/05/Gaming-Logo-Wallpapers-Free-Download.jpg)',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
}));

function PhotosPaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Hey! I see you checking me out. That's okay. I'm a pretty cool guy! Check out some of the photos I've taken (and taken from close ones!!!)
        </Typography>
      </Paper>
    </div>
  );
}

function GamesPaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.gamingCard} title="I also play video games!">
        <Typography variant="h5" component="h3">
          {/* I also play video games! */}
        </Typography>
      </Paper>
    </div>
  );
}


function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <div>HellCras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.o</div>
    </Slide>
  );
}

function ShowOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={trigger}>
      <div>HellCras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.o</div>
    </Slide>
  );
}

function AboutPage() {
  const classes = useStyles();
  return (
  <div className={classes.root}>
    
    <Container maxWidth="md">
      {/* {HideOnScroll()} */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6}>
          <ProfileCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Education 
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body2" color="textPrimary" component="p">
                Master's in Software Engineering from the University of Western Ontario, located in Ontario, Canada!
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Interests 
              </Typography>
            </Grid>
            <Grid item xs={8}>
                <InterestChips />
                <Divider />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Games 
              </Typography>
            </Grid>
            <Grid item xs={8}>
                <GamingChips />
                <Divider />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Programming Tools and Languages
              </Typography>
            </Grid>
            <Grid item xs={8}>
                <ProgrammingChips />
                {/* <Divider /> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {PhotosPaperSheet()}
          <AlbumGridList />
          {/* {ShowOnScroll()} */}
        </Grid>
        <Grid item xs={12}>
          {GamesPaperSheet()}
        </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <VideoGameCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* <VideoGameCard /> */}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* <VideoGameCard /> */}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* <VideoGameCard /> */}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* <VideoGameCard /> */}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            
          </Grid>
      </Grid>
    </Container>
  </div>
  );
}


export default AboutPage;



