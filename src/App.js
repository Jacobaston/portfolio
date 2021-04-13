import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App