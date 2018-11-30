import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import art from '../images/Pixel.png';

class PixelArt extends Component {
	render() {
		return (
			<div className="container art">
				<h2 className="projectTitle">Pixel Art</h2>
				<div className="row">
					<div className="col-md-4">
						<img className="images" src={art} alt="Pixel Art" width="100%" height="100%"/>
					</div>
					<div className="col-md-8 description">
						<p>
							<ul>
								<li>Customizable canvas where the user can create art by coloring pixels.</li>
							<br />
								<li>I created the application using HTML5, CSS3, and JavaScript.</li>
							</ul>
						</p>
						<br/>
						<Link to='https://maymoonah.github.io/Pixel-Art-Maker/'>
							<button className="btn projectBtn">Go To Pixel Art!</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default PixelArt;