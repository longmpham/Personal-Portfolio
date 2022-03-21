import * as React from "react";

import { Link } from "react-router-dom"

import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md" 

import "./Navbar.css"

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
  
  const [isDrawer, setIsDrawer] = React.useState(false);

  const handleClick = () => {
    setIsDrawer(prevIsDrawer => !prevIsDrawer)
  }

  return (
    <nav className="navbar">
      <h1 className="navbar-middle navbar-title"><Link to="/">Long Pham</Link></h1>
      <ul className="navbar-right navbar-menu-buttons">
        {pages.map(page => {
          return (
            <li className="navbar-menu-button" key={page.title}><Link to={`${page.link}`}>{page.title}</Link></li>
            )
          })}
      </ul>
      {isDrawer ?
      <button className="navbar-menu-hamburger" onClick={handleClick}><MdCancel size={40} /></button>
      : <button className="navbar-menu-hamburger" onClick={handleClick}><GiHamburgerMenu size={40} /></button>
      }
      {isDrawer && 
      <ul onClick={handleClick} className="navbar-sidebar">
        {pages.map(page => {
          return (
            <li className="navbar-sidebar-button" key={page.title}><Link to={`${page.link}`}>{page.title}</Link></li>
            )
          })}
      </ul>
      }
    </nav>
  );
};

export default Navbar;
