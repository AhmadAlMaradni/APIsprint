var mongoose = require('mongoose');

var teacherSchema = new mongoose.Schema({
	name : String,
	number : String,
	department : String,
	classes : String
});

var teacher = mongoose.model('teacher', teacherSchema);

module.exports = teacher; 