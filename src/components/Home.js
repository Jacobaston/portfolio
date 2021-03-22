import React from 'react'
import Particles from 'react-particles-js'
import Skills from './Skills'
import About from './About'
import Projects from './Projects'

function Home() {

  // Image real within a screen from
  // Array of image sources
  // Loop through array on a timeout (3-5 seconds per image)
  // Render new image source on each loop
  // Wrap timeout in an interval so the loop restarts after showing each photo

  return <>

    <section className="hero">
      <Particles
        params={{
          'particles': {
            'number': {
              'value': 50
            },
            'size': {
              'value': 3
            }
          },
          'interactivity': {
            'events': {
              'onhover': {
                'enable': true,
                'mode': 'repulse'
              }
            }
          }
        }} />
      <div className="text-center title typewriter">
        <h1>Jacob Aston</h1>
        <h3>Software Engineer</h3>
      </div>
    </section>

    <About />

    <Skills />

    <Projects />

  </>
}

export default Home