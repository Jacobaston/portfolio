import React from 'react'

function About() {
  return <>
    <section className="m-5">
      <div>
        <h2 className="text-center">About me</h2>
      </div>
      <div className="container m-4">
        <div className="row align-items-center">
          <div className="col-xs-12 col-md-6 text-center">
            <p>Hi! I am Jacob, self-taught and graduated software engineer at General Assembly.</p>
            <p>I seek a developer role to contribute to both sides of the stack, share my ideas, and grow in a continued-learning and knowledge-sharing environment. I am eager to collaborate on projects that develop a better and more sustainable tomorrow</p>
            <p>I’ve thrived on leading and motivating people, improving operational processes and ultimately creating memorable customer experiences. After more than 12 years of hospitality background, I’ve decided to blend my passion for software engineering, my problem-solving skills and my creativity to join the developer community to pursue a career change and become part of the solution for today’s world challenges.</p>
            <p>Are you curious for more?</p>
            <a href="mailto: jacobaston92@gmail.com">Get in touch</a>
          </div>
          <div className="col-xs-12 col-md-6">
            <img src='https://res.cloudinary.com/dj87j2nvi/image/upload/v1616411173/profile_copy_cjlsvt.jpg' />
          </div>
        </div>
      </div>
    </section>
  </>
}

export default About