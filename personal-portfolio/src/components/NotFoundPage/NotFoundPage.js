import React from "react"
import { Link } from "react-router-dom"

import "./NotFoundPage.css"
import { MdHome } from "react-icons/md"
import image_404 from "../../images/misc/404.gif"

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-main">
        <h1>Page Not Found</h1>
        <img src={image_404} alt="go back home"/>
        <button><Link to="/about"><MdHome /></Link></button>
      </div>
    </div>
  )
}

export default NotFoundPage