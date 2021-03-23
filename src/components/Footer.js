import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {


  return <>
    <footer className="p-5">
      <div className="contact" id="contact">
        <h2 className="text-center">Say Hello</h2>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col text-center">
            <div>
              <SocialIcon network="linkedin" />
            </div>
            <a className="text-center" href="https://www.linkedin.com/in/jacob-aston/" target="blank">LinkedIn/JacobAston</a>
          </div>
          <div className="col text-center">
            <div>
              <SocialIcon network="github" />
            </div>
            <a className="text-center" href="https://github.com/Jacobaston" target="blank">GitHub/JacobAston</a>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default Footer