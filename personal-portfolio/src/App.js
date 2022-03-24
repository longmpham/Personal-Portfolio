import React from 'react';

import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

import LandingPage from './components/Landing/landing';
import AboutPage from './components/About/about';
import ContactPage from './components/Contact/contact';
import BlogPage from './components/Blog/blog';
import ProjectsPage from './components/Projects/projects';
import ResumePage from './components/Resume/resume';
// import FAQPage from './components/views/FAQPage';
// import NotFoundPage from './components/views/NotFoundPage';
// import ServicesPage from './components/views/ServicesPage';

import NavBar from './components/Navbar/Navbar'
// import OpenIconSpeedDial from './components/SpeedDial'

// import './App.css';

const App = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        {/* <Route path="/FAQ" element={<FAQPage />} /> */}
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        {/* <Route element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  )
}
export default App