import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Projects from './components/projects.js';
import MemoryGame from './components/memoryGame';
import ArcadeGame from './components/arcadeGame';
import NeighborhoodMap from './components/neighborhoodMap';
import PixelArt from './components/pixelArt';
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
                <Link to="/projects" className="btn btn-primary btn-lg" role="button">Check Out My Projects!</Link>
            </p>
          </div>
        )} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/memoryGame" component={MemoryGame} />
        <Route exact path="/projects/arcadeGame" component={ArcadeGame} />
        <Route exact path="/projects/neighborhoodMap" component={NeighborhoodMap} />
        <Route exact path="/projects/pixelArt" component={PixelArt} />
      </div>
      
    );
  }
}

export default App;
