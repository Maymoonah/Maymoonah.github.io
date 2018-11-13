import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

class Projects extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container">
					<div className="projects">
						<div className="row">
							<div className="col-md-3 project">
								<Link to='/projects/memoryGame'>
									<img src="../images/Memory.png" alt="Memory Game"/>
									<h4>Memory Game</h4>
								</Link>
							</div>
							<div className="col-md-3 project">
								<Link to='/projects/arcadeGame'>
									<img src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Arcade Game"/>
									<h4>Arcade Game</h4>
								</Link>
							</div>
							<div className="col-md-3 project">
								<Link to='/projects/pixelArt'>
									<img src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Pixel Art"/>
									<h4>Pixel Art</h4>
								</Link>
							</div>
							<div className="col-md-3 project">
								<Link to='/projects/neighborhoodMap'>
									<img src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Neighborhood Map"/>
									<h4>Neighborhood Map</h4>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;