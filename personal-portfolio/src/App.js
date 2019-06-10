import React from 'react';
import { Component } from 'react'
// import './App.css';
import AppRouter from './components/routers/router';

// pages!
// import LandingPage from './components/views/landing'
// import AboutPage from './components/views/about'
// import ContactPage from './components/views/contact'
// import ProjectsPage from './components/views/projects'
// import ResumePage from './components/views/resume'

import NavBar from './components/modules/NavBar'
// import OpenIconSpeedDial from './components/SpeedDial'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <AppRouter />
      </div>
    )
  }
}
export default App