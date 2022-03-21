import React from 'react';

import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

// import LandingPage from './components/views/landing';
// import AboutPage from './components/views/about';
// import ContactPage from './components/views/contact';
// import BlogPage from './components/views/blog';
// import ProjectsPage from './components/views/projects';
// import ResumePage from './components/views/resume';
// import FAQPage from './components/views/FAQPage';
// import NotFoundPage from './components/views/NotFoundPage';
// import ServicesPage from './components/views/ServicesPage';

import NavBar from './components/modules/NavBar'
// import OpenIconSpeedDial from './components/SpeedDial'

// import './App.css';

const App = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<LandingPage />} exact={true} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectsPage />} /> */}
        {/* <Route path="/FAQ" element={<FAQPage />} /> */}
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        {/* <Route element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  )
}
export default App