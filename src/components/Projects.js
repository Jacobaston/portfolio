import React from 'react'
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiNodejs,
  DiReact,
  DiPython,
  DiPostgresql
} from 'react-icons/di'
import { SiFlask } from 'react-icons/si'
import { Carousel } from 'react-bootstrap'

function Projects() {

  return <>
    <section className="projects p-5" id="projects">
      <h2 className="text-center mb-5">Projects</h2>
      <Carousel
        prevLabel=''
        nextLabel=''
        pause='hover'
      >
        <Carousel.Item interval={4000}>
          <div className="container">
            <div className="row align-items-start">
              <div className="col">
                <img src="https://res.cloudinary.com/dj87j2nvi/image/upload/v1616421343/Screenshot_2021-03-18_at_12.29.05_zlmt0n.png" className="d-block w-50" alt="Garms search page" />
              </div>
              <div className="col">
                <h2>Garms</h2>
                <h5>Group Project | One week</h5>
                <div className="pt-2 pb-2"><DiJsBadge className="tech" /><DiHtml5 className="tech" /><DiSass className="tech" /><DiReact className="tech" /><DiPython className="tech" /><SiFlask className="tech" /><DiPostgresql className="tech" /></div>
                <p>'Garms' enables users to buy, sell and discover unique colthing and accessories from other users</p>
                <p>I used Flask with Python to build out the back-end functionality for users, items and wishlists. Using React on the front-end provides a user-friendly and interactive experience for creating and customising the shop front.</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className="container">
            <div className="row align-items-start">
              <div className="col">
                <img src="https://res.cloudinary.com/dj87j2nvi/image/upload/v1616421343/Screenshot_2021-03-18_at_12.29.05_zlmt0n.png" className="d-block w-50" alt="Garms search page" />
              </div>
              <div className="col">
                <h2>Loose End</h2>
                <h5>Group Project | One week</h5>
                <div className="pt-2 pb-2"><DiJsBadge className="tech" /><DiHtml5 className="tech" /><DiSass className="tech" /><DiReact className="tech" /><DiPython className="tech" /><SiFlask className="tech" /><DiPostgresql className="tech" /></div>
                <p>'Garms' enables users to buy, sell and discover unique colthing and accessories from other users</p>
                <p>I used Flask with Python to build out the back-end functionality for users, items and wishlists. Using React on the front-end provides a user-friendly and interactive experience for creating and customising the shop front.</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className="container">
            <div className="row align-items-start">
              <div className="col">
                <img src="https://res.cloudinary.com/dj87j2nvi/image/upload/v1616421343/Screenshot_2021-03-18_at_12.29.05_zlmt0n.png" className="d-block w-50" alt="Garms search page" />
              </div>
              <div className="col">
                <h2>SEI Jobs Board</h2>
                <h5>Pair Project | 48 Hours</h5>
                <div className="pt-2 pb-2"><DiJsBadge className="tech" /><DiHtml5 className="tech" /><DiSass className="tech" /><DiReact className="tech" /><DiPython className="tech" /><SiFlask className="tech" /><DiPostgresql className="tech" /></div>
                <p>'Garms' enables users to buy, sell and discover unique colthing and accessories from other users</p>
                <p>I used Flask with Python to build out the back-end functionality for users, items and wishlists. Using React on the front-end provides a user-friendly and interactive experience for creating and customising the shop front.</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className="container">
            <div className="row align-items-start">
              <div className="col">
                <img src="https://res.cloudinary.com/dj87j2nvi/image/upload/v1616421343/Screenshot_2021-03-18_at_12.29.05_zlmt0n.png" className="d-block w-50" alt="Garms search page" />
              </div>
              <div className="col">
                <h2>Pac-Man</h2>
                <h5>Solo Project | One week</h5>
                <div className="pt-2 pb-2"><DiHtml5 className="tech" /><DiCss3 className="tech" /><DiJsBadge className="tech" /></div>
                <p>I created a classic themed version of Pac-Man that allows the user to control pac-man, losing when caught by pursuing ghosts who move intelligently around the maze, and achieving a final score if they win.</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  </>
}

export default Projects