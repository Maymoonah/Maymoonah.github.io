import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

class NeighborhoodMap extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-4">
						<img className="images" src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Neighborhood Map" width="100%" height="100%"/>
					</div>
					<div className="col-md-8">
						<p className="description">
							- Map of places in my neighborhood such as restaurants and schools.<br/>
							- Created a map using Google Maps JavaScript API and the framework Knockout.js.<br/>
							- The user can read additional information and see a picture of the location.
						</p>
						<br/>
						<a href='https://maymoonah.github.io/Neighborhood-Map/'>
							<p>Go To Neighborhood Map!</p>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NeighborhoodMap;