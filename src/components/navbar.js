import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark navigation">
				<Link className="navbar-brand" to='/'>Maymoonah Mohammed</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to='/'>Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to='/aboutme'>About Me</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to='/projects'>Projects</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to='/resume'>Resume</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;