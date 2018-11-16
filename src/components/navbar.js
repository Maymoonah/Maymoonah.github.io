import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark navigation">
				<Link className="navbar-brand" to='/'>Maymoonah Mohammed</Link>
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
						<li class="nav-item dropdown">
					        <Link class="nav-link dropdown-toggle" to='#' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          Projects
					        </Link>
					        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
					          <Link class="dropdown-item" to='/memorygame'>Memory Game</Link>
					          <div class="dropdown-divider"></div>
					          <Link class="dropdown-item" to='arcadegame'>Arcade Game</Link>
					          <div class="dropdown-divider"></div>
					          <Link class="dropdown-item" to='pixelart'>Pixel Art</Link>
					          <div class="dropdown-divider"></div>
					          <Link class="dropdown-item" to='neighborhoodmap'>Neighborhood map</Link>
					        </div>
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