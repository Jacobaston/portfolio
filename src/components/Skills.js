import React from 'react'
import { DiHtml5,
  DiCss3,
  DiSass,
  DiJavascript1,
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
  SiJsonwebtokens } from 'react-icons/si'
import { motion } from 'framer-motion'
  

function Skills() {
  return <>
    <section>
      <div>
        <h2 className="text-center m-4">What I'm skilled at</h2>
      </div>
      <div className="container">
        <div className="row row-cols-4">
          <div className="col"><DiHtml5 /></div>
          <div className="col"><DiCss3 /></div>
          <div className="col"><DiSass /></div>
          <div className="col"><DiJavascript1 /></div>
        </div>
        <div className="row row-cols-4">
          <div className="col"><DiReact /></div>
          <div className="col"><DiNodejs /></div>
          <div className="col"><SiBabel /></div>
          <div className="col"><SiWebpack /></div>
        </div>
        <div className="row row-cols-4">
          <div className="col"><DiMongodb /></div>
          <div className="col"><SiJsonwebtokens /></div>
          <div className="col"><DiPython /></div>
          <div className="col"><SiFlask /></div>
        </div>
        <div className="row row-cols-4">
          <div className="col"><DiPostgresql /></div>
          <div className="col">Marshmallow</div>
          <div className="col"><DiNpm /></div>
          <div className="col"><DiVisualstudio /></div>
        </div>
        <div className="row row-cols-4">
          <div className="col"><DiGit /></div>
          <div className="col"><DiGithubBadge /></div>
          <div className="col"><DiHeroku /></div>
        </div>
      </div>
    </section>
  </>
}

export default Skills