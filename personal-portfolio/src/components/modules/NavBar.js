import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Drawer from '../modules/Drawer'
import { Link } from 'react-router-dom'
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
  },
}));

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

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu"> */}
            <Drawer />
            {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography component={LandingPage} variant="h6" color="inherit" className={classes.title}>
            {/* <Button className={classes.title} component={LandingPage} color="inherit">Home</Button> */}
            Long Pham
          </Typography>
          <Hidden smDown>
            <Button component={AboutPage} color="inherit">About Me</Button>         
            <Button component={ProjectsPage} color="inherit">Projects</Button>
            <Button component={ResumePage} color="inherit">Resume/CV</Button>
            {/* <Button disabled component={ContactPage} color="inherit">Contact</Button> */}
            <Button component={ContactPage} color="inherit">Contact</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;