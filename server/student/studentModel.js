var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
	name : String,
	number : String,
	year : String,
	section : String
});

var student = mongoose.model('student', studentSchema);

module.exports = student; 