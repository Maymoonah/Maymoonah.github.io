import React, { Component } from 'react';

class AboutMe extends Component {
	render() {
		return (
			<div className="about container">
				<div className="row">
					<div className="col-md-12">
						<h1 className="title">About Me</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4">
						<img src="../../images/May.JPG" alt="Maymoonah"/>
					</div>
					<div className="col-md-8">
						<p className="description">
							Front-End Web Developer skilled in building web applications using HTML, CSS, and JavaScript.
							Over 7 years of experience in education which taught me patience in dealing with different 
							personality types and problem-solving by formulating solutions to different learning hindrances.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutMe;