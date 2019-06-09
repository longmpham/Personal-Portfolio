import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import ChatIcon from '@material-ui/icons/Chat'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'

const iconSize = "2x";
const icons = {
    facebook: <FontAwesomeIcon icon={faFacebookMessenger} size={iconSize}/>,
    linkedin: <FontAwesomeIcon icon={faLinkedin} size={iconSize} color="primary"/>,
    github: <FontAwesomeIcon icon={faGithub} size={iconSize}/>,
    discord: <FontAwesomeIcon icon={faDiscord} size={iconSize}/>,
}

const LandingPage = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/" {...props} />
  ));
  const AboutPage = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/about" {...props} />
  ));
  const ContactPage = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/contact" {...props} />
  ));
  const ResumePage = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/resume" {...props} />
  ));
  const ProjectsPage = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/projects" {...props} />
  ));

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    textAlign: "center",
  },
  icon: {
      fontSize: "3rem",
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} elevation="0">
        <ChatIcon className={classes.icon} color="secondary" />
        <Typography variant="h5" component="h3">
          Reach My Social Media
        </Typography>
        {/* INSERT SOCIAL MEDIA ICONS */}
        <Button color="primary">
            {icons.facebook}
        </Button>
        <Button color="primary">
            {icons.linkedin}
        </Button>
        <Button color="primary">
            {icons.github}
        </Button>
        <Button color="primary">
            {icons.discord}
        </Button>
        
        
        
        
      </Paper>
    </div>
  );
}