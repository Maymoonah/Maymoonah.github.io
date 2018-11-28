import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import memory from '../images/Memory.jpg';
import arcade from '../images/Arcade.jpg';
import pixel from '../images/Pixel.png';
import map from '../images/Map.jpg';

class Projects extends Component {
	render() {
		return (
			<div className="container work">
				<div className="row">
					<div className="col-md-12">
						<h1 className="title">Projects</h1>
					</div>
				</div>
				<div className="projects">
					<div className="row">
						<div className="col-md-6 project">
							<Link to='/projects/memorygame' class="link">
								<img src={memory} alt="Memory Game"/>
								<h4>Memory Game</h4>
							</Link>
						</div>
					
						<div className="col-md-6 project">
							<Link to='/projects/arcadegame' class="link">
								<img src={arcade} alt="Arcade Game"/>
								<h4>Arcade Game</h4>
							</Link>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 project">
							<Link to='/projects/pixelart' class="link">
								<img src={pixel} alt="Pixel Art"/>
								<h4>Pixel Art</h4>
							</Link>
						</div>
					
						<div className="col-md-6 project">
							<Link to='/projects/neighborhoodmap' class="link">
								<img src={map} alt="Neighborhood Map"/>
								<h4>Neighborhood Map</h4>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;