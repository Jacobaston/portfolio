import React from 'react'
import Particles from 'react-particles-js'

function Hero() {
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
  </>
}

export default Hero