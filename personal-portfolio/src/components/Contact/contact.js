import React from 'react'
import Socials from '../modules/socials'

import "./contact.css"

const ContactPage = () => {
  return (
    <div className="contact-root-container">
      <div className="contact-left-container">
        picture placeholder
      </div>
      <div className="contact-right-container">
        <div className="contact-title-container">
          <h2>Thanks for visiting!</h2>
          <h5>If you liked my stuff and want to get in contact, please email me!</h5>
          <input placeholder="johnsmith@gmail.com"></input>
          <textarea placeholder="Hi, your website looks amazing. Please contact me at 555-555-5555 and let's set up an interview"></textarea>
          <Socials bgcolor="transparent" fontcolor="green" fontsize="40px" />
        </div>
      </div>

    </div>
  )
}

export default ContactPage