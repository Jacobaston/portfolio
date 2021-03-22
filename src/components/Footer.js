import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {


  return <>
    <div className="m-5">
      <h2 className="text-center">Contact Me</h2>
    </div>
    <div className="container mb-4">
      <div className="row align-items-center">
        <div className="col">
          <SocialIcon src="https://www.linkedin.com/in/jacob-aston/" />
          <p className="text-center">LinkedIn</p>
          {/* <img src={LinkedIn image} /> */}
        </div>
        <div className="col">
          <SocialIcon src="https://github.com/Jacobaston" />
          <p className="text-center">GitHub</p>
          {/* <img src={GitHub image}/> */}
        </div>
      </div>
    </div>
  </>
}

export default Footer