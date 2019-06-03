import React from 'react';
<<<<<<< HEAD
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
=======
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Footer, FooterSection, FooterLinkList } from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
      <div className="demo-big-content">
          <Layout>
              {/* INSERT HEADER  */}
              <Header className='header-color' title={<a href="/">Home</a>} scroll>
                <Navigation>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/resume">Resume</Link>
                </Navigation>
              </Header>
              {/* INSERT SIDE MENU BAR */}
              <Drawer title={<a href="/">Home</a>} scroll>
                <Navigation>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/resume">Resume</Link>
                </Navigation>
              </Drawer>

              <Content>
                <div className="page-content" />
                <Main />
              </Content>
              {/* INSERT FOOTER */}
              <Footer size="mini">
                <FooterSection type="left" logo="Long Pham">
                {/* <FooterSection type="left" logo={<a href="/">Long Pham</a>}> */}
                    <FooterLinkList>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    </FooterLinkList>
                </FooterSection>
              </Footer>
>>>>>>> ba78b4b899409e4b4ff96bc06b776d9a7bc3d54c

          </Layout>
      </div>
    </div>
  );
}

export default App;
