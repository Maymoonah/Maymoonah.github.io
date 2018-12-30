import React, { Component } from 'react';
import { form, FormGroup, FormControl, Button } from 'react-bootstrap';

class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<div className="notice">
					<p>
						Note: Contact form not working yet.
						<br />
						For any inquiries, please send email to: <span>maymoonah.ca@gmail.com</span>
					</p>
				</div>
				<form className="contactForm" method="POST">
				  <FormGroup role="form">
				  	<h1>Contact Me</h1>
				    <FormControl type="text" className="form-control" name="firstName" placeholder="First Name"/>
				    <FormControl type="text" className="form-control" name="lastName" placeholder="Last Name"/>
				    <FormControl type="text" className="form-control" name="email" placeholder="Email"/>
				    <FormControl className="form-control textArea" name="textarea" componentClass="textarea" placeholder="Message..." />
				    <Button className="btn btn-large centerButton" type="submit" name="submit">Send</Button>
				  </FormGroup>
				</form>
				<div className="social-icons">
					<p id="github"><a href="https://github.com/Maymoonah">Github <i className="fab fa-github"></i></a></p>
					<p id="linkedin"><a href="https://www.linkedin.com/in/maymoonahm/">Linkedin <i className="fab fa-linkedin"></i></a></p>					
				</div>
			</div>
		);
	}
}

export default Contact;