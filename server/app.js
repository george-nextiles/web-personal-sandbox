require("dotenv").config()
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const session = require('express-session')
var app = require("liquid-express-views")(express())

// console.log("Express App has been established")

var indexRouter = require('./routes/index');

const middleware = (app) => {
	// console.log("Middleware function has begun!")
	app.use(logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cors()) 
	//app.use(cookieParser());
	app.use(express.static(path.join(__dirname, 'views')));
	app.use(
		session({
			secret: process.env.SECRET,
			saveUninitialized: true,
			resave: false,
		})
	)
	// console.log("Middleware function has run!")
}

middleware(app)

app.use('/', indexRouter);

app.get('/error', (req, res) => {
	const error = req.query.error || 'This Page Does Not Exist'
	res.render('error.liquid', { error  })
	console.log(`Error: ${error}.`)
})

module.exports = app;
