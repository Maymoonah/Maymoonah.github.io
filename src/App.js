import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Projects from './components/projects.js';
import MemoryGame from './components/memoryGame';
import ArcadeGame from './components/arcadeGame';
import NeighborhoodMap from './components/neighborhoodMap';
import PixelArt from './components/pixelArt';
import AboutMe from './components/aboutMe';
import Resume from './components/resume';
import Contact from './components/contact';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <Route exact path="/" render={() => (
          <div className="jumbotron">
            <h1 className="display-4">Welcome to Maymoonah's Portfolio!</h1>
            <hr className="my-4" />
            <p className="lead">
                <Link to="/projects" className="btn btn-primary btn-lg" role="button">Check It Out !</Link>
            </p>
          </div>
        )} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/memorygame" component={MemoryGame} />
        <Route path="/projects/arcadegame" component={ArcadeGame} />
        <Route path="/projects/neighborhoodmap" component={NeighborhoodMap} />
        <Route path="/projects/pixelart" component={PixelArt} />
      </div>
      
    );
  }
}

export default App;
