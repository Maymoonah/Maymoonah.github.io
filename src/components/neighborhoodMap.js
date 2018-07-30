import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NeighborhoodMap extends Component {
	render() {
		return (
			<div>
				<Link to='/projects'>
					<h1 className="title">Projects</h1>
				</Link>
				<div className="row">
					<div className="col-md-4">
						<img src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Neighborhood Map" width="100%" height="100%"/>
					</div>
					<div className="col-md-8">
						<p>
							- Map of places in my neighborhood such as restaurants and schools.<br/>
							- Created a map using Google Maps JavaScript API and the framework Knockout.js.<br/>
							- The user can read additional information and see a picture of the location.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default NeighborhoodMap;