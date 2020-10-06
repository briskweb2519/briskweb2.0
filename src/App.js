import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderComponent from './Components/HeaderComponent'
import HomeComponent from './Components/HomeComponent'
import FooterComponent from './Components/FooterComponent'
import ContactComponent from './Components/ContactComponent'
import ProjectComponent from './Components/ProjectComponent'
import ServicesComponent from './Components/ServicesComponent'
import ProjectDetailComponent from './Components/ProjectDetailComponent'
import AboutComponent from './Components/AboutComponent'
import ProjectDiscussComponent from './Components/ProjectDiscussComponent'
import ServiceExploreCoponent from './Components/ServiceExploreCoponent'

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <Switch>
          <Route path='/' exact component={HomeComponent} />
          <Route path="/services" exact component={ServicesComponent} />
          <Route path="/project" component={ProjectComponent} />
          <Route path="/about" component={AboutComponent} />
          <Route path="/contact" component={ContactComponent} />
          <Route path="/project-details" component={ProjectDetailComponent} />
          <Route path="/project-discuss" component={ProjectDiscussComponent} />
          <Route path="/services/explore" component={ServiceExploreCoponent} />
        </Switch>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
