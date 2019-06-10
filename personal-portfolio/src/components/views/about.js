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

// for videos
// import ReactPlayer from 'react-player';
import ResponsivePlayer from '../modules/ResponsivePlayer';

import GameExpansionPanel from '../modules/GameExpansionPanel'


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
  descriptionCard: {
    padding: theme.spacing(2, 2),
    textAlign: "center",
  },
}));

const urls = {
  overwatch: "https://www.youtube.com/watch?v=FqnKB22pOC0",
  apex: "https://www.youtube.com/watch?v=oQtHENM_GZU",
  league: "https://www.youtube.com/watch?v=IzMnCv_lPxI",
};

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

function DescriptionPaperSheet(text) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.descriptionCard} title="Why not check out some of the games I play? Here are some trailers.">
        <Typography variant="h5" component="h3">
          {/* I also play video games! */}
            {text}
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
        <Grid item xs={12} sm={6} md={6}>
          <GameExpansionPanel />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <VideoGameCard />
        </Grid>
          <Grid item xs={12}>
            {DescriptionPaperSheet("Check out some of the games I play down below!")}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ResponsivePlayer url={urls.overwatch} />
            <Paper />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>

            <ResponsivePlayer url={urls.apex} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ResponsivePlayer url={urls.league} />
          </Grid>
      </Grid>
    </Container>
  </div>
  );
}


export default AboutPage;



