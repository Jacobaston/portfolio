import React from 'react'
// import { SocialIcon } from 'react-social-icons'

function Footer() {


  return <footer className="p-2">
    <section className="section is-small">
      <div className="columns">
        <div className="column">
          <h2>Contact</h2>
          <div className="contacts-container">
            <p className="contact-p">
              <i className="fa fa-envelope fa-lg" />
              <a
                className="contactLink"
                href="mailto:stefansokolowski16@gmail.com"
                alt="Jacob Aston email"
                target="_blank"
                rel="noreferrer">jacobaston92@gmail.com</a>
            </p>
            <p className="contact-p">
              <i className="fa fa-github fa-lg" />
              <a
                className="contactLink"
                href="https://github.com/Jacobaston"
                alt="Jacob Aston Github"
                target="_blank"
                rel="noreferrer">github.com/Jacobaston</a>
            </p>
            <p className="contact-p">
              <i className="fa fa-linkedin fa-lg" />
              <a
                className="contactLink"
                href="https://www.linkedin.com/in/jacob-aston/"
                alt="Jacob Aston Linkedin"
                target="_blank"
                rel="noreferrer">linkedin.com/in/jacob-aston</a>
            </p>
          </div>
          <a className="hiddenAnchors" name="contact"></a>
          <div className="copyright">
            &copy;2021 Jacob Aston
          </div>
        </div>
      </div>
    </section>
  </footer>
}

export default Footer