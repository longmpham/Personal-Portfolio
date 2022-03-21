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
// import makeStyles from '@mui/styles/makeStyles';
import { Link } from "react-router-dom"

import Drawer from "../modules/Drawer"

const Navbar = () => {

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
        <Button color="inherit" component={Link} to="/"sx={{ justifyContent: "left", flexGrow: 1 }} >
        <Typography variant="h6"  >
          Long Pham
        </Typography></Button>
        {pages.map(page => {
          return (
            <Button key={page.title} sx={{ display: { xs: 'none', md: 'flex' } }} component={Link} to={`${page.link}`} color="inherit">{page.title}</Button>
          )
        })}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
