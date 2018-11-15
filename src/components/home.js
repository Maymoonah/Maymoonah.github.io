import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className="homepage">
				<div className="jumbotron">
					<h1 className="display-4">Welcome to Maymoonah's Portfolio!</h1>
					<hr className="my-4" />
					<p className="lead">
					    <Link to="/projects" className="btn btn-primary btn-lg" role="button">Check It Out !</Link>
					</p>
				</div>				
			</div>
		);
	}
}

export default Home;