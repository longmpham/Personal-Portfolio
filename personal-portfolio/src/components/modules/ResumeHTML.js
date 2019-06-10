import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'
import SocialMediaPaper from '../modules/SocialMediaPaper'
import Paper from '@material-ui/core/Paper'

import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import PlaceIcon from '@material-ui/icons/Place'

import SkillLines from '../modules/SkillLines'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
// import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'

const iconSize = "lg";
const icons = {
    // facebook: <FontAwesomeIcon icon={faFacebookMessenger} size={iconSize}/>,
    linkedin: <FontAwesomeIcon icon={faLinkedin} size={iconSize} color="primary"/>,
    github: <FontAwesomeIcon icon={faGithub} size={iconSize}/>,
    // discord: <FontAwesomeIcon icon={faDiscord} size={iconSize}/>,
}

const links = {
    GitHub: "https://github.com/longmpham",
    LinkedIn: "https://www.linkedin.com/in/longpham93/",
    // Discord: "Noobinator#1168",
    // FacebookMessenger: "https://m.me/long.m.pham.93"
    email: "longish222@gmail.com",
}

const phone = "+1 (519) 854-4878";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  icon: {

  },
  paper: {
    padding: theme.spacing(6, 2),
  },
}));

function SimpleTabs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.paper} container spacing={0} component={Paper} elevation={10}>

        {/* LEFT COLUMN */}
        <Grid item xs={12} sm={false} md={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4" color="textPrimary" component="h2">
                Long Pham 
              </Typography>
              <Typography variant="h6" color="textPrimary" component="p">
                Master's Graduate Software Engineer
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <MailIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    {links.email}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <PlaceIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    London, Ontario, Canada
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <PhoneIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    {phone}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  {icons.github}
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    <a href={links.GitHub}>GitHub</a>
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  {icons.linkedin}
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    <a href={links.LinkedIn}>LinkedIn</a>
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography align="left" variant="h6" color="textPrimary" component="h2">
                About Me
              </Typography>
              <Typography align="left" variant="body1" color="textPrimary" component="p">
              I am a recently graduated at Western University studying a Master’s in
              Engineering Science doing research on convolutional neural networks. In
              my free time, I love to play with my dog, go on backpacking trips, love to
              learn new technology and love playing video games.
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Skills 
              </Typography>
              <SkillLines />
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Achievements 
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    2018
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                    NSERC Research Grant
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    2017
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                    Tespa Overwatch Collegiate Top-10
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    2017
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                    Tespa Overwatch Collegiate Top-8
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Attributes 
              </Typography>
              <SkillLines />
              <Divider />
            </Grid>
          </Grid>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid item xs={12} sm={false} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={false} md={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Education 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={8}>
              <Typography variant="body2" color="textPrimary" component="p">
                Master's in Software Engineering from the University of Western Ontario, located in Ontario, Canada!
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={false} md={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Publication 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={8}>
                <Divider />
            </Grid>
            <Grid item xs={12} sm={false} md={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Work Experience 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={8}>
                <Divider />
            </Grid>
            <Grid item xs={12} sm={false} md={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Projects
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={8}>
                <Divider />
            </Grid>
            <Grid item xs={12} sm={false} md={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Leadership Experience
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={8}>
                <Divider />
            </Grid>
          </Grid>
        </Grid>



      </Grid>
    </div>
  );
}

export default SimpleTabs;