import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

import Button from '@material-ui/core/Button'

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

const links = {
    GitHub: "https://github.com/longmpham",
    LinkedIn: "https://www.linkedin.com/in/longmpham/",
    Discord: "Noobinator#1168",
    FacebookMessenger: "https://m.me/long.m.pham.93"
}


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    textAlign: "center",
    // backgroundColor: "#DDD",
    // border: "solid",
    margin: "auto",
  },
  icon: {
      fontSize: "3rem",
  }
}));

export default function PaperSheet() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function HandleDiscordClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : null;


  return (
    <div>
      <Paper className={classes.root} elevation="0" square>
        {/* <ChatIcon className={classes.icon} color="secondary" /> */}
        {/* <Typography variant="body1" component="h3"> */}
          {/* DIRECT CONTACT */}
          {/* Contact me directly! */}
        {/* </Typography> */}
        {/* INSERT SOCIAL MEDIA ICONS */}
        <Button href={links.FacebookMessenger} color="primary">
            {icons.facebook}
        </Button>
        <Button href={links.LinkedIn}  color="primary">
            {icons.linkedin}
        </Button>
        <Button href={links.GitHub} color="primary">
            {icons.github}
        </Button>
        <Button aria-describedby={id} onClick={HandleDiscordClick} color="primary">
            {icons.discord}
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.root}>{links.Discord}</Typography>
        </Popover>
      </Paper>
    </div>
  );
}