import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navigation">
				<Link className="navbar-brand" to='/'><img src={logo} id="logo" alt="logo" height="30px" width="40px" />Maymoonah Mohammed</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
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