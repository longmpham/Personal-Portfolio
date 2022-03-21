import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom"

import Drawer from "../modules/Drawer"


const NavBar = () => {

  const pages = [
    {
      "title": "About Me",
      "link": "/about",
    },
    {
      "title": "Projects",
      "link": "/projects",
    },
    {
      "title": "Blog",
      "link": "/blog",
    },
    {
      "title": "Resume/CV",
      "link": "/resume",
    },
    {
      "title": "Contact",
      "link": "/contact",
    },
  ]

  return (
    <AppBar position="static">
      <Toolbar>
        <Drawer />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        {pages.map(page => {
          return (
            <Button component={Link} to={`${page.link}`} color="inherit">{page.title}</Button>
          )
        })}
      </Toolbar>
    </AppBar>

    // <>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Drawer />
    //       <Typography variant="h6" color="inherit">
    //         {/* <Button className={classes.title} component={LandingPage} color="inherit">Home</Button> */}
    //         Long Pham
    //       </Typography>
    //       <Hidden smDown>
    //         <Button component={AboutPage} color="inherit">About Me</Button>
    //         <Button component={ProjectsPage} color="inherit">Projects</Button>
    //         <Button component={BlogPage} color="inherit">Blog</Button>
    //         <Button component={ResumePage} color="inherit">Resume/CV</Button>
    //         {/* <Button disabled component={ContactPage} color="inherit">Contact</Button> */}
    //         <Button component={ContactPage} color="inherit">Contact</Button>
    //       </Hidden>
    //     </Toolbar>
    //   </AppBar>
    // </>
  );
};

export default NavBar;
