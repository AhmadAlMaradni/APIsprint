//require express and mongoose here
var express = require('express');
var mongoose = require('mongoose');

var app = express();

//require your middleware and routes here
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);
//=============================================================================
/*									Database								 */
//=============================================================================
mongoose.connect('mongodb://localhost/RbkUni');

var db = mongoose.connection
db.once('open', function(){
	console.log('connect to mongodb');

})

	//here you will have to connect to your mongo database, 
	//set the port number and console log something so that 
	//you know that the mongodb is connected

//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests or certain port
app.listen(9000, function () {
	console.log('listen for port...9000')
})

module.exports = app;//some thing;