import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PixelArt extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-4">
						<img className="images" src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Pixel Art" width="100%" height="100%"/>
					</div>
					<div className="col-md-8">
						<p className="description">
							- Customizable canvas where the user can create art by coloring pixels.
							<br />
							- I created the application using HTML5, CSS3, and JavaScript.
						</p>
						<br/>
						<Link to='https://maymoonah.github.io/Pixel-Art-Maker/'>
							<p>Go To Pixel Art!</p>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default PixelArt;