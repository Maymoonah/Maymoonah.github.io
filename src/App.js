import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Projects from './projects.js';
import MemoryGame from './memoryGame.js';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Route exact path="/" render={() => (
          <div className="jumbotron">
            <h1 className="display-4">Welcome to Maymoonah's Portfolio!</h1>
            <hr className="my-4" />
            <p className="lead">
                <Link to="/projects" className="btn btn-primary btn-lg" href="https//:www.google.com" role="button">Check Out My Projects!</Link>
            </p>
          </div>
        )} />
        <Route exact path="/projects" component={Projects} />
      </div>
      
    );
  }
}

export default App;
