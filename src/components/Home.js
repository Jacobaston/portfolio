import React from 'react'
import Skills from './Skills'
import About from './About'

function Home() {

  const background = '../images/background'
  const profile = '../images/profile'

  // Image real within a screen from
  // Array of image sources
  // Loop through array on a timeout (3-5 seconds per image)
  // Render new image source on each loop
  // Wrap timeout in an interval so the loop restarts after showing each photo

  const backgroundStyle = {
    width: '100%',
    hheight: '100vh'
  }

  return <>

    <section>
      <img src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80' style={backgroundStyle} />
    </section>

    <About />

    {/* Portfolio */}
    <section>

    </section>

    <Skills />
  </>
}

export default Home