import React, { Component } from 'react';
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
						<ul>
							<li>Map of places in my neighborhood such as restaurants and schools.</li><br/>
							<li>I created a map using Google Maps JavaScript API and the framework Knockout.js.</li><br/>
							<li>The user can read additional information and see a picture of the location either by clicking
							on the icon on the map, or by clicking on the location in the sidebar.</li><br />
							<li>The user can also filter the locations by entering text into the input on the sidebar.</li>
						</ul>
						<br/>
						
							<button className="btn projectBtn"><a href="https://maymoonah.github.io/Neighborhood-Map/">Go To Neighborhood Map!</a></button>
						
					</div>
				</div>
			</div>
		);
	}
}

export default NeighborhoodMap;