import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import PlaceIcon from '@material-ui/icons/Place';
import LinkIcon from '@material-ui/icons/Link'


import SkillLines from '../modules/SkillLines';
import AttributeChips from '../modules/Chips/AttributeChips';

// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
// import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
// import { faExternalLink } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt'

const iconSize = "lg";
const icons = {
    // facebook: <FontAwesomeIcon icon={faFacebookMessenger} size={iconSize}/>,
    linkedin: <FontAwesomeIcon icon={faLinkedin} size={iconSize} color="primary"/>,
    github: <FontAwesomeIcon icon={faGithub} size={iconSize}/>,
    // discord: <FontAwesomeIcon icon={faDiscord} size={iconSize}/>,
    // externalLink: <FontAwesomeIcon icon={faExternalLink} size={iconSize}/>,
}

const links = {
    GitHub: {
      home: "https://github.com/longmpham",
      phaser: "https://github.com/longmpham/myPhaserGame",
      portfolio: "https://github.com/longmpham/Personal-Portfolio",
    },
    LinkedIn: "https://www.linkedin.com/in/longmpham/",
    // Discord: "Noobinator#1168",
    // FacebookMessenger: "https://m.me/long.m.pham.93"
    email: "longmpham93@gmail.com",
}

const phone = "Please Reach out via Email";
// const phone = "not for you";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    marinTop: "4px",
  },
  divider: {
    height: "5px",
    marginTop: "18px",
  },
  paper: {
    padding: theme.spacing(6, 2),
  },
  iconButton: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
  heading: {
    backgroundColor: "#BBB",
  },
}));

function SimpleTabs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.paper} container spacing={4} component={Paper} elevation={10}>

        {/* LEFT COLUMN */}
        <Grid item xs={12} sm={false} md={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4" color="textPrimary" component="h2">
                Long Pham 
              </Typography>
              <Typography variant="h6" color="textPrimary" component="p">
                Software Engineer - Systems Test Engineer (L2)
              </Typography>
              <Divider className={classes.divider}/>
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
                    Burnaby, Britich Columbia
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
                    <a href={links.GitHub.home}>GitHub</a>
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
              <Divider className={classes.divider}/>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h2">
                About Me
              </Typography>
              <Typography align="justify" variant="body1" color="textPrimary" component="p">
              I am a software engineer currently working at OSI Maritime Systems which provides the world's
              leading WECDIS displays for Navies across the globe. I have the pleasure of testing their systems
              and making sure that their ships sail bug free. In my free time, I love to play with my dog, go on backpacking trips, love to
              learn new technology and love playing video games.
              </Typography>
              <Divider className={classes.divider}/>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Skills 
              </Typography>
              <SkillLines />
              <Divider className={classes.divider}/>
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
                {/* <Grid item xs={2}>
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
                </Grid> */}
              </Grid>
              <Divider className={classes.divider}/>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Attributes 
              </Typography>
                <AttributeChips />
              <Divider className={classes.divider}/>
            </Grid>
          </Grid>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid item xs={12} sm={false} md={8}>
          <Grid container spacing={2}>
            {/* ITEM ONE */}
            <Grid item xs={12} sm={false} md={12} className={classes.heading}>
              <Typography align="left" variant="h6" color="textPrimary" component="h2">
                Education 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    2016 - 2019
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    Master's of Engineering Science
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography align="right" variant="body2" color="textSecondary" component="p">
                    Western University, Canada
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  {/* EMPTY */}
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                  Software Engineering: Initialization of CNNs using Gabor Filters
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    2012-2016
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    Bachelor's of Engineering Science
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography align="right" variant="body2" color="textSecondary" component="p">
                    Western University, Canada
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  {/* EMPTY */}
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                    Majored in Software Engineering
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* ITEM TWO */}
            <Grid item xs={12} sm={false} md={12} className={classes.heading}>
              <Typography align="left" variant="h6" color="textPrimary" component="h2">
                Publications 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    2019
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    Gabor Filter Initialization and Parameterization
                    Strategies in Convolutional Neural Networks
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography align="right" variant="body2" color="textSecondary" component="p">
                    Western University
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* ITEM THREE */}
            <Grid item xs={12} sm={false} md={12} className={classes.heading}>
              <Typography align="left" variant="h6" color="textPrimary" component="h2">
                Projects 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    Gabor Filter Initialized Convolutional Neural Network Classifier
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                    Thesis work that focused on the implementation of the Gabor filter used within a
                    7-layer convolutional neural network to classify 4 datasets consisting of almost
                    200,000 images in total. This network trained faster than other networks, but 
                    resulted in a slightly lower accuracy in comparison to other networks.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    DE-10 Development Board Wrist Watch
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                    Created a simple watch using the DE-10 development board programmed to use
                    an ARM processor. The watch was able to compute time in milliseconds, seconds,
                    minutes, and hours. The clock featured basic stop, reset, and lap capabilities. This
                    was used for a lab for over 300 3rd year engineering students to practice assembly
                    language as well as C. Topics like semaphores, threading and deadlocks were introduced.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    Phasio.io 2-D Meteor Shooter Sandbox
                    <IconButton className={classes.iconButton} aria-label="Link" href={links.GitHub.phaser}>
                      <LinkIcon className={classes.icon} color="primary" />
                    </IconButton>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                    Created a simple shooter using PhaserJS. Created simple AWSD controls using the
                    mouse pointer to aim and shoot with. Extras such as high scores, lives, and weapon
                    boosts were implemented as features. This game was created with JavaScript and
                    was later used as a curriculum for 25 Grade 8 students interested in coding.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    Personal Website with ReactJS, https://longpham.ca
                    <IconButton className={classes.iconButton} aria-label="Link" href={links.GitHub.portfolio}>
                      <LinkIcon className={classes.icon} color="primary" />
                    </IconButton>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                  Using the ReactJS library to build a frontend single page application that shows my
                  personal achievements, past history, interests, and my resume.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* ITEM FOUR */}
            <Grid item xs={12} sm={false} md={12} className={classes.heading}>
              <Typography align="left" variant="h6" color="textPrimary" component="h2">
                Work Experience 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    Since 2019
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    Software Engineering - Systems Test Engineer (L2)
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography align="right" variant="body2" color="textSecondary" component="p">
                    OSI Maritime Systems Ltd
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  {/* EMPTY */}
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                    Working through the engineering lifecyle, I read customer requirements, 
                    consult in design implementation, write test procedures and run through tests 
                    to verify the requirements and satisfy the customers' needs. I have also become 
                    a pivotal member of the team to lead younger employees and have become a great 
                    role model and leader.
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    2016 - 2019
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    Graduate Teaching Assistant
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography align="right" variant="body2" color="textSecondary" component="p">
                    Western University
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  {/* EMPTY */}
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                    Lead instructor for multiple courses including (1) microcontrollers,
                    (2) software design, and (3) operating systems. Within these courses,
                    I provided office hours, guidance, and organization between labs for
                    over 500 cumulative students and fellow TAs.
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    2016
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    Software Instructor for Elementary Students
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography align="right" variant="body2" color="textSecondary" component="p">
                    Western University
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  {/* EMPTY */}
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                    Instructed and created a simple HTML, JavaScript and CSS summer
                    course for 25 elementary students in the summer using the Phaser.io
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* ITEM FIVE */}
            <Grid item xs={12} sm={false} md={12} className={classes.heading}>
              <Typography align="left" variant="h6" color="textPrimary" component="h2">
                Leadership Experiences 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    Since 2019
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    Social Advocate with OSI's Work Bubble
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  {/* EMPTY */}
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                    Ever since I started working at OSI, I've been striving for better communication with 
                    other employees around work and with different teams. I have become a role-model and ran 
                    individual Lunch-and-Learns with the teams as well as become a pillar for our social events.
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    2012-2019
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    President of Western’s Outdoors Club
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  {/* EMPTY */}
                </Grid>
                <Grid item xs={10}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                  Long-term member of the Western Outdoors Club. Joined as a general member and 
                  quickly became part of the executives and helped organize and ran camping, 
                  backpacking, and canoe trips within Ontario, Canada for over 250 members. 
                  Maintained over $10,000 worth of camping equipment.
                  </Typography>
                </Grid>
                {/* <Grid item xs={2}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    2016-2019
                  </Typography>
                </Grid> */}
                {/* <Grid item xs={10}>
                  <Typography align="left" variant="body1" color="textPrimary" component="p">
                    Co-Captain of the Western’s Collegiate Overwatch Team
                  </Typography>
                </Grid> */}
                {/* <Grid item xs={2}> */}
                  {/* EMPTY */}
                {/* </Grid> */}
                {/* <Grid item xs={10}>
                  <Typography align="left" variant="body2" color="textPrimary" component="p">
                    Main player on Western’s Overwatch team for 3 years. Played in national 
                    tournaments such as TESPA and Ontario Collegiate League.
                  </Typography>
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SimpleTabs;