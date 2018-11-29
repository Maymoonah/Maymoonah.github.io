import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Home extends Component {
	render() {
		return (
			<div className="homepage">
				<Jumbotron className="jumbo">
					<h1 className="name display-4">Welcome to Maymoonah's Portfolio!</h1>
				</Jumbotron>	
			</div>
		);
	}
}

export default Home;