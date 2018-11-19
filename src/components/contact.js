import React, { Component } from 'react';
import { form, FormGroup, FormControl, Button } from 'react-bootstrap';

class Contact extends Component {
	render() {
		return (
			<form className="contact-form" onSubmit={this.gotEmail}>
			  <FormGroup role="form">
			    <FormControl type="text" className="form-control" name="firstName"/>
			    <FormControl type="text" className="form-control" name="lastName"/>
			    <FormControl type="text" className="form-control" name="email"/>
			    <FormControl className="form-control" componentClass="textarea" placeholder="Message..." />
			    <Button className="btn btn-primary btn-large centerButton" type="submit">Send</Button>
			  </FormGroup>
			</form>
		);
	}
}

export default Contact;