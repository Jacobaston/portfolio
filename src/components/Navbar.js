import React from 'react'

function Navbar() {
  return <>
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <img src="https://cdn.worldvectorlogo.com/logos/london-underground.svg" alt="" width="30" height="24" />
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </>
}

export default Navbar