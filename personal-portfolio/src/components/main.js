import React from 'react';
import LandingPage from './landingpage'
import AboutMePage from './aboutme'
import ProjectsPage from './projects'
import ResumePage from './resume'
import ContactPage from './contact'
import { Route, Switch } from 'react-router-dom'



const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/aboutme' component={AboutMePage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/resume' component={ResumePage} />
    </Switch>
)

export default Main;