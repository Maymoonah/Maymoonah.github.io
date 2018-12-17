//Backend for the contact form using ExpressJS and Nodemailer

const express = require('express');
const bodyParser = require('body-parser');
const expressHan = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

/*
//view engine
app.engine('handlebars', expressHan());
app.set('view engine', 'handlebars');

//Static folder
app.use('/public', express.static(path.join(__dirname, 'src')));

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/contact', (req, res) => {
	res.render('contact');
});
*/

const urlencodedParser = bodyParser.urlencoded({ extended:false });

  

