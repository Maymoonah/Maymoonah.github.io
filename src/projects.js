import React, { Component } from 'react';
import MemoryGame from './memoryGame'

class Projects extends Component {
	render() {
		return (
			<div className="projects container">
				<div className="row">
					<div className="col-md-4">
						<MemoryGame />
					</div>
					<div className="col-md-4">

					</div>
					<div className="col-md-4">

					</div>
				</div>
			</div>

		);
	}
}

export default Projects;