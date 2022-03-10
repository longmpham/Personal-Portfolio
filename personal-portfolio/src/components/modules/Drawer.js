import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import FolderIcon from '@material-ui/icons/Folder';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import HomeIcon from '@material-ui/icons/Home';

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const LandingPage = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/" {...props} />
));
const AboutPage = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/about" {...props} />
));
const BlogsPage = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/blog" {...props} />
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


function Drawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,

  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button component={LandingPage}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>  
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={AboutPage}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>  
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem button component={BlogsPage}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>  
          <ListItemText primary="Blogs" />
        </ListItem>
        <ListItem button component={BlogsPage}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>  
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={ProjectsPage}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>  
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={ResumePage}>
          <ListItemIcon>
            <FolderSharedIcon />
          </ListItemIcon>  
          <ListItemText primary="Resume/CV" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}

export default Drawer;