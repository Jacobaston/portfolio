import React from 'react'
import { DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiPostgresql,
  DiNpm,
  DiGit,
  DiGithubBadge,
  DiHeroku,
  DiVisualstudio } from 'react-icons/di'
import { SiWebpack,
  SiBabel,
  SiFlask,
  SiJsonwebtokens,
  SiTrello } from 'react-icons/si'  

function Skills() {


  return <>
    <section className="m-5">
      <div>
        <h2 className="text-center m-4">Technologies</h2>
      </div>
      <div className="container text-center">
        <div className="row row-cols-4">
          <div className="col react-icons"><DiHtml5 /><br/><p>HTML5</p></div>
          <div className="col react-icons"><DiCss3 /><br/><p>CSS3</p></div>
          <div className="col react-icons"><DiJsBadge /><br/><p>JavaScript</p></div>
          <div className="col react-icons"><DiSass /><br/><p>SaSS</p></div>
        </div>
        <div className="row row-cols-4">
          <div className="col react-icons"><DiReact /><br/><p>React.js</p></div>
          <div className="col react-icons"><DiNodejs /><br/><p>Node.js</p></div>
          <div className="col react-icons"><SiBabel /><br/><p>Babel</p></div>
          <div className="col react-icons"><SiWebpack /><br/><p>Webpack</p></div>
        </div>
        <div className="row row-cols-4">
          <div className="col react-icons"><DiMongodb /><br/><p>MongDb</p></div>
          <div className="col react-icons"><SiJsonwebtokens /><br/><p>JWT</p></div>
          <div className="col react-icons"><DiPython /><br/><p>Python</p></div>
          <div className="col react-icons"><SiFlask /><br/><p>Flask</p></div>
        </div>
        <div className="row row-cols-4">
          <div className="col react-icons"><DiPostgresql /><br/><p>Postgres SQL</p></div>
          <div className="col react-icons"><SiTrello /><br/><p>Trello</p></div>
          <div className="col react-icons"><DiNpm /><br/><p>Npm</p></div>
          <div className="col react-icons"><DiVisualstudio /><br/><p>VS Code</p></div>
        </div>
        <div className="row row-cols-4">
          <div className="col react-icons"><DiGit /><br/><p>Git</p></div>
          <div className="col react-icons"><DiGithubBadge /><br/><p>Githhub</p></div>
          <div className="col react-icons"><DiHeroku /><br/><p>Heroku</p></div>
        </div>
      </div>
    </section>
  </>
}

export default Skills