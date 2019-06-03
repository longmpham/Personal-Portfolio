import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../views/landing';
import AboutPage from '../views/about';
import ContactPage from '../views/contact';
import ProjectsPage from '../views/projects';
import ResumePage from '../views/resume';
// import FAQPage from '../views/FAQPage';
// import NotFoundPage from '../views/NotFoundPage';
// import ServicesPage from '../views/ServicesPage';

const AppRouter = () => (
  <Switch>
  <Route path="/" component={LandingPage} exact={true} />
  <Route path="/about" component={AboutPage} />
  <Route path="/contact" component={ContactPage} />
  <Route path="/resume" component={ResumePage} />
  <Route path="/projects" component={ProjectsPage} />

  {/* <Route path="/FAQ" component={FAQPage} /> */}
  {/* <Route path="/services" component={ServicesPage} /> */}
  {/* <Route component={NotFoundPage} /> */}
  </Switch>
);

export default AppRouter;