import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className="contact" id='contact'>
      <h2 className="contact-title">
        Do you have a project?<br />
        I would love to help.
      </h2>
      <div className="contact-form">
        <label for="name">
          <span className="input-name">
            Name:
          </span>
          <input type="text" name="name" id="name" className="name" />
        </label>
        <label for="email">
          <span className="input-name">
            Email address:
          </span>
          <input type="text" name="email" id="email" className="email" />
        </label>
        <label for="project-info">
          <span className="input-name">
            Tell about your project:
          </span>
          <textarea name="project-info" id="project-info" className="project-info" />
        </label>
        <button className="btn send-btn">
          Send
        </button>
      </div>
    </div>
  )
}

export default Contact