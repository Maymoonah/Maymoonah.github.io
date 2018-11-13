import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
			  <Link className="navbar-brand" to='/'>Maymoonah Mohammed</Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNavDropdown">
			    <ul className="navbar-nav">
			      <li className="nav-item">
			        <Link className="nav-link" to='/'>About Me</Link>
			      </li>
			      <li className="nav-item">
			        <Link className="nav-link" to='/'>Projects</Link>
			      </li>
			      <li className="nav-item">
			        <Link className="nav-link" to='/'>Resume</Link>
			      </li>
			      <li className="nav-item">
			        <Link className="nav-link" to='/'>Contact</Link>
			      </li>
			    </ul>
			  </div>
			</nav>
		);
	}
}

export default Navbar;