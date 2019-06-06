import React from 'react';
import { Component } from 'react'
// import './App.css';
import AppRouter from './components/routers/router';

// pages!
import LandingPage from './components/views/landing'
import AboutPage from './components/views/about'
import ContactPage from './components/views/contact'
import ProjectsPage from './components/views/projects'
import ResumePage from './components/views/resume'

import Button from '@material-ui/core/Button';
import NavBar from './components/modules/NavBar'
import SimpleContainer from './components/SimpleContainer'
import SimpleBottomNav from './components/BottomNav'
import OpenIconSpeedDial from './components/SpeedDial'
import Modal from './components/Modal'

class App extends Component {
  render() {
    return (
      <div>
        {/* nav bar */}
        <NavBar />
        <AppRouter />
        {/* landing page / hero */}
        {/* <Modal> */}
        <OpenIconSpeedDial />
        {/* </Modal> */}
        {/* about me */}
        {/* <LandingPage />
        <AboutPage />
        <ContactPage />
        <ProjectsPage />
        <ResumePage /> */}


        {/* interests */}
        {/* projects */}
        {/* resume CV */}
        {/* contact me */}
        {/* app footer bar thing */}
        {/* <SimpleBottomNav /> */}

      </div>
    )
  }
}
export default App