//you need to require some files here
teacherController = require('../teacher/teacherController.js')
studentController = require('../student/studentController.js')

module.exports = function (app, express) {

//=============================================================================
/*								movie route									 */
//=============================================================================
	app.get('/api/teacher/getAll', teacherController.getAllTeacher);
	//here you have to add two more routes
	app.post('/api/teacher/insertTeach', teacherController.insertTeacher );
	app.get('/api/teacher/:id', teacherController.FindTechByID);

	
//=============================================================================
/*								book route									 */
//=============================================================================
	app.post('/api/student/insertStu', studentController.insertStudent);
	//here you have to add two more routes
	app.get('/api/student/getAll', studentController.getAllStudent);
	app.get('/api/student/:id', studentController.FindStuById);

};

