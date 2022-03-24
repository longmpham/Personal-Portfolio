import React from 'react'
import { send } from 'emailjs-com';
// https://dashboard.emailjs.com/admin

import Socials from '../modules/socials'

import "./contact.css"

const ContactPage = () => {

  const [toSend, setToSend] = React.useState({
    from_name: '',
    reply_to: '',
    message: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    send(
      "gmail",
      "gmail_template",
      toSend,
      "Y1f4aA8d6t6jf8It5"
    ).then( response => {
      console.log("Success", response.status, response.text);
    }).catch(error => {
      console.log("Failed...", error);
    })

  }

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  }

  return (
    <div className="contact-root-container">
      {/* <div className="contact-left-container">
      </div> */}
      {/* <div className="contact-right-container"> */}
      <div className="contact-title-container">
        <h2>Thanks for visiting!</h2>
        <h5>If you liked my stuff and want to get in contact, please email me!</h5>
        <form onSubmit={handleSubmit}>
          <input type="text" name="from_name" placeholder="Your Name" value={toSend.from_name} onChange={handleChange}></input>
          <input type="email" name="reply_to" placeholder="Your_Email@email.com" value={toSend.reply_to} onChange={handleChange}></input>
          <textarea type="text" name="message" placeholder="Hi, your website looks amazing. Please contact me at 555-555-5555 and let's set up an interview." value={toSend.message} onChange={handleChange}></textarea>
          <button type="submit">Submit</button>
        </form>
        <Socials bgcolor="transparent" fontcolor="white" fontsize="40px" />
      </div>
      {/* </div> */}

    </div>
  )
}

export default ContactPage