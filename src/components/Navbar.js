import React from 'react'

function Navbar() {
  return <>
    <nav className="navbar sticky-top p-2">
      <div className="container-fluid">
        <img src="https://res.cloudinary.com/dj87j2nvi/image/upload/v1617226237/logo_dacuyr.png" alt="" width="40" height="30" />
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#technologies">Technologies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </>
}

export default Navbar