import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import map from '../images/Map.jpg';

class NeighborhoodMap extends Component {
	render() {
		return (
			<div className="container map">
				<h2 className="projectTitle">My Neighborhood Map</h2>
				<div className="row">
					<div className="col-md-4">
					<img className="images" src={map} alt="Neighborhood Map" width="100%" height="100%"/>
					</div>
					<div className="col-md-8 description">
						<p>
							- Map of places in my neighborhood such as restaurants and schools.<br/>
							- Created a map using Google Maps JavaScript API and the framework Knockout.js.<br/>
							- The user can read additional information and see a picture of the location.
						</p>
						<br/>
						<Link to='https://maymoonah.github.io/Neighborhood-Map/'>
							<p>Go To Neighborhood Map!</p>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default NeighborhoodMap;