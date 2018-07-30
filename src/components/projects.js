import React, { Component } from 'react';
import MemoryGame from './memoryGame';
import ArcadeGame from './arcadeGame';
import PixelArt from './pixelArt';
import NeighborhoodMap from './neighborhoodMap';

class Projects extends Component {
	render() {
		return (
			<div className="container">
				<h1 className="title">Projects</h1>
				<div className="projects">
					<div className="row">
						<div className="col-md-3 project">
							<img src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Memory Game"/>
							<h4>Memory Game</h4>
						</div>
						<div className="col-md-3 project">
							<img src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Arcade Game"/>
							<h4>Arcade Game</h4>
						</div>
						<div className="col-md-3 project">
							<img src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Pixel Art"/>
							<h4>Pixel Art</h4>
						</div>
						<div className="col-md-3 project">
							<img src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Neighborhood Map"/>
							<h4>Neighborhood Map</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;