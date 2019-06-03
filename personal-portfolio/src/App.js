import React from 'react';
import { Component } from 'react'
// import './App.css';
import AppRouter from './components/routers/router';

import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar'
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
        {/* landing page / hero */}
        {/* <Hero /> */}
        {/* <Modal> */}
        <OpenIconSpeedDial />
        {/* </Modal> */}
        <AppRouter />
        {/* <SimpleContainer />     */}
        {/* about me */}
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