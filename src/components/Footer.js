import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {


  return <>
    <div className="m-5" id="contact">
      <h2 className="text-center">Don't be shy... Come say Hello</h2>
    </div>
    <div className="container mb-4">
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
  </>
}

export default Footer