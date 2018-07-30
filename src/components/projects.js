import React, { Component } from 'react';
import MemoryGame from './memoryGame';
import ArcadeGame from './arcadeGame';
import PixelArt from './pixelArt';
import NeighborhoodMap from './neighborhoodMap';

class Projects extends Component {
	render() {
		return (
			<div className="container">
				<div className="projects">
					<div className="row">
						<div className="col-md-3 project">
							<MemoryGame />
						</div>
						<div className="col-md-3 project">
							<ArcadeGame />
						</div>
						<div className="col-md-3 project">
							<PixelArt />
						</div>
						<div className="col-md-3 project">
							<NeighborhoodMap />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;