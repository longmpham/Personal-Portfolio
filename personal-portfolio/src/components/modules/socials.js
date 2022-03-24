import React from 'react'

import { FaInstagram, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa"

const Socials = ({bgcolor, fontcolor, fontsize}) => {

  // parent div
  const ParentDiv = {
    // height: fontsize,
    // width: "100%",
    backgroundColor: bgcolor,
    borderRadius: 40,
    gap: "5px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const IconProps = {
    color: fontcolor,
    fontSize: fontsize,
    margin: "5px 5px",
    flex: "1 1 100%",
  }

  const LinkProps = {
    margin: 0,
    padding: 0,
    textDecoration: "none",

  }

  return (
    <div style={ParentDiv}>
        <a style={LinkProps} href="/"><FaInstagram style={IconProps} /></a>
        <a style={LinkProps} href="/"><FaLinkedin style={IconProps} /></a>
        <a style={LinkProps} href="/"><FaGithub style={IconProps} /></a>
        <a style={LinkProps} href="/"><FaDiscord style={IconProps} /></a>
    </div>
  )
}

export default Socials