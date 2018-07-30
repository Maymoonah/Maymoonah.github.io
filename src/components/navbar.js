import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark">
				<Link to='/projects'>
					<h2>Projects</h2>
				</Link>
				<Link to='/'>
					<h2>Home</h2>
				</Link>
			</nav>	
		);
	}
}

export default Navbar;