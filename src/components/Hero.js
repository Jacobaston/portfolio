import React from 'react'
import Particles from 'react-particles-js'

function Hero() {
  return <>
    <section className="hero">
      <div
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '70vh'
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 250,
                density: {
                  enable: true
                }
              },
              color: {
                value: '#fff'
              },
              size: {
                value: 8,
                random: true
              },
              move: {
                out_mode: 'out'
              },
              line_linked: {
                enable: false
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                },
                onresize: {
                  enable: true,
                  density_auto: true,
                  density_area: 400
                }
              },
              modes: {
                remove: {
                  particles_nb: 10
                }
              }
            }
          }}
        />
      </div>
      <div className="text-center title typewriter">
        <h1>Jacob Aston</h1>
        <h3>Software Engineer</h3>
      </div>
    </section>
  </>
}

export default Hero