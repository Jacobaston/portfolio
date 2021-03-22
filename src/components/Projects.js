import React from 'react'

function Projects() {

  return <>
    <section className="projects p-5">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h5 className="text-center">Garms</h5>
            <p className="text-center">A full stack application, with a PostgreSQL database, Flask backend and React frontend.</p>
            <img src="https://res.cloudinary.com/dj87j2nvi/image/upload/v1616421343/Screenshot_2021-03-18_at_12.29.05_zlmt0n.png" className="d-block w-100" alt="Garms search page"/>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dj87j2nvi/image/upload/v1616421851/profile_prx6kb.png" className="d-block w-100" alt="Garms profile" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Loose End</h5>
              <p>A full stack application, with a MongoDB database, data served using Express and a React front-end.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>SEI Jobs</h5>
              <p>A two-day hackathon paired project to create a React app that consumes a public API.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Pac-Man</h5>
              <p>A week-long solo project to create a grid-based game using vanilla JavaScript, HTML and CSS. </p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  </>
}

export default Projects