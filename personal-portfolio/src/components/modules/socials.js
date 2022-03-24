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
    border: "none",
    backgroundColor: "inherit"
  }

  // const [isHover, setIsHover] = React.useState(false)

  // const handleHover = () => {
  //   setIsHover(true)
  //   setTimeout(() => {
  //     setIsHover(false)
  //     // console.log('false')
  //   }, 1000)    
  // }

  const popup = {
    backgroundColor: "green",
    // margin: "30%",
    padding: "5px",
    zIndex: "999px",
    position: "relative",
    // transition: "div 1s"
  }

  // const PopUp = 
  //     <div style={popup}>
  //       <p>Noobinator#1618</p>
  //     </div>
  
  // console.log(isHover)

  return (
    <div style={ParentDiv}>
        <a style={LinkProps} href="https://www.instagram.com/longmpham/"><FaInstagram style={IconProps} /></a>
        <a style={LinkProps} href="https://www.linkedin.com/in/longmpham/"><FaLinkedin style={IconProps} /></a>
        <a style={LinkProps} href="https://github.com/longmpham"><FaGithub style={IconProps} /></a>
        <button style={LinkProps}><FaDiscord style={IconProps} /></button>
        {/* <button style={LinkProps} href="" onClick={handleHover}>{!isHover ?<FaDiscord style={IconProps} />: PopUp}</button> */}
    </div>
  )
}

export default Socials